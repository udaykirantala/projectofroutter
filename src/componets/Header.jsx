import { Link, Route, Routes } from 'react-router'
import logo from '../assets/logo.png'
import '../componets/Header.css'
    function Header(){
    return(
        <>
        <header>
            <img src={logo} alt='logo' />

            <nav>
                <Link className='nav_links' to="/">Home</Link>
                <Link className='nav_links' to="/">Shop</Link>
                <Link className='nav_links' to="/">My Account</Link>
                <Link className='nav_links' to="/">Compare</Link>
                <Link className='nav_links' to="/">Login</Link>
            </nav>
            <div className='header_search_section'>
                <input type="search" name='Search' placeholder='Search For Items'/>
                <span><i class="fa-solid fa-magnifying-glass"></i></span>
            </div>
            <div className='heade_cart_heart_section'>
                <i class="fa-regular fa-heart"></i>
                <i class="fa-solid fa-bag-shopping"></i>
            </div>
        </header>
        </>
    )
    }
    export default Header