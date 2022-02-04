import {applyMiddleware, combineReducers, createStore} from 'redux';
import {productsReducer} from './productsReducer.js';
import {clientProductsReducer} from './clientProductsReducer.js';
import {authReducer} from './authReducer.js';
import {adminPanelReducer} from './adminPanelReducer.js';
import thunkMiddleware from 'redux-thunk';

let reducers = combineReducers({
    products: productsReducer,
    clientProducts: clientProductsReducer,
    auth:authReducer,
    adminPanel: adminPanelReducer,
});

let store = createStore(reducers,applyMiddleware(thunkMiddleware));
export default store;

window.store = store;