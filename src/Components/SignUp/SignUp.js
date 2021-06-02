import React from 'react';
import './SignUp.css';
import SocialLogin from '../SocialLogin/SocialLogin';
import { Link, useHistory, useLocation } from 'react-router-dom';
import { useAuth } from '../../Contexts/AuthContext';

const SignUp = () => {

    const {handleEmailSignup, updateName} = useAuth();

    let history = useHistory();
    let location = useLocation();
    let { from } = location.state || { from: { pathname: "/" } };

    const handleSignupWithEmail = async (e) => {
        e.preventDefault();
        const name = document.getElementById("name").value;
        const email = document.getElementById("email").value;
        const password = document.getElementById("password").value;
        if(passwordMatch()){
            await handleEmailSignup(email,password);
            await updateName(name)
            history.replace(from)
        }
        e.preventDefault();
    }
    
    const passwordMatch = () => {
        let bool = false;
        const password = document.getElementById("password").value;
        const confirmPassword = document.getElementById("confirmPassword").value;
        if(password.length < 6){
            document.getElementById("passwordMatch").innerHTML = "<span style='color:red'>Password should be at least 6 characters</span>";
            bool = false;
        }
        else{
            document.getElementById("passwordMatch").innerHTML = "";
            if(password === confirmPassword){
                document.getElementById("passwordMatch").innerHTML = "<span style='color:green'>Password matched</span>";
                bool = true;
            }
            else{
                document.getElementById("passwordMatch").innerHTML = "<span style='color:red'>Password don't match</span>";
                bool = false;
            }
        }
        return bool
    }


    return (
        <div className="login pb-5">
           <div className="container">
                <div className="row">
                    <div className="col-md-5 mx-auto">
                        <form onSubmit={handleSignupWithEmail} className="mt-5 border rounded pr-5 pl-5 pt-4 pb-4">
                            <h4 className="mb-4">Create an account</h4>
                            <div className="form-group">
                                <input type="name" className="form-control" id="name" aria-describedby="emailHelp" placeholder="Name" required />
                            </div>
                            <div className="form-group">
                                <input type="email" className="form-control" id="email" aria-describedby="emailHelp" placeholder="Username or Email" required />
                            </div>
                            <div className="form-group">
                                <input type="password" onKeyUp={passwordMatch} className="form-control" id="password" placeholder="Password" required />
                            </div>
                            <div className="form-group">
                                <input type="password" onKeyUp={passwordMatch} className="form-control" id="confirmPassword" placeholder="Confirm Password" required />
                            </div>
                            <label id="passwordMatch"></label>
                            <button className="btn mt-3 w-100" type="submit">Create an account</button>
                            <div className="text-center mt-1">
                                <small className="font-weight-bold">Already have an account? 
                                    <Link to="/login">
                                        <span className="tomato"><u> Login</u></span>
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

export default SignUp;