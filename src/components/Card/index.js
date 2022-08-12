import React from 'react';
import styles from './Card.module.scss';

function Card({ imgURL, title, price, onPlus, id, onFavorite, favorited = false, added = false }) {
    const [isAdded, setIsAdded] = React.useState(added);
    const [isFavorite, setIsFavorite] = React.useState(favorited);
    const onClickPlus = () => {
        onPlus({ title, price, imgURL, id })
        setIsAdded(!isAdded)
    }
    const onClickFavorite = () => {
        onFavorite({ title, price, imgURL, id })
        setIsFavorite(!isFavorite)
    }

    return (
        <div className={styles.card}>
            <img className={styles.favorite} onClick={onClickFavorite} src={isFavorite ? '/img/heart-liked.svg' : '/img/heart-unliked.svg'} alt='heart-unliked' />
            <img width={133} height={112} src={imgURL} alt="sneakers" />
            <h5> {title} </h5>
            <div className="d-flex justify-between align-center">
                <div className="d-flex flex-column">
                    <span>Ціна:</span>
                    <b> {price} грн.</b>
                </div>
                <img className={styles.plus}
                    onClick={onClickPlus}
                    src={isAdded ? "./img/btn-checked.svg" : "./img/btn-plus.svg"}
                    alt="plus" />

            </div>
        </div>
    )
};
export default Card;


