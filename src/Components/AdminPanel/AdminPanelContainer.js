import AdminPanel from './AdminPanel.js';
import {connect} from 'react-redux';
import {getUsersThunkCreator,deleteUserThunkCreator} from '../../State/adminPanelReducer.js';
import {setProductsMapThunkCreator,setCategoriesFromServerThunkCreator,addCategoryThunkCreator,
        deleteCategoryThunkCreator,deleteProductThunkCreator} from '../../State/productsReducer.js';

let mapStateToProps = (state) => {
    return {
        email: state.auth.userEmail,
        token: state.auth.token,
        users: state.adminPanel.users,
        categories: state.products.categories,
        productsMap: state.products.productsMap,
        categoryInfo: state.products.categoryInfo,
        products:state.products.products,
    };
}
let mapDispatchToProps = (dispatch) => {
    return {
        getUsers: (token) => {
            dispatch(getUsersThunkCreator(token));
        },
        deleteUser: (token,email) => {
            dispatch(deleteUserThunkCreator(token,email));
        },
        setCategories:()=>{
            dispatch(setCategoriesFromServerThunkCreator());
        },
        setProductsMap:(category) => {
            dispatch(setProductsMapThunkCreator(category));
        },
        addCategory:(categoryName) => {
            dispatch(addCategoryThunkCreator(categoryName));
        },
        deleteCategory:(categoryName)=>{
            dispatch(deleteCategoryThunkCreator(categoryName));
        },
        deleteProduct:(id)=>{
            dispatch(deleteProductThunkCreator(id));
        }
    };
}
const AdminPanelContainer = connect(mapStateToProps,mapDispatchToProps)(AdminPanel);

export default AdminPanelContainer;