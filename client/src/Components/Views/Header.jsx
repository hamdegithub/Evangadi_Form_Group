import React, { useContext } from 'react';
import { Link } from "react-router-dom";
import './Header.css';
import { UserContext } from '../Contexts/UserContext';

// Importing Image
import logo from '../Resources/logo.png';

const Header = ({ log }) => {
    const [userData, setUserData] = useContext(UserContext);

    return (
        <header className='navbar-header'>
            <nav className="navbar navbar-expand-lg fixed-top">
                <div className='container'>
                    <div className="left">
                        <Link to="/" className='navbar-brand'><img src={logo} alt="Evangadi Logo" className='mt-1 wauto me-2 float-end' /></Link>
                    </div>

                    <div className="right collapse navbar-collapse bg-orange navbarCollapse lool">
                        <Link to="/" className='text-decoration-none righ'>Home</Link>
                        <Link to="/" className='text-decoration-none mx-4 righ'>How it Work</Link>
                        <button className='btn btn-primary px-5' onClick={log}>{ !userData.user ?  "SIGN IN" :  "LOGOUT" }</button>
                    </div>
                </div>
            </nav>
        </header>
    )
}

export default Header