import React from 'react';
import './BasketProduct.scss';
import Button from '../../common/Button/Button.js';
import {NavLink} from 'react-router-dom';

const BasketProduct = (props) => {
    let buttonColor = {
        backgroundColor:props.el.color[0],
        width:'40px'
    };
    return (
        <div className='basketProduct'>
            <NavLink to= {`/product-${props.el.id}`}>
                <img src={props.el.img} alt={`/product-${props.el.id}`}/>
            </NavLink>
            <div className='basketProduct__text'>
                <b>Name:</b> {props.el.name}
                <br/>
                <b>Price:</b> {props.el.price} $
                <br/>
                <b>Count:</b> {props.el.count}
                <br/>
                <b>Color:</b> <button className='basketProduct__color'
                                      style={buttonColor}
                                      disabled={true}></button>
            </div>
            <div className='basketProduct__button'>
                <Button text='DELETE PRODUCT'
                        function={()=>{
                            let token = props.token;
                            let el = props.el;
                            props.deleteBasket(token,el)
                        }} 
                        disabled={false}/>
                <Button text='BUY PRODUCT'
                        function={()=>{}} 
                        disabled={false}/>
            </div>
        </div>
      );
}

export default BasketProduct;