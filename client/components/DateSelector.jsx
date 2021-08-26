import React from 'react';

const DateSelector = (props) => (  
    <form className="overview" onSubmit={props.handleDateSubmit}>
        <label>
        Select Date:
        <div className="dateSelector">    
                <select value={props.date} onChange={props.changeDate}>
                    <option value={0}>Last Night</option>
                    <option value={1}>2 Nights Ago</option>
                    <option value={2}>3 Nights Ago</option>
                </select>   
            </div>  
            <input type="submit" value="Submit" style={{width: '100px'}}/>
        </label>
    </form>
)

export default DateSelector;
