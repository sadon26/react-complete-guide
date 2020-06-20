import React from 'react'

const UserOutput = (props) => {

    const style = {
        width: '200px',
        backgroundColor: '#ccc',
        margin: '10px auto'
    }

    return (
        <div style={style}>
        <p></p>
        <p style={props.styled}>My name is {props.username}</p>
        </div>
    )
}

export default UserOutput;