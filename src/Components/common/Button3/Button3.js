import React from 'react';
import './Button3.scss';

const Button3 = (props) => {
    return (
        <button onClick={props.function} 
                disabled={props.disabled}
                className='button3'>
            {props.text}
            &#160; &#9776;
        </button>
    );
}

export default Button3;