import styles from './Card.module.scss';
console.log('styles: ', styles);

function Card(props) {
    const onClickBtn = () => {
        alert(props.title);
    }
    return (
        <div className={styles.card}>
            <div className={styles.favorite}>
                <img src='/img/heart-unliked.svg' alt='heart-unliked' />
            </div>
            <img width={133} height={112} src={props.imgURL} alt="sneakers" />
            <h5> {props.title} </h5>
            <div className="d-flex justify-between align-center">
                <div className="d-flex flex-column">
                    <span>Ціна:</span>
                    <b> {props.price} грн.</b>
                </div>
                <button className="button" onClick={onClickBtn}>
                    <img width={11} height={11} src="./img/plus.svg" alt="plus" />
                </button>
            </div>
        </div>
    )
};
export default Card;


