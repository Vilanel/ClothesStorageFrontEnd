import React from 'react';
import Title2 from '../common/Title2/Title2.js';
import Product from '../Product/Product.js';
import './ProductsBlock.scss';

const ProductsBlock = (props) => {
    let products = props.productsArr.map((el)=>{
      return <Product _id={el._id} 
                      img={el.img} 
                      name={el.name} 
                      price={el.price}
                      key={el.id}/>
    })
    return (
      <div className='shop'>
          <Title2 title = {props.title}/>
          <div className='shop__products-box'>
            {products}
          </div>
      </div>
    );
}

export default ProductsBlock;