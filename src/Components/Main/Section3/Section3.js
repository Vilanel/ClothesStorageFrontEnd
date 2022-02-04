import React from 'react';
import './Section3.scss';
import Title from '../../common/Title/Title.js';

const Section3 = () => {
    return (
        <section className='trird-section'>
            <Title title='ABOUT US'/>
            <div className='trird-section__description-box'>
                <div className='trird-section__description'>
                    Take a Look
                    <br/><br/>
                    Top Shop is your go-to source for styles influenced 
                    by the latest fashions with an added flair. 
                    We aim to inspire our customers to be the best 
                    version of themselves and to be confident in their 
                    own skin - and of course, their outfits.
                    <br/><br/>
                    Our vision is fast-paced, forward-thinking and 
                    fashion-centered at its core, and all of our products 
                    reflect these ideals. We invite you to browse our site 
                    to find just what you have been looking for. Look good, 
                    feel good, shop Top Shop today.
                </div>
            </div>
        </section>
    );
}

export default Section3;