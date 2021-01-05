import React from 'react';
import "./Header.css";
import { Link } from "react-router-dom";
import SearchIcon from "@material-ui/icons/Search";
import ShoppingBasketIcon from "@material-ui/icons/ShoppingBasket";
import { useStateValue } from './StateProvider';
import { auth } from './firebase';

function Header() {

const [{ basket, user }] = useStateValue();

const handleAuthentication = () => {
    if (user) {
        auth.signOut();
    }
};

    return (
        <nav className="header">
        {/* LOGO */}
            <Link to="/">
                <img 
                className="header__logo" 
                src="http://pngimg.com/uploads/amazon/amazon_PNG25.png"
                alt=""/>
            </Link>
            
        {/* SEARCH BOX */}
        <div className="header__search">
        <input type="text" className="header__searchInput"/>
        <SearchIcon className="header__searchIcon" />
        </div>
        
        {/* 3 LINKS */}
        <div className="header__nav">
            {/* 1 LINK */}
            <Link to={!user && "/login"} className="header__link">
                <div onClick={handleAuthentication} className="header__option">
                    <span className="header__optionOne">
                        Hello {!user ? 'Guest' : user.email}</span>
                    <span className="header__optionTwo">
                        {user ? "Sign Out" : "Sign in"}</span>
                </div>
            </Link>
            {/* 2 LINK */}
          <Link to="/" className="header__link">
                <div className="header__option">
                    <span className="header__optionOne">Returns</span>
                    <span className="header__optionTwo">& orders</span>
                </div>
                
            </Link>
            {/* 3 LINK */}
            <Link to="/" className="header__link">
                <div className="header__option">
                    <span className="header__optionOne">Your</span>
                    <span className="header__optionTwo">Prime</span>
                </div> 
                
            </Link>
            {/* 4 LINK */}
            <Link to="/Checkout" className="header__link">
                <div className="header__optionBasket">
                    {/* SHOPPING BASKET ICONS */}
                    <ShoppingBasketIcon/>
                    {/* NUMBER OF ITEMS IN THE BASKET */}
                    <span className="header__optionTwo  header__basketCount">
                      {basket?.length}</span>
                </div>
            </Link>
        </div>

        {/* BAsKET ICON WITH NUMBER */}

    </nav>
    ); 
}

export default Header;
