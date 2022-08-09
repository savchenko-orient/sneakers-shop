import Card from '../components/Card';

function Home({
    searchValue,
    setSearchValue,
    onChangeSearchInput,
    items,
    onAddToCart,
    onAddToFavorite }) {
    return (
        <div className="content p-40">
            <div className="mb-40 align-center justify-between d-flex">
                <h1 >{searchValue ? `Пошук по запиту: "${searchValue}"` : 'Всі кросівки'}</h1>
                <div className="search-block d-flex">
                    <img src="/img/search.svg" alt="search" />
                    {searchValue && (
                        <img
                            onClick={() => setSearchValue('')}
                            className="clear cu-p"
                            src="/img/btn-remove.svg"
                            alt="Clear"
                        />
                    )}
                    <input onChange={onChangeSearchInput} value={searchValue} type="text" placeholder='Пошук...' />
                </div>
            </div>
            <div className="d-flex flex-wrap">
                {items.filter(item => item.title.toLowerCase().includes(searchValue.toLowerCase()))
                    .map((item, index) => (
                        <Card title={item.title}
                            price={item.price}
                            imgURL={item.imgURL}
                            id={item.id}
                            onPlus={(obj) => onAddToCart(obj)}
                            onFavorite={(obj) => onAddToFavorite(obj)}
                            key={index} />
                    ))}
            </div>
        </div>
    )
}

export default Home;