import React, { useContext } from 'react';
import facebook from '../../img/facebook.png';
import google from '../../img/google.png';
import './SocialLogin.css';

import { UserContext } from '../../App';
import { useHistory, useLocation } from 'react-router';
import { handleUserLogin, initializeLoginFrameWork } from '../../firebaseManager';

initializeLoginFrameWork();

const SocialLogin = () => {

    const [loggedInUser, setLoggedInUser] = useContext(UserContext);
    let history = useHistory();
    let location = useLocation();

    let { from } = location.state || { from: { pathname: "/" } };

    const handleLogin = (socialNetwork) => {
        handleUserLogin(socialNetwork)
        .then(result => {
            setLoggedInUser(result);
            history.replace(from);
        })
    }

    return (
        <div>
            <div className="or-text text-center">
                <hr/>
                <small>Or</small>
            </div>
            <div className="mb-2 social" onClick={() => {handleLogin("facebook")}}>
                <div className="social-img">
                    <img src={facebook} alt=""/>
                </div>
                <span className="text-center">Continue with Facebook</span>
            </div>
            <div className="social" onClick={() => {handleLogin("google")}}>
                <div className="social-img">
                    <img src={google} alt=""/>
                </div>
                <span className="text-center">Continue with Google</span>
            </div>
        </div>
    );
};

export default SocialLogin;