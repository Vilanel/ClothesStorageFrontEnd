import React from 'react';
import Routers from './Routers.js';
import {getProductsThunkCreator,updateProductThunkCreator,addProductThunkCreator} from '../../State/productsReducer.js';
import {connect} from 'react-redux';

let mapStateToProps = (state) => {
    return {
        categories: state.products.categories,
        products: state.products.products,
        bestSellers:state.products.bestSellers,
        isAuth: state.auth.isAuth,
        isAdmin: state.auth.isAdmin,
    };
}
const RoutersContainer = connect(mapStateToProps,
    {getProducts:getProductsThunkCreator,
     updateProduct:updateProductThunkCreator,
     addProduct: addProductThunkCreator})(Routers);

export default RoutersContainer;