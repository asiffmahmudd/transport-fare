import React, { useEffect, useState } from 'react';
import './Destination.css';
import map from '../../img/Map.png';


import { useParams } from 'react-router';

import UserInput from '../UserInput/UserInput';
import SearchResult from '../SearchResult/SearchResult';

const Destination = () => {

    const {vehicle} = useParams();
    
    
    const [vehicleData, setVehicleData] = useState([]);
    const [from, setFrom] = useState("");
    const [to, setTo] = useState("");
    const [filteredData, setFilteredData] = useState([]);
    

    useEffect( () => {
        fetch('https://run.mocky.io/v3/6372234e-a658-4811-b5a1-ea56a8888078')
        .then(response => response.json())
        .then(data => setVehicleData(data))
    },[]);

    let selectedVehicle;

    if(vehicle === "any"){
        selectedVehicle = vehicleData;
    }
    else{
        selectedVehicle = vehicleData.filter(data => data.vehicle.toLowerCase() === vehicle);
    }
    
    const handleUserSearch = (e) => {
        const destinationFrom = document.getElementById('inputFrom').value.toLowerCase();
        const destinationTo = document.getElementById('inputTo').value.toLowerCase();
        
        setFrom(destinationFrom);
        setTo(destinationTo);
        let data = selectedVehicle.filter(data => data.from.toLowerCase() === destinationFrom && data.to.toLowerCase() === destinationTo)
        if(data.length > 0){
            setFilteredData(data);
        }
        else{
            alert("Sorry, no result found");
        }
        e.preventDefault();
    }
    
    return (
        <div className="destination pb-5">
            <div className="container">
                <hr/>
                <div className="row mt-4">
                    {
                        filteredData.length === 0 && <UserInput handleUserSearch={handleUserSearch}></UserInput>
                    }
                    
                    {
                        filteredData.length > 0 && <SearchResult filteredData={filteredData} from={from} to={to}></SearchResult>
                    }
                    

                    <div className="col-md-8 map-img">
                        <img src={map} className="img-responsive" alt=""/>
                    </div>

                    
                    
                </div>
            </div>
        </div>
    );
};

export default Destination;