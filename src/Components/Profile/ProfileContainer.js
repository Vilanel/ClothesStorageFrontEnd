import Profile from './Profile.js';
import {connect} from 'react-redux';
import {getBasketThunkCreator,deleteBasketThunkCreator} from '../../State/clientProductsReducer.js';

let mapStateToProps = (state) => {
    return {
        email: state.auth.userEmail,
        token: state.auth.token,
        basket: state.clientProducts.basket,
    };
}
let mapDispatchToProps = (dispatch) => {
    return {
        getBasket: (token)=>{
            dispatch(getBasketThunkCreator(token));
        },
        deleteBasket:(token,basket)=>{
            dispatch(deleteBasketThunkCreator(token,basket));
        }
    };
}
const PrifileContainer = connect(mapStateToProps,mapDispatchToProps)(Profile);

export default PrifileContainer;