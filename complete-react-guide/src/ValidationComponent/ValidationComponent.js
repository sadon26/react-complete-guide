import React from 'react'

const ValidationComponent = (props) => {
    let validationMessage = "Text long enough";

    if (props.textLength <= 5) {
        return validationMessage = 'Text too short'
    }

    return (
        <div>
            <p style={{color: 'blue'}}>
            {validationMessage}
            </p>
        </div>
    )
}

export default ValidationComponent
