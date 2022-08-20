import styles from './CartItem.module.scss';

function CartItem({ imgURL, title, price, onRemove, id }) {
    const onClickRemove = () => {
        onRemove({ id });
    }
    return (
        <div className={styles.cartItem}>
            <div style={{ backgroundImage: `url(${imgURL})` }}
                className={styles.cartItemImg}></div>
            <div className="mr-20 flex">
                <p className="mb-5">{title}</p>
                <b>{price} грн.</b>
            </div>
            <img className={styles.removeBtn} onClick={onClickRemove} src="img/btn-remove.svg" alt="btn-remove" />
        </div>
    )
};

export default CartItem;