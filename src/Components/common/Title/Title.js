import React from 'react';
import classes from './Title.module.css';

const Title = (props) => {
    return (
        <div className={classes.title}>
            <span className={classes.title__span}>{props.title}</span>
        </div>
    );
}

export default Title;