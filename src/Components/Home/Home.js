import React from 'react';
import './Home.css';
import bg from '../../img/Bg.png';
import Vehicle from '../Vehicle/Vehicle';

const Home = () => {
    return (
        <div className="home">
            <img className="bg-img" src={bg} alt="" />
            <div className="container">
                <div className="row mt-5 vehicles-row p-2">
                    <Vehicle vehicle="bike"></Vehicle>
                    <Vehicle vehicle="car"></Vehicle>
                    <Vehicle vehicle="bus"></Vehicle>
                    <Vehicle vehicle="train"></Vehicle>
                </div>
            </div>
            
        </div>
    );
};

export default Home;