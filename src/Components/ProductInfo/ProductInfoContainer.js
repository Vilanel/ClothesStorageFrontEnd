import ProductInfoClassComponent from './ProductInfoClassComponent.js';
import {changeColorActionCreator, 
        changeCountActionCreator,
        colorAndCountResetActionCreator,
        productWasAddedActionCreator,
        isEverythingChosenActionCreator,
        addBasketThunkCreator} from '../../State/clientProductsReducer.js';
import {connect} from 'react-redux';

let mapStateToProps = (state) => {
    return {
        isAuth:state.auth.isAuth,
        currentColor: state.clientProducts.currentColor,
        currentCount: state.clientProducts.currentCount,
        productAdded: state.clientProducts.productAdded,
        isEverythingChosen: state.clientProducts.isEverythingChosen,
        token: state.auth.token,
    };
}
let mapDispatchToProps = (dispatch) => {
    return {
        changeColor: (colorCode,colorName)=>{
            dispatch(changeColorActionCreator(colorCode,colorName));
        },
        changeCount: (count)=>{
            dispatch(changeCountActionCreator(count));
        },
        colorAndCountReset: ()=>{
            dispatch(colorAndCountResetActionCreator());
        },
        productWasAdded:()=>{
            dispatch(productWasAddedActionCreator());
        },
        isEverythingChosenF:(isCor)=>{
            dispatch(isEverythingChosenActionCreator(isCor));
        },
        addBasket:(token,product)=>{
            dispatch(addBasketThunkCreator(token,product));
        }
    };
}
const ProductInfoContainer = connect(mapStateToProps,mapDispatchToProps)(ProductInfoClassComponent);

export default ProductInfoContainer;