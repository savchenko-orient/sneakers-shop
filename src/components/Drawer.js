function Drawer() {
    return (
        <div style={{ 'display': 'none' }} className="overlay">
            <div className="drawer">
                <h2 className="d-flex justify-between mb-30">Кошик <img className="cu-p" src="/img/btn-remove.svg" alt="btn-remove" /></h2>
                <div className="items">
                    <div className="cartItem d-flex align-center mb-20">
                        <div style={{ backgroundImage: 'url(/img/sneakers/1.jpg)' }} className="cartItemImg"></div>
                        <div className="mr-20 flex">
                            <p className="mb-5">Чоловічі кросівки Nike Blazer Mid Suede</p>
                            <b>1205 грн.</b>
                        </div>
                        <img className="removeBtn" src="/img/btn-remove.svg" alt="btn-remove" />
                    </div>
                    <div className="cartItem d-flex align-center mb-20">
                        <div style={{ backgroundImage: 'url(/img/sneakers/1.jpg)' }} className="cartItemImg"></div>
                        <div className="mr-20 flex">
                            <p className="mb-5">Чоловічі кросівки Nike Blazer Mid Suede</p>
                            <b>1205 грн.</b>
                        </div>
                        <img className="removeBtn" src="/img/btn-remove.svg" alt="btn-remove" />
                    </div>
                </div>
                <div className="cartTotalBlock">
                    <ul>
                        <li >
                            <span>Сумма</span>
                            <div></div>
                            <b>1000 грн</b>
                        </li>
                        <li >
                            <span>Податок 5%</span>
                            <div></div>
                            <b>50 грн</b>
                        </li>
                    </ul>
                    <button className="greenButton">Оформити замовлення <img src="/img/arrow.svg" alt="arrow" /></button>
                </div>
            </div>
        </div>
    )
}

export default Drawer;