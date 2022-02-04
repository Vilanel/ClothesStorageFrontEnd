import React from 'react';
import classes from './Section4.module.css';
import { Carousel } from 'react-responsive-carousel';

const Section4 = () => {
    return (
        <section className={classes.fourthSection}>
            <Carousel className={classes.fourthSection__carousel}>
                <div>
                    <img className={classes.fourthSection__img} src='Pictures/Main/1.jpg' alt='Slider1'/>
                </div>
                <div>
                    <img className={classes.fourthSection__img} src='Pictures/Main/2.jpg' alt='Slider2'/>
                </div>
                <div>
                    <img className={classes.fourthSection__img} src='Pictures/Main/3.jpg' alt='Slider3'/>
                </div>
                <div>
                    <img className={classes.fourthSection__img} src='Pictures/Main/4.jpg' alt='Slider4'/>
                </div>
                <div>
                    <img className={classes.fourthSection__img} src='Pictures/Main/5.jpg' alt='Slider5'/>
                </div>
                <div>
                    <img className={classes.fourthSection__img} src='Pictures/Main/6.jpg' alt='Slider6'/>
                </div>
                <div>
                    <img className={classes.fourthSection__img} src='Pictures/Main/7.jpg' alt='Slider7'/>
                </div>
                <div>
                    <img className={classes.fourthSection__img} src='Pictures/Main/8.jpg' alt='Slider8'/>
                </div>
                <div>
                    <img className={classes.fourthSection__img} src='Pictures/Main/9.jpg' alt='Slider9'/>
                </div>
            </Carousel>
        </section>
    );
}

export default Section4;