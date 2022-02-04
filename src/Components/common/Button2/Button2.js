import React from 'react';
import './Button2.scss';

const Button2 = (props) => {
    return (
        <button onClick={props.function} 
                disabled={props.disabled}
                className='button2'>
            {props.text}
        </button>
    );
}

export default Button2;