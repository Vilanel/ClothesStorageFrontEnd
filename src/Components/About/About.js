import React from 'react';
import './About.scss';
import Title from '../common/Title/Title.js';

const About = () => {
    let background = {
      background: "url('Pictures/About/1.jpg') 50%/cover no-repeat",
      height:"500px"
    }
    return (
      <div className='trird-section'>
        <Title title='ABOUT US'/>
        <div className='trird-section__description-box'>
            <div className='trird-section__description'>
                A Life of Fashion
                <br/><br/>
                Top Shop has been bringing exceptional style 
                to shoppers far and wide since our founding, 
                and we don’t intend on stopping anytime soon. 
                Our vision is fast-paced, forward-thinking and 
                fashion-centered at its core, and all of our products 
                reflect these ideals. We invite you to browse through 
                our site to find just what you have been looking for.<br/><br/>

                Pankivska street, 14А, Kyiv City<br/><br/>
                top_shop@gmail.com<br/><br/>
                123-456-7890
            </div>
        </div>
        <div style={background}></div>
      </div>
    );
}

export default About;