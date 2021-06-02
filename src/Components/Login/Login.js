import React from 'react';
import './Login.css';
import SocialLogin from '../SocialLogin/SocialLogin';
import { Link, useHistory, useLocation } from 'react-router-dom';
import { useAuth } from '../../Contexts/AuthContext';

const Login = () => {

    const {handleEmailLogin} = useAuth();
    const history = useHistory();
    const location = useLocation();
    let { from } = location.state || { from: { pathname: "/" } };

    const handleLogin = async (e) => {
        e.preventDefault();
        const email = document.getElementById("email").value;
        const password = document.getElementById("password").value;
        await handleEmailLogin(email,password);
        history.replace(from)
    }

    return (
        <div className="login pb-5">
           <div className="container">
                <div className="row">
                    <div className="col-md-5 mx-auto">
                        <form onSubmit={handleLogin} className="mt-5 border rounded pr-5 pl-5 pt-4 pb-4">
                            <h4 className="mb-4">Login</h4>
                            <div className="form-group">
                                <input type="email" className="form-control" id="email" aria-describedby="emailHelp" placeholder="Username or Email" required />
                            </div>
                            <div className="form-group">
                                <input type="password" className="form-control" id="password" placeholder="Password" required />
                            </div><button type="submit" className="btn mt-3 w-100">Login</button>
                            <div className="text-center mt-1">
                                <small className="font-weight-bold">Don't have an account? 
                                    <Link to="/signup">
                                        <span className="tomato"><u> Create an account</u></span>
                                    </Link>
                                </small>
                            </div>
                        </form>

                            
                        <SocialLogin></SocialLogin>
                    </div>
                </div>
           </div>
        </div>
    );
};

export default Login;