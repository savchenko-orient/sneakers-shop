import React from 'react';
import CartItem from "./CartItem";
import Info from './Info';
import AppContext from './context';
import axios from 'axios';

const delay = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

function Drawer({ onClose, items = [], onRemove }) {
    const { cartItems, setCartItems } = React.useContext(AppContext);
    const [isOrderCompleted, setIsOrderCompleted] = React.useState(false);
    const [orderId, setOrderId] = React.useState(null);
    const [isLoading, setIsLoading] = React.useState(false);

    const onClickOrder = async () => {
        try {
            setIsLoading(true);
            const { data } = await axios.post('https://62e927ef01787ec712126779.mockapi.io/orders', {
                items: cartItems
            });

            setOrderId(data.id);
            setIsOrderCompleted(true);
            setCartItems([]);

            for (let i = 1; i < cartItems.length + 1; i++) {
                const item = cartItems[i];
                console.log(cartItems.length);
                await axios.delete('https://62e927ef01787ec712126779.mockapi.io/cart/' + i);
                await delay(1000);
            }
            // Костыль! из-за особенности работы mockapi

        } catch (error) {
            alert('Не вдалося створити замовлення!')
        }
        setIsLoading(false);
    }


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
                            <button disabled={isLoading}
                                onClick={onClickOrder}
                                className="greenButton">Оформити замовлення
                                <img src="/img/arrow.svg" alt="arrow" />
                            </button>
                        </div></div>
                    ) : (
                        <Info
                            title={isOrderCompleted ? "Замовлення оформлено" : "Кошик порожній"}
                            description={isOrderCompleted
                                ? `Ваше замовлення №${orderId} cкоро буде передано кур'єрській службі`
                                : "Додайте хоча б один товар до кошика"}
                            image={isOrderCompleted ? "/img/complete-order.jpg" : "/img/empty-cart.jpg"}
                        />
                    )
                }


            </div>
        </div>
    )
}

export default Drawer;