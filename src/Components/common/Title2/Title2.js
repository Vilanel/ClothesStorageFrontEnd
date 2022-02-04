import React from 'react';
import classes from './Title2.module.css';

const Title2 = (props) => {
    return (
        <span className={classes.title}>
            {props.title}
        </span>
    );
}

export default Title2;