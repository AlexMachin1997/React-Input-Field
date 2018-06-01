import React from 'react';

const validation = (props) => {

    const validation = {
        display: 'inline-block',
        padding: '16px',
        margin: '16px',
        border: '1px solid black',
        textAlign: 'center' 
    } 

    let validationMessage = 'Text Too Long';

    if(props.inputLength <= 5) {
        validationMessage = 'Text Not Long Enough ';
    }

    return (
        <div>
            <p>{validationMessage}</p>
        </div> 
    )
}

export default validation;