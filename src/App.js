import React from 'react';
import { Routes, Route } from 'react-router-dom';
import axios from 'axios';
import Header from './components/Header';
import Drawer from './components/Drawer';
import AppContext from './components/context';

import Home from './pages/Home';
import Favorites from './pages/Favorites';


function App() {
  const [items, setItems] = React.useState([]);
  const [cartItems, setCartItems] = React.useState([]);
  const [favorites, setFavorites] = React.useState([]);
  const [searchValue, setSearchValue] = React.useState('');
  const [cartOpened, setCartOpened] = React.useState(false);
  const [isLoading, setIsLoading] = React.useState(true);


  React.useEffect(() => {
    async function fetchData() {
      const itemsResponse = await axios.get('https://62e927ef01787ec712126779.mockapi.io/Items');
      const cartResponse = await axios.get('https://62e927ef01787ec712126779.mockapi.io/cart');
      const favoritesResponse = await axios.get('https://62e927ef01787ec712126779.mockapi.io/favorites');

      setIsLoading(false);

      setCartItems(cartResponse.data);
      setFavorites(favoritesResponse.data);
      setItems(itemsResponse.data);
    }
    fetchData();
  }, []);

  const onClickCart = () => {
    setCartOpened(!cartOpened)
  };

  const onAddToCart = (obj) => {
    try {
      if (cartItems.find(item => item.id === obj.id)) {
        axios.delete(`https://62e927ef01787ec712126779.mockapi.io/cart/${obj.id}`);
        setCartItems(prev => prev.filter(item => item.id !== obj.id));
      } else {
        axios.post('https://62e927ef01787ec712126779.mockapi.io/cart', obj);
        setCartItems((prev) => [...prev, obj]);    /*prev - это предыдущие данные из переменной в useState. в данном случае из cartItems*/
      }
    } catch (error) {

    }

  };
  const onRemoveFromCart = (obj) => {
    axios.delete(`https://62e927ef01787ec712126779.mockapi.io/cart/${obj.id}`);
    setCartItems((prev) => prev.filter(item => item.id !== obj.id));
  }

  const onAddToFavorite = async (obj) => {
    try {
      if (favorites.find(item => Number(item.id) === Number(obj.id))) {
        axios.delete(`https://62e927ef01787ec712126779.mockapi.io/favorites/${obj.id}`);
        setFavorites((prev) => prev.filter(item => Number(item.id) !== Number(obj.id)));
      } else {
        const { data } = await axios.post('https://62e927ef01787ec712126779.mockapi.io/favorites', obj);
        setFavorites((prev) => [...prev, data]);
      }
    } catch (error) {
      console.log('Не вдалося додати до фаворитів');
    }
  }

  const onChangeSearchInput = (event) => {
    setSearchValue(event.target.value);
  };

  const isItemAdded = (id) => {
    return cartItems.some((obj) => Number(obj.id) === Number(id))
  }

  return (
    <AppContext.Provider value={{ items, cartItems, favorites, isItemAdded, onAddToFavorite, setCartOpened, setCartItems }} >
      <div className="wrapper clear">
        {cartOpened && <Drawer items={cartItems} onClose={onClickCart} onRemove={onRemoveFromCart} />}   {/*true && true Тогда это выполнится.*/}
        <Header onClickCart={onClickCart} />
        <Routes>
          <Route exact path="/" element={
            <Home
              cartItems={cartItems}
              searchValue={searchValue}
              setSearchValue={setSearchValue}
              onChangeSearchInput={onChangeSearchInput}
              items={items}
              onAddToCart={onAddToCart}
              onAddToFavorite={onAddToFavorite}
              isLoading={isLoading}
            />
          }>
          </Route>
          <Route path="/favorites" element={
            <Favorites
            />
          }>
          </Route>
        </Routes>

      </div>
    </AppContext.Provider>
  );
}

export default App;