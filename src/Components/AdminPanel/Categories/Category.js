import React,{useState,useEffect} from 'react';
import Button3 from '../../common/Button3/Button3.js';
import AdminPannelProductsBlock from './AdminPanelProductsBlock/AdminPannelProductsBlock.js';
import { NavLink } from 'react-router-dom';

const Category = (props) => {
    let [isCategoryButtonClicked,setCategoryButtonClicked] = useState(false);
    let [products,setProducts] = useState([]);

    useEffect(()=>{
        props.setProductsMap(props.constantName);
        setProducts(props.productsMap.get(props.constantName));
    },[]);

    const showProducts = () => {
        setCategoryButtonClicked(true);
    }
    const hideProducts = () => {
        setCategoryButtonClicked(false);
    }

    return (
        <div className="admin-panel__get-categories-button">
            {!isCategoryButtonClicked ? 
            <Button3 text={props.text.toUpperCase()} function={showProducts} disabled={false}/> :
            <Button3 text={props.text.toUpperCase()} function={hideProducts} disabled={false}/>}
            {(isCategoryButtonClicked && products && products.length>0) ? 
            <AdminPannelProductsBlock title='' productsArr={products} deleteProduct={props.deleteProduct} /> : <></>}
            {(isCategoryButtonClicked) ? 
            <NavLink to={`/admin-panel-add-product-to-${props.constantName}`} className='admin-panel__add-product-link'>ADD PRODUCT</NavLink> : <></>}
        </div>
    );
}

export default Category;