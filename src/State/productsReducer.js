import {products} from './products.js';
import {categories} from './products.js';
import {createMap} from './products.js';

import {getAllProductsFromServer,getCurrentProductsFromServer,getCategoriesFromServer,getPriceFilteredProducts} from '../API/productsAPI.js';
import {addCategory,deleteCategory,updateProduct,addProduct,deleteProduct} from '../API/adminAPI.js';

const SET_CATEGORIES = 'SET_CATEGORIES';
const SET_PRODUCTS = 'SET_PRODUCTS';
const SET_BEST_SELLERS = 'SET_BEST_SELLERS';
const SET_PRODUCTS_MAP = 'SET_PRODUCTS_MAP';
const SET_CATEGORY_INFO = 'SET_CATEGORY_INFO';
const SET_PRICED_PRODUCTS = 'SET_PRICED_PRODUCTS';

const BEST_SELLERS = 'bestSellers';

let initialState = {
    categories:[...categories],
    categoryInfo:'',
    products: [...products],
    bestSellers:[...products.slice(0, 4)],
    productsMap: createMap(categories,products),
    pricedProducts:[]
}

export const productsReducer = (state=initialState, action) => {
    switch(action.type){
        case SET_CATEGORIES:{
            let stateCopy = {...state};
            stateCopy.categories = action.categories;
            return stateCopy;
        }
        case SET_CATEGORY_INFO:{
            let stateCopy = {...state};
            stateCopy.categoryInfo = action.categoryInfo;
            return stateCopy;
        }
        case SET_PRODUCTS:{
            let stateCopy = {...state};
            stateCopy.products = action.products;
            return stateCopy;
        }
        case SET_PRODUCTS_MAP:{
            let stateCopy = {...state};
            stateCopy.productsMap.set(action.category,action.currentProducts);
            return stateCopy;
        }
        case SET_BEST_SELLERS:{
            let stateCopy = {...state};
            stateCopy.bestSellers = action.currentProducts;
            return stateCopy;
        }
        case SET_PRICED_PRODUCTS:{
            let stateCopy = {...state};
            stateCopy.pricedProducts = action.pricedProducts;
            return stateCopy;
        }
        default: {
            return state;
        }
    }
}
export const setCategoriesActionCreator = (categories) => {
    return {type: SET_CATEGORIES, categories}
}
export const setCategoryInfoActionCreator = (categoryInfo) => {
    return {type: SET_CATEGORY_INFO, categoryInfo}
}
export const setProductsActionCreator = (products) => {
    return {type: SET_PRODUCTS, products}
}
export const setBestSellersActionCreator = (currentProducts) => {
    return {type: SET_BEST_SELLERS, currentProducts}
}
export const setProductsMapActionCreator = (category,currentProducts) => {
    return {type: SET_PRODUCTS_MAP, category,currentProducts}
}
export const setPricedProductsActionCreator = (pricedProducts) => {
    return {type: SET_PRICED_PRODUCTS, pricedProducts}
}

export const getProductsThunkCreator = () => {
    return (dispatch) => {
        getAllProductsFromServer().then((res)=>{
            dispatch(setProductsActionCreator(res));
        });
        getCurrentProductsFromServer(BEST_SELLERS).then((res)=>{
            dispatch(setBestSellersActionCreator(res));
        }).catch((e)=>{
            console.log(e.response);
        });
        getCategoriesFromServer().then((res)=>{
            dispatch(setCategoriesActionCreator(res));
            for(let category of res){
                dispatch(setProductsMapThunkCreator(category.constantName)); 
            }
        });
    }
}
export const setCategoriesFromServerThunkCreator = () => {
    return (dispatch) => {
        getCategoriesFromServer().then((res)=>{
            dispatch(setCategoriesActionCreator(res));
        })
    }
}
export const setProductsMapThunkCreator = (category) => {
    return (dispatch) => {
        getCurrentProductsFromServer(category).then((res)=>{
            dispatch(setProductsMapActionCreator(category,res));
        });
    }
}
export const addCategoryThunkCreator = (categoryName) => {
    return (dispatch) => {
        addCategory(categoryName).then((res)=>{
            dispatch(setCategoryInfoActionCreator(res));
            dispatch(setCategoriesFromServerThunkCreator());
        }).catch((e)=>{
            dispatch(setCategoryInfoActionCreator('This category already exists'));
        });
    }
}
export const deleteCategoryThunkCreator = (categoryName) => {
    return (dispatch) => {
        deleteCategory(categoryName).then((res)=>{
            dispatch(setCategoriesFromServerThunkCreator());
        }).catch((e)=>{
            console.log(e);
        });
    }
}
export const updateProductThunkCreator = (productId,updatedProduct) => {
    return (dispatch) => {
        updateProduct(productId,updatedProduct).then((res)=>{
            dispatch(getProductsThunkCreator());
        }).catch((e)=>{
            console.log(e);
        });
    }
}
export const addProductThunkCreator = (product) => {
    return (dispatch) => {
        addProduct(product).then((res)=>{
            dispatch(getProductsThunkCreator());
        }).catch((e)=>{
            console.log(e);
        });
    }
}
export const deleteProductThunkCreator = (id) => {
    return (dispatch) => {
        deleteProduct(id).then((res)=>{
            dispatch(getProductsThunkCreator());
        }).catch((e)=>{
            console.log(e);
        });
    }
}
export const getPriceFilteredProductsThunkCreator = (min,max) =>{
    return (dispatch) => {
        getPriceFilteredProducts(min,max).then((res)=>{
            dispatch(setPricedProductsActionCreator(res));
        });
    }  
}