import React from 'react';
import AvailableVehicles from '../AvailableVehicles/AvailableVehicles';

const SearchResult = (props) => {
    return (
        <div className="col-md-4 mb-4">
            <div className="search-result-container rounded-lg">
                <div className="from-to rounded-lg p-3">
                    <span className="circle-up"></span>
                    <span className="line"></span>
                    <span className="circle-down"></span>
                    <div className="location-names">
                        <p>{props.from.toUpperCase()}</p>
                        <p className="mt-4">{props.to.toUpperCase()}</p>
                    </div>
                </div>
                {
                    props.filteredData.map(data => <AvailableVehicles filteredData={data}></AvailableVehicles>) 
                }
            </div>
        </div>
    );
};

export default SearchResult;