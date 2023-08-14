import React from 'react';
import './Header.css';
import logo from '../amazonLogo.png';
import SearchIcon from "@mui/icons-material/Search";
import { ShoppingBasket } from '@mui/icons-material';
import { Link } from 'react-router-dom';
import { useStateValue } from '../StateProvider';
import { signOut } from 'firebase/auth';
import { auth } from '../firebase';

function Header() {
    const [{ basket, user }, dispatch] = useStateValue();
    const handleAuth = () => {
        if (user) {
            auth.signOut();
        }
    }
    return (
        <div className='header'>
            <Link to="/">
                <img className='header_logo' src={logo} />
            </Link>
            <div className="header_search">
                <input className='header_searchinput' type='text' />
                <SearchIcon className='header_searchicon' />
            </div>
            <div className="header_nav">
                <Link style={{textDecoration: 'none'}} to={ !user && '/login'}>
                    <div onClick={handleAuth} className="header_option">
                        <span className="header_option_lineone">
                            Hello {user ? user.email.substr(0, user.email.indexOf('@')) : "Guest"}
                        </span>
                        <span className="header_option_linetwo">
                           {user ? 'Sign out' : 'Sign in'}
                        </span>
                    </div>
                </Link>
                <div className="header_option">
                    <span className="header_option_lineone">
                        Returns
                    </span>
                    <span className="header_option_linetwo">
                        & Orders
                    </span>
                </div>
                <div className="header_option">
                    <span className="header_option_lineone">
                        Your
                    </span>
                    <span className="header_option_linetwo">
                        Prime
                    </span>
                </div>
                <Link to="/checkout">
                    <div className="header_optionbasket">
                        <ShoppingBasket />
                        <span className="header_option_linetwo header_basketcount">
                            {basket?.length}
                        </span>
                    </div>
                </Link>
            </div>
        </div>
    )
}

export default Header