import React from 'react';
import styles from './Card.module.scss';

function Card({ imgURL, title, price, onPlus }) {
    const [isAdded, setIsAdded] = React.useState(false);
    const [isFavorite, setIsFavorite] = React.useState(false);
    const onClickPlus = () => {
        onPlus({ title, price, imgURL })
        setIsAdded(!isAdded)
    }
    const onClickFavorite = () => {
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


