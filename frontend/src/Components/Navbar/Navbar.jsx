import React, { useContext, useState, useRef } from 'react';
import './Navbar.css';
import { Link } from 'react-router-dom';
import logo from '../Assets/logo.png';
import cart_icon from '../Assets/cart_icon.png';
import { ShopContext } from '../../Context/ShopContext';
import nav_dropdown from '../Assets/nav_dropdownqq.png';

const Navbar = () => {
    const [menu, setMenu] = useState("Trang Chủ"); // Khởi tạo menu là ẩn
    const { getTotalCartItems } = useContext(ShopContext);
    const menuRef = useRef();

    const dropdown_toggle = () => {
        setMenu(!menu); // Thay đổi trạng thái của menu
    };

    return (
        <div className='navbar'>
            <div className="nav-logo">
                <img src={logo} alt="" />
                <p>HENRY FASHION</p>
            </div>
            <img className={`nav-dropdown ${menu ? 'open' : ''}`} onClick={dropdown_toggle} src={nav_dropdown} alt="" />
            <ul ref={menuRef} className={`nav-menu ${menu ? 'nav-menu-visible' : ''}`}>
                <li onClick={() => { setMenu("Trang Chủ") }}><Link style={{ textDecoration: 'none' }} to='/'>Trang Chủ</Link> {menu==="Trang chủ"?<hr/>:<></>} </li>
                <li onClick={() => { setMenu("Thời Trang Nam") }}><Link style={{ textDecoration: 'none' }} to='/mens'>Thời Trang Nam</Link> {menu==="Thời Trang Nam"?<hr/>:<></>} </li>
                <li onClick={() => { setMenu("Thời Trang Nữ") }}><Link style={{ textDecoration: 'none' }} to='/womens'>Thời Trang Nữ</Link> {menu==="Thời Trang Nữ"?<hr/>:<></>}</li>
                <li onClick={() => { setMenu("Thời Trang Thiếu Nhi") }}><Link style={{ textDecoration: 'none' }} to='/kids'>Thời Trang Thiếu Nhi</Link> {menu==="Thời Trang Thiếu Nhi"?<hr/>:<></>}</li>
               
            </ul>
            <div className="nav-login-cart">
                {localStorage.getItem('auth-token')
                ?<button onClick={()=>{localStorage.removeItem('auth-token');window.location.replace('/')}} >Đăng Xuất</button>
                :<Link to='/login'><button>Đăng Nhập</button></Link>}
                
                <Link to='/cart'><img src={cart_icon} alt="" /></Link>
                <div className="cart-count">{getTotalCartItems()}</div>
            </div>
        </div>
    );
}

export default Navbar;