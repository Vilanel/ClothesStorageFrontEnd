import React from 'react';
import './AdminPannelProduct.scss';
import {NavLink} from 'react-router-dom';
import Button from '../../../../common/Button/Button.js';

const AdminPannelProduct = (props) => {
    return (
      <div className='product'>
        <NavLink to= {`/admin-product-${props._id}`}>
          <img src={props.img} alt={`/product-${props._id}`}/>
        </NavLink>
        <br/>
        {props.name}
        <br/>
        {props.price} $ <br/>
        <Button text='DELETE' function={()=>{props.deleteProduct(props._id)}} disabled={false}/>
      </div>
    );
}

export default AdminPannelProduct;