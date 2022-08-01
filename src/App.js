import Card from './components/Card';
import Header from './components/Header';
import Drawer from './components/Drawer';

const arr = [{
  title: 'Чоловічі кросівки Nike Blazer Mid Suede',
  price: 1299,
  imgURL: "/img/sneakers/1.jpg"
}, {
  title: 'Чоловічі кросівки Nike Air Max 270',
  price: 1800,
  imgURL: '/img/sneakers/2.jpg'
}, {
  title: 'Чоловічі кросівки Nike Blazer Mid Suede',
  price: 1769,
  imgURL: '/img/sneakers/3.jpg'
}, {
  title: 'Кросівки Puma X Aka Boku Future Rider',
  price: 1600,
  imgURL: '/img/sneakers/4.jpg'
}];

function App() {
  return (
    <div className="wrapper clear">
      <Drawer />
      <Header />

      <div className="content p-40">
        <div className="mb-40 align-center justify-between d-flex">
          <h1 >Всі кросівки</h1>
          <div className="search-block d-flex">
            <img src="/img/search.svg" alt="search" />
            <input type="text" placeholder='Пошук...' />
          </div>
        </div>
        <div className="d-flex">
          {arr.map((item, index) => (
            <Card title={item.title} price={item.price} imgURL={item.imgURL} key={index} />
          ))}
        </div>
      </div>
    </div>
  );
}

export default App;