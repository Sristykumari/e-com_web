import React, { useContext, useState } from 'react'
import './Navbar.css';
import logo from '../Assets/logo.png';
import { Link } from 'react-router-dom';
import { ShopContext } from '../../Context/ShopContext';


export const Navbar = () => {
  const [menu, setMenu] = useState('shop');
  const {getTotalCartItems} = useContext(ShopContext);

  return (
    <div className='navbar'>
      <div className="nav-logo">
        <img src={logo} alt='' />
        <p>SHOPPER</p>
      </div>
      <ul className="nav-menu" country-info-list="true">
        <li onClick={() => { setMenu('shop') }}><Link style={{ textDecoration: 'none' }} to='/'>Home</Link>{menu === 'shop' ? <hr /> : <></>}</li>
        <li onClick={() => { setMenu('mens') }}><Link style={{ textDecoration: 'none' }} to='/mens'>Men</Link>{menu === 'mens' ? <hr /> : <></>}</li>
        <li onClick={() => { setMenu('womens') }}><Link style={{ textDecoration: 'none' }} to='/womens'>Women</Link>{menu === 'womens' ? <hr /> : <></>}</li>
        <li onClick={() => { setMenu('kids') }}><Link style={{ textDecoration: 'none' }} to='/kids' s>Kids</Link>{menu === 'kids' ? <hr /> : <></>}</li>
      </ul>
      <div className="nav-login-cart">
        <Link to='/login'><i className="fa-regular fa-user"></i></Link>
        <Link to='/wishlist'><i className="fa-regular fa-heart"></i></Link>
        <Link to='/'>
          <i className="fa-solid fa-magnifying-glass"></i>
        </Link>
        <Link to='/cart'><i className="fa-solid fa-cart-shopping"></i></Link>
        <div className="nav-cart-count">{getTotalCartItems()}</div>
      </div>

    </div>

  )
}
