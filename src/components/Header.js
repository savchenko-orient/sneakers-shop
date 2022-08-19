import React from 'react';
import { Link } from 'react-router-dom';
import { useCart } from './../hooks/useCart';


function Header(props) {
    const { totalPrice } = useCart();

    return (
        <header className='d-flex justify-between align-center p-40'>
            <div className="d-flex align-center">
                <Link to="/">
                    <img width={40} height={40} src="/img/logo.png" alt="logo" />
                </Link>
                <div>
                    <h3 className="text-uppercase">Sneakers shop</h3>
                    <p className='opacity-5'>Магазин найкращих кросівок</p>
                </div>
            </div>
            <ul className="d-flex">
                <li className="mr-30 cu-p" onClick={props.onClickCart} >
                    <img className='mr-10' width={18} height={18} src="/img/cart.svg" alt="cart" />
                    <span >{totalPrice} грн.</span>
                </li>
                <li className="mr-30">
                    <Link to="/favorites">
                        <img width={18} height={18} src="/img/favorite.svg" alt="favorite" />
                    </Link>
                </li>
                <li className="mr-50">
                    <Link to="/orders">
                        <img width={18} height={18} src="/img/user.svg" alt="user" />
                    </Link>
                </li>
            </ul>
        </header>
    )
}

export default Header;