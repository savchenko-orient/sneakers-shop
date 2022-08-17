import React from 'react';
import CartItem from "./CartItem";

function Drawer({ onClose, items = [], onRemove }) {

    return (
        <div className="overlay">
            <div className="drawer">
                <h2 className="d-flex justify-between mb-30">
                    Кошик <img onClick={onClose} className="cu-p" src="/img/btn-remove.svg" alt="btn-remove" />
                </h2>


                {
                    items.length > 0 ? (<div className="d-flex flex-column flex"><div className="items">
                        {items.map((item, index) => (
                            <CartItem title={item.title}
                                price={item.price}
                                imgURL={item.imgURL}
                                onRemove={onRemove}
                                id={item.id}
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
                        </div></div>
                    ) : (<div className="cartEmpty d-flex align-center justify-center flex-column flex">
                        <img className='mb-20' width={120} height={120} src="/img/empty-cart.jpg" alt="empty-cart" />
                        <h2>Кошик пустий</h2>
                        <p className='opacity-6'>Додайте річ щоб зробити замовлення</p>
                        <button className='greenButton' onClick={onClose}>
                            <img src="/img/arrow.svg" alt="arrow" />
                            Повернутись назад
                        </button>
                    </div>)
                }


            </div>
        </div>
    )
}

export default Drawer;