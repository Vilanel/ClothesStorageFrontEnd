import React,{useState,useEffect} from 'react';
import MainContainer from '../Main/MainContainer.js';
import About from '../About/About.js';
import Contact from '../Contact/Contact/Contact.js';
import ShopContainer from '../Shop/ShopContainer.js';
import Gallery from '../Gallery/Gallery.js';
import ProductInfoContainer from '../ProductInfo/ProductInfoContainer.js';
import ProfileContainer from '../Profile/ProfileContainer.js';
import AdminPanelContainer from '../AdminPanel/AdminPanelContainer.js';
import AdminPannelProductInfo from '../AdminPanel/Categories/AdminPanelProductsBlock/AdminPannelProductInfo/AdminPannelProductInfo.js';
import AdminPannelAddProduct from '../AdminPanel/Categories/AdminPanelProductsBlock/AdminPannelAddProduct/AdminPannelAddProduct.js';
import {Route,Switch,Redirect} from 'react-router-dom';

let Routers = (props) =>{
    useEffect(() => {
        if(props.products.length===0)
            props.getProducts();
    }, []);

    let [isAuth,setIsAuth] = useState(props.isAuth);
    useEffect(()=>{
        setIsAuth(props.isAuth);
    },[props.isAuth]);

    let [isAdmin,setIsAdmin] = useState(props.isAdmin);
    useEffect(()=>{
        setIsAdmin(props.isAdmin);
    },[props.isAdmin]);

    let productsInfo = props.products.map((el)=>{
        return <Route path = {`/product-${el._id}`} 
                      render = {()=>{return <ProductInfoContainer currentProduct={el}
                                                                  key={el._id} />}}
    />});
    if(isAdmin && isAuth){
        let adminProductsInfo = props.products.map((el)=>{
            return <Route path = {`/admin-product-${el._id}`} 
                          render = {()=>{return <AdminPannelProductInfo currentProduct={el}
                                                                        key={el._id} 
                                                                        updateProduct={props.updateProduct}/>}}
        />});
        let addProductInfo = props.categories.map((el)=>{
            return <Route path = {`/admin-panel-add-product-to-${el.constantName}`}  
                          render = {()=><AdminPannelAddProduct 
                            addProduct={props.addProduct}
                            constantName={el.constantName}/>}/>});
        return (
            <Switch>
                <Route exact path = '/' render={()=><MainContainer/>}/>
                <Route path = '/admin-panel' render={()=><AdminPanelContainer/>}/>
                <Route path = '/about' render={()=><About/>}/>
                <Route path = '/shop' render={()=><ShopContainer/>}/>
                <Route path = '/gallery' render={()=><Gallery/>}/>
                <Route path = '/signOut'  render = {()=><Contact mode='signIn' isAuth={isAuth}/>}/>
                {addProductInfo}
                {productsInfo}
                {adminProductsInfo}
                <Redirect to='/'/>
            </Switch>
        )
    }
    else if(isAuth){
        return (
            <Switch>
                <Route exact path = '/' render={()=><MainContainer/>}/>
                <Route path = '/basket' render = {()=><ProfileContainer/>}/>
                <Route path = '/about' render={()=><About/>}/>
                <Route path = '/shop' render={()=><ShopContainer/>}/>
                <Route path = '/gallery' render={()=><Gallery/>}/>
                <Route path = '/signOut'  render = {()=><Contact mode='signIn' isAuth={isAuth}/>}/>
                {productsInfo}
                <Redirect to='/'/>
            </Switch>
        )
    }
    return(
        <Switch>
            <Route exact path = '/' render={()=><MainContainer/>}/>
            <Route path = '/shop' render={()=><ShopContainer/>}/>
            <Route path = '/about' render={()=><About/>}/>
            <Route path = '/gallery' render={()=><Gallery/>}/>
            <Route path = '/signIn' render = {()=><Contact mode='signIn' isAuth={isAuth}/>}/>
            <Route path = '/registration' render = {()=><Contact mode='registration' isAuth={isAuth}/>}/>
            {productsInfo}
            <Redirect to='/'/>
        </Switch>
    )
}

export default Routers;