import React,{useState,useEffect} from 'react';
import Title2 from '../../../common/Title2/Title2.js';
import AdminPannelProduct from './AdminPannelProduct/AdminPannelProduct.js';
import './AdminPannelProductsBlock.scss';

const AdminPannelProductsBlock = (props) => {
  let [productsArr,setProductsArr] = useState(props.productsArr);

  const deleteProduct = (id) => {
    let newProductsArr = [...productsArr];
    let index;
    for(let elI in newProductsArr){
      if(newProductsArr[elI]._id==id)
        index = elI;
    }
    newProductsArr.splice(index,1);
    setProductsArr(newProductsArr);
    props.deleteProduct(id);
  }

  let products = productsArr.map((el)=>{
    return <AdminPannelProduct _id={el._id} 
                               img={el.img} 
                               name={el.name} 
                               price={el.price}
                               key={el.id}
                               deleteProduct={deleteProduct}/>
  })
  return (
    <div className='admin-panel-products-block'>
        <Title2 title = {props.title}/>
        <div className='admin-panel-products-block__box'>
          {products}
        </div>
    </div>
  );
}

export default AdminPannelProductsBlock;