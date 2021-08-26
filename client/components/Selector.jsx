import React from 'react';

const Selector = (props) => (
    <div id="selector">
        <select value={props.currentView} onChange={props.updateData}>
            <option value='all'>All</option>
            <option value='respiratory'>Respiratory Rate</option>
            <option value='roomTemp'>Room Temp</option>
            <option value='bedTemp'>Bed Temp</option>
            <option value='heartRate'>Heart Rate</option>
        </select>   
    </div>
)

export default Selector;