function Header(props) {
    return (
        <header className='d-flex justify-between align-center p-40'>
            <div className="d-flex align-center">
                <img width={40} height={40} src="/img/logo.png" alt="logo" />
                <div>
                    <h3 className="text-uppercase">Sneakers shop</h3>
                    <p className='opacity-5'>Магазин найкращих кросівок</p>
                </div>
            </div>
            <ul className="d-flex">
                <li className="mr-30 cu-p" onClick={props.onClickCart} >
                    <img className='mr-10' width={18} height={18} src="/img/cart.svg" alt="cart" />
                    <span >1205 грн.</span>
                </li>
                <li className="mr-30">
                    <img width={18} height={18} src="/img/favorite.svg" alt="favorite" />
                </li>
                <li className="mr-50">
                    <img width={18} height={18} src="/img/user.svg" alt="user" />
                </li>
            </ul>
        </header>
    )
}

export default Header;