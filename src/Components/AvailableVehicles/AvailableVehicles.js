import React from 'react';
import './AvailableVehicles.css';
import car from '../../img/car.png';
import bike from '../../img/bike.png';
import bus from '../../img/bus.png';
import train from '../../img/train.png';
import people from '../../img/peopleicon.png';

const AvailableVehicles = (props) => {
    const {vehicle, passenger, fare} = props.filteredData;
    let imgSrc;
    if(vehicle.toLowerCase() === "bike"){
        imgSrc = bike;
    }
    else if(vehicle === "car"){
        imgSrc = car;
    }
    else if(vehicle === "bus"){
        imgSrc = bus;
    }
    else if(vehicle === "train"){
        imgSrc = train;
    }
    return (
        <div className="search-result rounded-lg mt-3">
            <img src={imgSrc} className="vehicle-img" alt=""/>
            <span>{vehicle.toUpperCase()}</span>
            <img src={people} className="people-img" alt=""/>
            <span>{passenger}</span>
            <span className="float-right mt-2">${fare}</span>
        </div>
    );
};

export default AvailableVehicles;