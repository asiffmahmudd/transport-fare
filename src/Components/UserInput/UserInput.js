import React from 'react';

const UserInput = (props) => {
    return (
        <div className="col-md-4 mb-4">
            <div className="form-container">
                <form onSubmit={props.handleUserSearch} className="rounded-lg ">
                    <div className="form-group">
                        <label>Pick From</label>
                        <input type="text" className="form-control" id="inputFrom" placeholder="Pick From" required />
                    </div>
                    <div className="form-group">
                        <label>Pick To</label>
                        <input type="text" className="form-control" id="inputTo" placeholder="Pick To" required />
                    </div>
                    
                    <button type="submit" className="btn w-100">Search</button>
                </form>
            </div>
        </div>
    );
};

export default UserInput;