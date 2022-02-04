import React,{useState,useEffect} from 'react';
import Button from '../../../../common/Button/Button.js';
import './AdminPannelProductInfo.scss';
import AdminColor from './AdminColor/AdminColor.js';

const AdminPannelProductInfo = (props) => {
  let [imageUrl,setImageUrl] = useState(props.currentProduct.img);
  let [imageUrlInputValue,setImageUrlInputValue] = useState(props.currentProduct.img);
  let [nameField,setNameField] = useState(props.currentProduct.name);
  let [priceField,setPriceField] = useState(props.currentProduct.price);
  let [articuleField,setArticuleField] = useState(props.currentProduct.articule);
  let [descriptionField,setDescriptionField] = useState(props.currentProduct.description);
  let [productInfoField,setProductInfoField] = useState(props.currentProduct.productInfo);

  const onImageUrlInputChange = (e) => {
    let text = e.currentTarget.value;
    setImageUrlInputValue(text);
  }
  const onNameFieldChange = (e) => {
    let text = e.currentTarget.value;
    setNameField(text);
  }
  const onPriceFieldChange = (e) => {
    let text = e.currentTarget.value;
    setPriceField(text);
  }
  const onArticuleFieldChange = (e) => {
    let text = e.currentTarget.value;
    setArticuleField(text);
  }
  const onDescriptionFieldChange = (e) => {
    let text = e.currentTarget.value;
    setDescriptionField(text);
  }
  const onProductInfoFieldChange = (e) => {
    let text = e.currentTarget.value;
    setProductInfoField(text);
  }

  const clearImageField = () => {
    setImageUrlInputValue('');
  }
  const editImage = () => {
    setImageUrl(imageUrlInputValue);
    props.updateProduct(props.currentProduct._id,{img:imageUrlInputValue});
  }
  const editName = () => {
    props.updateProduct(props.currentProduct._id,{name:nameField});
  }
  const editPrice = () => {
    props.updateProduct(props.currentProduct._id,{price:priceField});
  }
  const editArticule = () => {
    props.updateProduct(props.currentProduct._id,{articule:articuleField});
  }
  const editDescription = () => {
    props.updateProduct(props.currentProduct._id,{description:descriptionField});
  }
  const editProductInfo = () => {
    props.updateProduct(props.currentProduct._id,{productInfo:productInfoField});
  }
  
  let background = {
    background: `url(${imageUrl}) 0 0/100% no-repeat`,
  }

  return (
    <div className='admin-product-info'>
      <div>
        <div style={background} className='admin-product-info__img-box'></div>
        <br/>
        <div className='admin-product-info__editimg-button-box'>
          <label className='admin-product-info__editimg-button-box__label'>
            Write image URL:
          </label><br/><br/>
          <input className='admin-product-info__editimg-button-box__input' 
                 type='text' value={imageUrlInputValue}
                 onChange={onImageUrlInputChange}/><br/><br/>
          <Button text='EDIT IMAGE' function={editImage} disabled={false}/>
          <Button text='CLEAR FIELD' function={clearImageField} disabled={false}/>
        </div>
      </div>
      <div className='admin-product-info__info-box'>
        <div className='admin-product-info__info-box-first-section'>
          NAME:<br/>
          <input type='text' value={nameField} onChange={onNameFieldChange}/><br/><br/>
          <Button text='EDIT NAME' function={editName} disabled={false}/><br/><br/>
          PRICE ($):<br/> 
          <input type='number' value={priceField} onChange={onPriceFieldChange}/><br/><br/>
          <Button text='EDIT PRICE' function={editPrice} disabled={false}/><br/><br/>
          ARTICULE:<br/> 
          <input type='text' value={articuleField} onChange={onArticuleFieldChange}/><br/><br/>
          <Button text='EDIT ARTICULE' function={editArticule} disabled={false}/><br/><br/>
          DESCRIPTION<br/>
          <textarea onChange={onDescriptionFieldChange}>{descriptionField}</textarea><br/><br/>
          <Button text='EDIT DESCRIPTION' function={editDescription} disabled={false}/><br/><br/>
          PRODUCT INFO<br/>
          <textarea onChange={onProductInfoFieldChange}>{productInfoField}</textarea><br/><br/>
          <Button text='EDIT PRODUCT INFO' function={editProductInfo} disabled={false}/><br/><br/>
        </div>
        <div>
          <AdminColor colors = {props.currentProduct.colors} 
                      updateProduct={props.updateProduct}
                      id={props.currentProduct._id}/>
        </div>
      </div>
    </div> 
  );
}

export default AdminPannelProductInfo;