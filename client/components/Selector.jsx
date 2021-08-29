import React from 'react';

const Selector = (props) => (
    <div id="selector">
        <select value={props.currentView} onChange={props.updateData} style={{ color: 'black' }}>
            <option value='All'>All</option>
            <option value='Respiratory Rate'>Respiratory Rate</option>
            <option value='Room Temp'>Room Temp (°F)</option>
            <option value='Bed Temp'>Bed Temp (°F)</option>
            <option value='Heart Rate'>Heart Rate</option>
        </select>
    </div>
)

export default Selector;