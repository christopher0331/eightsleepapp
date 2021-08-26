import React from 'react';

const Selector = (props) => (
    <div id="selector">
        <select value={props.currentView} onChange={props.updateData} style={{ color: 'black' }}>
            <option value='all'>All</option>
            <option value='respiratory'>Respiratory Rate</option>
            <option value='roomTemp'>Room Temp (°F)</option>
            <option value='bedTemp'>Bed Temp (°F)</option>
            <option value='heartRate'>Heart Rate</option>
        </select>
    </div>
)

export default Selector;