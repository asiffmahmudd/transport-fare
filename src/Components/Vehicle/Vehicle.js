import React from 'react';
import './Vehicle.css';
import bike from "../../img/bike.png";
import car from "../../img/car.png";
import bus from "../../img/bus.png";
import train from "../../img/train.png";
import { Link } from 'react-router-dom';

const Vehicle = (props) => {
    let imgSrc;
    if(props.vehicle === "bike"){
        imgSrc = bike;
    }
    else if(props.vehicle === "car"){
        imgSrc = car;
    }
    else if(props.vehicle === "bus"){
        imgSrc = bus;
    }
    else if(props.vehicle === "train"){
        imgSrc = train;
    }
    const url = "/destination/" + props.vehicle;
    
    return (
        <div className="col-md-2 vehicle-container mt-5">
            <div className="">
                <Link to={url}><img className="vehicle-img" src={imgSrc} alt=""/></Link>
            </div>
        </div>
        
    );
};

export default Vehicle;