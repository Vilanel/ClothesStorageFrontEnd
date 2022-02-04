import React from 'react';
import classes from './Section1.module.css';

const Section1 = () => {
    let background = {
        background: "url('Pictures/Main/main.jpg') 50%/cover no-repeat",
        height:"500px"
    }
    return (
        <section style={background} className={classes.firstSection}>
            <div className={classes.firstSection__box}>
                <div className={classes.firstSection__header}>
                    TOP SHOP
                </div>
                <div className={classes.firstSection__description}>
                    Are you ready for an amazing online shopping experience? 
                    Check out Top Shop, where you’ll find a great selection 
                    at the most competitive prices. If you can’t find what 
                    you’re looking for, contact us today.
                </div>
            </div> 
        </section>
    );
}

export default Section1;