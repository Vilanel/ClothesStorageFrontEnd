import React from 'react';
import Category from './Category.js';

const Categories = (props) => {
    let categories = props.categories.map((el)=>{
        return (
            <Category text={el.name}
                      constantName={el.constantName}
                      setProductsMap = {props.setProductsMap}
                      productsMap = {props.productsMap}
                      deleteProduct={props.deleteProduct}
                      products={props.products}/>
        )
    });
    return (
        <div className="admin-panel__get-categories">
            {categories}
        </div>
    );
}

export default Categories;