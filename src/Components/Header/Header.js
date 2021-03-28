import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { UserContext } from '../../App';
import './Header.css';

import { handleUserLogout } from '../../firebaseManager';

const Header = () => {
    const [loggedInUser, setLoggedInUser] = useContext(UserContext);

    const handleLogout = () => {
        handleUserLogout()
        .then(result => {
            setLoggedInUser(result);
        });
    }

    

    return (
        <div className="nav-bar">
            <nav className="container navbar navbar-expand-lg navbar-light">
                <Link className="navbar-brand" to="/">Transport Fare</Link>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNav">
                    <ul className="navbar-nav ml-auto">
                        <li className="nav-item">
                            <Link className="nav-link" to="/">Home</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="/destination/any">Destination</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="/blog">Blog</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="/contact">Contact</Link>
                        </li>
                        {
                            loggedInUser?.displayName &&
                            <>
                                <li className="nav-item">
                                    <p className="nav-link font-weight-bold text-dark">{loggedInUser?.displayName}</p>
                                </li>
                                <li className="nav-item">
                                    <button className="btn btn-primary" onClick={handleLogout}>Logout</button>
                                </li>
                            </>
                        }
                        {
                            !loggedInUser?.displayName &&
                            <li className="nav-item">
                                <Link className="nav-link" to="/login"><button className="btn btn-primary">Login</button></Link>
                            </li>
                        }
                    </ul>
                </div>
            </nav>
        </div>
        
    );
};

export default Header;