import React,{useState,useEffect} from 'react';
import Button from '../../../../common/Button/Button.js';
import './AdminPannelAddProduct.scss';
import {Redirect} from 'react-router-dom';

const AdminPannelAddProduct = (props) => {
  let [imageUrl,setImageUrl] = useState('');
  let [imageUrlInputValue,setImageUrlInputValue] = useState('');
  let [nameField,setNameField] = useState('');
  let [priceField,setPriceField] = useState(0);
  let [articuleField,setArticuleField] = useState('');
  let [descriptionField,setDescriptionField] = useState('');
  let [productInfoField,setProductInfoField] = useState('');
  let [colors,setColors] = useState([]);
  let [colorHexField,setColorHexField] = useState('#');
  let [colorNameField,setColorNameField] = useState('');
  let [addProductButtonClicked,setAddProductButtonClicked] = useState(false);

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
  const onColorHexFieldChange=(e)=>{
    let text = e.currentTarget.value;
    setColorHexField(text);
  }
  const onColorNameFieldChange=(e)=>{
    let text = e.currentTarget.value;
    setColorNameField(text);
  }

  const clearImageField = () => {
    setImageUrlInputValue('');
  }
  const editImage = () => {
    setImageUrl(imageUrlInputValue);
  }
  let addColor = () => {
    let newColorsArr = [...colors];
    newColorsArr.push([colorHexField,colorNameField]);
    setColors(newColorsArr);
    setColorHexField('#');
    setColorNameField('');
  }
  let deleteColor = (el) => {
    let newColorsArr = [...colors];
    let deletedIndex;
    for(let elI in newColorsArr){
        if(newColorsArr[elI][1]===el){
            deletedIndex = elI;
        }
    }
    newColorsArr.splice(deletedIndex, 1);
    setColors(newColorsArr);
  }
  let addProduct = () => {
    let product = {
        articule:articuleField,
        description:descriptionField,
        img:imageUrl,
        name:nameField,
        price:priceField,
        productInfo:productInfoField,
        colors:colors,
        type:props.constantName,
    }
    props.addProduct(product);
    setAddProductButtonClicked(true);
  }
  
  let background = {
    background: `url(${imageUrl}) 0 0/100% no-repeat`,
  }

  let colorButtons = colors.map((el)=>{
    let buttonColor = {backgroundColor:el[0]};
    return (<span>
        <button className='admin-color-button'
                style={buttonColor}
                onClick={()=>{}}>
        </button>
        {el[1]}
        <button className='admin-color-button-delete'
                onClick={()=>{deleteColor(el[1])}}>
                DELETE
        </button>
        <br/>
    </span>);
  })

  return (
    <div className='add-product'>
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
          <Button text='SAVE IMAGE' function={editImage} disabled={false}/>
          <Button text='CLEAR FIELD' function={clearImageField} disabled={false}/>
        </div>
      </div>
      <div className='admin-product-info__info-box'>
        <div className='admin-product-info__info-box-first-section'>
          NAME:<br/>
          <input type='text' value={nameField} onChange={onNameFieldChange}/><br/><br/>
          PRICE ($):<br/> 
          <input type='number' value={priceField} onChange={onPriceFieldChange}/><br/><br/>
          ARTICULE:<br/> 
          <input type='text' value={articuleField} onChange={onArticuleFieldChange}/><br/><br/>
          DESCRIPTION<br/>
          <textarea onChange={onDescriptionFieldChange}>{descriptionField}</textarea><br/><br/>
          PRODUCT INFO<br/>
          <textarea onChange={onProductInfoFieldChange}>{productInfoField}</textarea><br/><br/>
          <Button text='ADD PRODUCT' function={addProduct} disabled={false}/>
        </div>
        <div>
            {(colors.length>0)?<>{colorButtons}<br/></>:<></>}
            COLOR HEX:<br/>
            <input value={colorHexField} onChange={onColorHexFieldChange}/><br/><br/>
            COLOR NAME:<br/>
            <input value={colorNameField} onChange={onColorNameFieldChange}/><br/><br/>
            <Button text='ADD COLOR' function={addColor} disabled={false}/>
        </div>
      </div> 
      {addProductButtonClicked?<><Redirect to='/admin-panel'/></>:<></>}
    </div> 
  );
}

export default AdminPannelAddProduct;