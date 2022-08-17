import React from 'react';
import Card from '../components/Card';
import AppContext from './../components/context';


function Favorites() {
    const { favorites, onAddToFavorite } = React.useContext(AppContext);


    return (
        <div className="content p-40">
            <div className="mb-40 align-center justify-between d-flex">
                <h1>Мої закладки</h1>
            </div>
            <div className="d-flex flex-wrap">
                {favorites.map((item, index) => (
                    <Card title={item.title}
                        price={item.price}
                        imgURL={item.imgURL}
                        id={item.id}
                        key={index}
                        onFavorite={(obj) => onAddToFavorite(obj)}
                        favorited={true} />
                ))}
            </div>
        </div>
    )
}

export default Favorites;