import {connect} from 'react-redux';
import Shop from './Shop';
import {getPriceFilteredProductsThunkCreator} from '../../State/productsReducer.js';

let mapStateToProps = (state) => {
    return {
        categories:state.products.categories,
        productsMap:state.products.productsMap,
        pricedProducts:state.products.pricedProducts,
        products:state.products.products,
    };
}
let mapDispatchToProps = (dispatch) => {
    return {
        getPricedArr: (min,max)=>{
            dispatch(getPriceFilteredProductsThunkCreator(min,max));
        }
    };
}

const ShopContainer = connect(mapStateToProps,mapDispatchToProps)(Shop);

export default ShopContainer;