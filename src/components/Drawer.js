import React from 'react';
import CartItem from "./CartItem";

function Drawer({ onClose, items = [], onRemove }) {

    return (
        <div className="overlay">
            <div className="drawer">
                <h2 className="d-flex justify-between mb-30">Кошик <img onClick={onClose} className="cu-p" src="/img/btn-remove.svg" alt="btn-remove" /></h2>
                <div className="items">
                    {items.map((item, index) => (
                        <CartItem title={item.title}
                            price={item.price}
                            imgURL={item.imgURL}
                            onRemove={onRemove}
                            key={index} />
                    ))}
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