import React from 'react';
import './Product.scss';
import {NavLink} from 'react-router-dom';

const Product = (props) => {
    return (
      <div className='product'>
        <NavLink to= {`/product-${props._id}`}>
          <img src={props.img} alt={`/product-${props._id}`}/>
        </NavLink>
        <br/>
        {props.name}
        <br/>
        {props.price} $
      </div>
    );
}

export default Product;