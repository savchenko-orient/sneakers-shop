import React from 'react';
import { Routes, Route } from 'react-router-dom';
import axios from 'axios';
import Header from './components/Header';
import Drawer from './components/Drawer';
import AppContext from './components/context';

import Home from './pages/Home';
import Favorites from './pages/Favorites';
import Orders from './pages/Orders';


function App() {
  const [items, setItems] = React.useState([]);
  const [cartItems, setCartItems] = React.useState([]);
  const [favorites, setFavorites] = React.useState([]);
  const [searchValue, setSearchValue] = React.useState('');
  const [cartOpened, setCartOpened] = React.useState(false);
  const [isLoading, setIsLoading] = React.useState(true);


  React.useEffect(() => {
    async function fetchData() {
      try {
        const [itemsResponse, cartResponse, favoritesResponse] = await Promise.all([
          axios.get('https://62e927ef01787ec712126779.mockapi.io/Items'),
          axios.get('https://62e927ef01787ec712126779.mockapi.io/cart'),
          axios.get('https://62e927ef01787ec712126779.mockapi.io/favorites')
        ]);

        setIsLoading(false);
        setCartItems(cartResponse.data);
        setFavorites(favoritesResponse.data);
        setItems(itemsResponse.data);
      } catch (error) {
        alert('Помилка під час запиту данних!');
        console.error('error: ', error);
      }
    }
    fetchData();
  }, []);

  const onClickCart = () => {
    setCartOpened(!cartOpened)
  };

  const onAddToCart = async (obj) => {
    try {
      if (cartItems.find(item => item.id === obj.id)) {
        setCartItems(prev => prev.filter(item => item.id !== obj.id));
        await axios.delete(`https://62e927ef01787ec712126779.mockapi.io/cart/${obj.id}`);
      } else {
        await axios.post('https://62e927ef01787ec712126779.mockapi.io/cart', obj);
        setCartItems((prev) => [...prev, obj]);    /*prev - это предыдущие данные из переменной в useState. в данном случае из cartItems*/
      }
    } catch (error) {
      alert('Помилка під час додавання до кошику!');
      console.error('error: ', error);
    }

  };

  const onRemoveFromCart = async (obj) => {
    try {
      axios.delete(`https://62e927ef01787ec712126779.mockapi.io/cart/${obj.id}`);
      setCartItems((prev) => prev.filter(item => item.id !== obj.id));

    } catch (error) {
      alert('Помилка під час видалення з кошику');
      console.error('error: ', error);
    }
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
      alert('Виникла помилка під час додавання до фаворитів');
      console.log('error: ', error);
    }
  }

  const onChangeSearchInput = (event) => {
    setSearchValue(event.target.value);
  };

  const isItemAdded = (id) => {
    return cartItems.some((obj) => Number(obj.parentId) === Number(id))
  }

  return (
    <AppContext.Provider
      value={{
        items,
        cartItems,
        favorites,
        isItemAdded,
        onAddToFavorite,
        onAddToCart,
        setCartOpened,
        setCartItems
      }} >
      <div className="wrapper clear">
        <Drawer
          items={cartItems}
          onClose={onClickCart}
          onRemove={onRemoveFromCart}
          opened={cartOpened}
        />
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

          <Route
            path="/favorites"
            element={
              <Favorites />
            }>
          </Route>

          <Route
            path="/orders"
            element={
              <Orders />
            }>
          </Route>

        </Routes>

      </div>
    </AppContext.Provider>
  );
}

export default App;