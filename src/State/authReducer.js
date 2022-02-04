import {registration} from '../API/authAPI.js';
import {signIn} from '../API/authAPI.js';

const ADD_REGISTRATION_WARNING = 'ADD_REGISTRATION_WARNING';
const ADD_SIGN_IN_WARNING = 'ADD_SIGN_IN_WARNING';
const RESET_WARNINGS = 'RESET_WARNINGS';
const SIGN_IN = 'SIGN_IN';
const SIGN_OUT = 'SIGN_OUT';
const SET_TOKEN = 'SET_TOKEN';
const RESET_TOKEN = 'RESET_TOKEN';
const SET_DATA = 'SET_DATA';
const RESET_DATA = 'RESET_DATA';
const SET_IS_ADMIN = 'SET_IS_ADMIN';
const RESET_IS_ADMIN = 'RESET_IS_ADMIN';

let initialState = {
    isAuth:false,
    isAdmin:false,
    registrationWarning:{},
    signInWarning:{},
    token:null,
    userEmail:'',
    userPassword:'',
}

export const authReducer = (state=initialState, action) => {
    switch(action.type){
        case ADD_REGISTRATION_WARNING:{
            let stateCopy = {...state};
            stateCopy.registrationWarning = action.warning;
            return stateCopy;
        }
        case ADD_SIGN_IN_WARNING:{
            let stateCopy = {...state};
            stateCopy.signInWarning = action.warning;
            return stateCopy;
        }
        case RESET_WARNINGS:{
            let stateCopy = {...state};
            stateCopy.signInWarning = {};
            stateCopy.registrationWarning = {};
            return stateCopy;
        }
        case SIGN_IN:{
            let stateCopy = {...state};
            stateCopy.isAuth = true;
            return stateCopy;
        }
        case SIGN_OUT:{
            let stateCopy = {...state};
            stateCopy.isAuth = false;
            return stateCopy;
        }
        case SET_TOKEN:{
            let stateCopy = {...state};
            stateCopy.token = action.token;
            return stateCopy;
        }
        case RESET_TOKEN:{
            let stateCopy = {...state};
            stateCopy.token = '';
            return stateCopy;
        }
        case SET_DATA:{
            let stateCopy = {...state};
            stateCopy.userEmail = action.email;
            stateCopy.userPassword = action.password;
            return stateCopy;
        }
        case RESET_DATA:{
            let stateCopy = {...state};
            stateCopy.userEmail = '';
            stateCopy.userPassword = '';
            return stateCopy;
        }
        case SET_IS_ADMIN:{
            let stateCopy = {...state};
            for(let role of action.roles){
                if(role === 'ADMIN'){
                    stateCopy.isAdmin = true;
                }
            }
            return stateCopy;
        }
        case RESET_IS_ADMIN:{
            let stateCopy = {...state};
            stateCopy.isAdmin = false;
            return stateCopy;
        }
        default: {
            return state;
        }
    }
}

export const addRegistrationWarningActionCreator = (warning) => {
    return {type:ADD_REGISTRATION_WARNING,warning}
}
export const addSignInWarningActionCreator = (warning) => {
    return {type:ADD_SIGN_IN_WARNING,warning}
}
export const resetWarningsActionCreator = () => {
    return {type:RESET_WARNINGS}
}
export const signInActionCreator = () => {
    return {type:SIGN_IN}
}
export const signOutActionCreator = () => {
    return {type:SIGN_OUT}
}
export const setTokenActionCreator = (token) => {
    return {type:SET_TOKEN,token}
}
export const resetTokenActionCreator = () => {
    return {type:RESET_TOKEN}
}
export const setDataActionCreator = (email,password) => {
    return {type:SET_DATA,email,password}
}
export const resetDataActionCreator = () => {
    return {type:RESET_DATA}
}
export const setIsAdminActionCreator = (roles) => {
    return {type:SET_IS_ADMIN,roles}
}
export const resetIsAdminActionCreator = () => {
    return {type:RESET_IS_ADMIN}
}

export const registrationThunkCreator = (user) => {
    return (dispatch) => {
        registration(user).then((res)=>{
            dispatch(signInThunkCreator(user));
        }).catch((e)=>{
            dispatch(addRegistrationWarningActionCreator(e.response.data));
        });
    }
}
export const signInThunkCreator = (user) => {
    return (dispatch) => {
        signIn(user).then((res)=>{
            dispatch(signInActionCreator());
            dispatch(setDataActionCreator(user.email,user.password));
            dispatch(setTokenActionCreator(res.token));
            dispatch(setIsAdminActionCreator(res.userRoles));
            dispatch(resetWarningsActionCreator());
        }).catch((e)=>{
            dispatch(addSignInWarningActionCreator(e.response.data));
        });
    }
}
export const signOutThunkCreator = () => {
    return (dispatch) => {
        dispatch(signOutActionCreator());
        dispatch(resetDataActionCreator());
        dispatch(resetTokenActionCreator());
        dispatch(resetIsAdminActionCreator());
        dispatch(resetWarningsActionCreator());
    }
}
