import React from 'react';
import Section1 from './Section1/Section1.js';
import Section3 from './Section3/Section3.js';
import Section4 from './Section4/Section4.js';
import ProductsBlock from '../ProductsBlock/ProductsBlock.js'
import "react-responsive-carousel/lib/styles/carousel.min.css";

const Main = (props) => {
    let style = {backgroundColor: '#d5d7d2'}
    return (
    <div style={style}>
        <Section1/>
        <ProductsBlock title='Best Seller' productsArr={props.bestSellers.slice(0,4)}/>
        <Section3/>
        <Section4/>
    </div> 
    );
}

export default Main;