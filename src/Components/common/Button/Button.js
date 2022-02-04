import React from 'react';
import './Button.scss';

const Button = (props) => {
    return (
        <button onClick={props.function} 
                disabled={props.disabled}
                className='button'>
            {props.text}
        </button>
    );
}

export default Button;