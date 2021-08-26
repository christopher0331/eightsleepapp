import React from 'react';
import userSignatures from '../../userSignatures';

const UserSelector = (props) => (  
    <div className="userSelector">    
        <select value={props.username} onChange={props.changeUser}>
            <option value={userSignatures.user3}>Jane</option>
            <option value={userSignatures.user2}>Cindy</option>
            <option value={userSignatures.user1}>Chris</option>
        </select>   
    </div>
)

export default UserSelector;
