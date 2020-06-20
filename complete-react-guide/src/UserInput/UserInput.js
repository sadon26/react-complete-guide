import React from 'react';
import './UserInput.css'

const UserInput = (props) => {
    return (
        <div>
        <input type="text" className="userinput" onChange={props.change} value={props.name}/>
        </div>
    )
}

export default UserInput;