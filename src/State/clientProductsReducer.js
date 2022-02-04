import {getBasket,addBasket,deleteBasket} from '../API/basketAPI.js';

const CHANGE_CURRENT_COLOR = 'CHANGE_CURRENT_COLOR';
const CHANGE_CURRENT_COUNT = 'CHANGE_CURRENT_COUNT';
const COLOR_COUNT_RESET = 'COLOR_COUNT_RESET';
const PRODUCT_WAS_ADDED = 'PRODUCT_WAS_ADDED';
const IS_EVERYTHING_CHOSEN = 'IS_EVERYTHING_CHOSEN';
const SET_BASKET = 'SET_BASKET';

let initialState = {
    clientProductsArr: [],
    currentColor:['',''],
    currentCount:0,
    productAdded:false,
    isEverythingChosen:true,
    basket:[],
}

export const clientProductsReducer = (state=initialState, action) => {
    switch(action.type){
        case CHANGE_CURRENT_COLOR: {
            let stateCopy = {...state};       
            stateCopy.currentColor = [action.colorCode,action.colorName];
            return stateCopy;
        }
        case CHANGE_CURRENT_COUNT: {
            let stateCopy = {...state};       
            stateCopy.currentCount = action.count;
            return stateCopy;
        }
        case COLOR_COUNT_RESET: {
            let stateCopy = {...state};
            stateCopy.currentColor = ['',''];
            stateCopy.currentCount = 0;
            return stateCopy;
        }
        case PRODUCT_WAS_ADDED:{
            let stateCopy = {...state};
            stateCopy.productAdded = !stateCopy.productAdded;
            return stateCopy;
        }
        case IS_EVERYTHING_CHOSEN:{
            let stateCopy = {...state};
            stateCopy.isEverythingChosen = action.isCor;
            return stateCopy;
        }
        case SET_BASKET:{
            let stateCopy = {...state};
            stateCopy.basket = action.basket;
            return stateCopy;
        }
        default: {
            return state;
        }
    }
}

export const changeColorActionCreator = (colorCode,colorName) => {
    return {type: CHANGE_CURRENT_COLOR, colorCode, colorName}
}
export const changeCountActionCreator = (count) => {
    return {type: CHANGE_CURRENT_COUNT, count:count}
}
export const colorAndCountResetActionCreator = () => {
    return {type: COLOR_COUNT_RESET}
}
export const productWasAddedActionCreator = () => {
    return {type: PRODUCT_WAS_ADDED}
}
export const isEverythingChosenActionCreator = (isCor) => {
    return {type: IS_EVERYTHING_CHOSEN,isCor}
}
export const setBasketActionCreator = (basket) => {
    return {type: SET_BASKET,basket}
}

export const getBasketThunkCreator = (token) => {
    return (dispatch) => {
        getBasket(token).then((res)=>{
            console.log(res);
            dispatch(setBasketActionCreator(res));
        }).catch((e)=>{
            console.log(e.response.data);
        });
    }
}
export const addBasketThunkCreator = (token,basket) => {
    return (dispatch) => {
        addBasket(token,basket).then((res)=>{
            console.log(res);
            dispatch(setBasketActionCreator(res));
        }).catch((e)=>{
            console.log(e.response.data);
        });
    }
}
export const deleteBasketThunkCreator = (token,basket) => {
    return (dispatch) => {
        deleteBasket(token,basket).then((res)=>{
            console.log(res);
            dispatch(setBasketActionCreator(res));
        }).catch((e)=>{
            console.log(e.response.data);
        });
    }
}