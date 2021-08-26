import React from 'react';
import userSignatures from '../../userSignatures';

const UserSelector = (props) => (  
    <form className="overview" onSubmit={props.handleUserSubmit}>
        <label>
        Select User:
            <div className="userSelector">    
                <select value={props.username} onChange={props.changeUser}>
                    <option value="Chris">Chris</option>
                    <option value="Cindy">Cindy</option>
                    <option value="Jane">Jane</option>
                </select>   
            </div>  
            <input type="submit" value="Submit" style={{width: '100px'}}/>
        </label>
     </form>
)

export default UserSelector;
