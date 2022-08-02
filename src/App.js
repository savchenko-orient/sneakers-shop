import React from 'react';
import Card from './components/Card';
import Header from './components/Header';
import Drawer from './components/Drawer';


function App() {
  const [items, setItems] = React.useState([]);
  const [cartItems, setCartItems] = React.useState([]);
  const [cartOpened, setCartOpened] = React.useState(false);
  const onClickCart = () => {
    setCartOpened(!cartOpened)
  };

  React.useEffect(() => {
    fetch('https://62e927ef01787ec712126779.mockapi.io/Items').then((data) => {
      return data.json().then((data) => { setItems(data); });
    });
  }, []);

  const onAddToCart = (obj) => {
    setCartItems(prev => [...prev, obj]);    /*prev - это предыдущие данные из переменной в useState. в данном случае из cartItems*/
  };
  console.log('cartItems: ', cartItems);


  return (
    <div className="wrapper clear">
      {cartOpened && <Drawer items={cartItems} onClose={onClickCart} />}   {/*true && true Тогда это выполнится.*/}
      <Header onClickCart={onClickCart} />
      <div className="content p-40">
        <div className="mb-40 align-center justify-between d-flex">
          <h1 >Всі кросівки</h1>
          <div className="search-block d-flex">
            <img src="/img/search.svg" alt="search" />
            <input type="text" placeholder='Пошук...' />
          </div>
        </div>
        <div className="d-flex flex-wrap">
          {items.map((item, index) => (
            <Card title={item.title}
              price={item.price}
              imgURL={item.imgURL}
              onPlus={onAddToCart}
              onFavorite={() => console.log('Нажали Лайк')}
              key={index} />
          ))}
        </div>
      </div>
    </div>
  );
}

export default App;