import React,{useState,useEffect} from 'react';
import Title from '../common/Title/Title.js';
import Filter from './Filter/Filter.js';
import './Shop.scss';

const Shop = (props) => {
  return (
    <div className='shopBlock'>
        <Title title='SHOP'/>
        <Filter categories={props.categories} 
                productsMap={props.productsMap} 
                pricedProducts={props.pricedProducts}
                getPricedArr={props.getPricedArr}
                products={props.products}/>
    </div>
  );
}

export default Shop;