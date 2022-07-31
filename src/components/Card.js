function Card() {
    return (
        <div className="card">
            <div className="favorite">
                <img src='/img/heart-unliked.svg' alt='heart-unliked' />
            </div>
            <img width={133} height={112} src="./img/sneakers/1.jpg" alt="" />
            <h5>Чоловічі кросівки Nike Blazer Mid Suede</h5>
            <div className="d-flex justify-between align-center">
                <div className="d-flex flex-column">
                    <span>Ціна:</span>
                    <b>1299 грн.</b>
                </div>
                <button className="button">
                    <img width={11} height={11} src="./img/plus.svg" alt="plus" />
                </button>
            </div>
        </div>
    )
};
export default Card;


