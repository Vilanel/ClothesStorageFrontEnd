import React,{useState,useEffect} from 'react';
import './AdminPanel.scss';
import Title from '../common/Title/Title.js';
import Button from '../common/Button/Button.js';
import UsersTable from './UsersTable/UsersTable.js';
import Categories from './Categories/Categories.js';
import AddCategory from './AddCategoty/AddCategory.js';
import DeleteCategory from './DeleteCategory/DeleteCategory.js';

const AdminPanel = (props) => {
    let [isShowUsersButtonClicked,setShowUsersButtonClicked] = useState(false);
    let [isShowProductCategoriesButtonClicked,setShowProductCategoriesButtonClicked] = useState(false);
    let [isAddCategoryButtonClicked,setAddCategoryButtonClicked] = useState(false);
    let [isDeleteCategoryButtonClicked,setDeleteCategoryButtonClicked] = useState(false);
    let [users,setUsers] = useState(props.users);
    let [categories,setCategories] = useState(props.categories);
    
    useEffect(()=>{
        setUsers(props.users);
    },[props.users]);
    useEffect(()=>{
        setCategories(props.categories);
    },[props.categories]);

    const showUsers = () => {
        props.getUsers(props.token);
        setUsers(props.users);
        setShowUsersButtonClicked(true);
    }
    const hideUsers = () => {
        setShowUsersButtonClicked(false);
    }

    const showProductCategories = () => {
        props.setCategories();
        setCategories(props.categories);
        setShowProductCategoriesButtonClicked(true);
    }
    const hideProductCategories = () => {
        setShowProductCategoriesButtonClicked(false);
    }

    const showAddCategoryBlock = () => {
        props.setCategories();
        setCategories(props.categories);
        setAddCategoryButtonClicked(true);
    }
    const hideAddCategoryBlock = () => {
        setAddCategoryButtonClicked(false);
    }

    const showDeleteCategoryBlock = () => {
        props.setCategories();
        setCategories(props.categories);
        setDeleteCategoryButtonClicked(true);
    }
    const hideDeleteCategoryBlock = () => {
        setDeleteCategoryButtonClicked(false);
    }

    return (
      <div className='admin-panel'>
        <Title title='ADMIN PANEL'/>
        {props.email}<br/><br/>
        {!isShowUsersButtonClicked ? 
        <Button text='SHOW ALL USERS' function={showUsers} disabled={false}/> :
        <Button text='HIDE ALL USERS' function={hideUsers} disabled={false}/>}
        {(isShowUsersButtonClicked && users.length>0) ? 
        <UsersTable users={users} 
                    deleteUser={props.deleteUser} 
                    token={props.token}
                    email={props.email}/> : <></>}
        <br/>
        
        {!isShowProductCategoriesButtonClicked ? 
        <Button text='SHOW PRODUCT CATEGORIES' function={showProductCategories} disabled={false}/> :
        <Button text='HIDE PRODUCT CATEGORIES' function={hideProductCategories} disabled={false}/>}
        {(isShowProductCategoriesButtonClicked && categories.length>0) ? 
        <Categories categories = {props.categories}
                    productsMap = {props.productsMap}
                    setProductsMap={props.setProductsMap}
                    deleteProduct={props.deleteProduct}
                    products={props.products}/> : <></>}
        <br/>

        {!isAddCategoryButtonClicked ? 
        <Button text='ADD NEW CATEGORY' function={showAddCategoryBlock} disabled={false}/> :
        <Button text='ADD NEW CATEGORY' function={hideAddCategoryBlock} disabled={false}/>}
        {(isAddCategoryButtonClicked) ? 
        <AddCategory addCategory={props.addCategory} categoryInfo={props.categoryInfo}/> : <></>}
        <br/>

        {!isDeleteCategoryButtonClicked ? 
        <Button text='DELETE CATEGORY' function={showDeleteCategoryBlock} disabled={false}/> :
        <Button text='DELETE CATEGORY' function={hideDeleteCategoryBlock} disabled={false}/>}
        {(isDeleteCategoryButtonClicked) ? 
        <DeleteCategory categories={props.categories} deleteCategory={props.deleteCategory}/> : <></>}
        <br/>
      </div>
    );
}

export default AdminPanel;