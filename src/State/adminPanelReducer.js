import {getUsers} from '../API/adminAPI.js';
import {deleteUser} from '../API/adminAPI.js';

const SET_USERS = 'SET_USERS';

let initialState = {
    users:[],
}

export const adminPanelReducer = (state=initialState, action) => {
    switch(action.type){
        case SET_USERS:{
            let stateCopy = {...state};
            stateCopy.users = action.users;
            return stateCopy;
        }
        default: {
            return state;
        }
    }
}

export const setUsersActionCreator = (users) => {
    return {type:SET_USERS,users}
}

export const getUsersThunkCreator = (token) => {
    return (dispatch) => {
        getUsers(token).then((res)=>{
            dispatch(setUsersActionCreator(res));
        }).catch((e)=>{
            console.log(e);
        });
    }
}
export const deleteUserThunkCreator = (token,email) => {
    return (dispatch) => {
        deleteUser(token,email).then((res)=>{
            console.log(res);
            dispatch(getUsersThunkCreator(token));
        }).catch((e)=>{
            console.log(e);
        });
    }
}