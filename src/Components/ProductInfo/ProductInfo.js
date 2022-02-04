import React,{useState,useEffect} from 'react';
import ColorsBlock from './ColorsBlock/ColorsBlock.js';
import Button from '../common/Button/Button.js';
import './ProductInfo.scss';

const ProductInfo = (props) => {
  let background = {
    background: `url(${props.currentProduct.img}) 0 0/100% no-repeat`,
  }
  let chooseColor = {display: props.currentColor[1]==='' ? 'inline' : 'none'};
  let chooseCount = +props.currentCount===0 ? {display: 'inline'} : {display: 'none'};
  let lessCount = +props.currentCount>100 ? {display: 'inline'} : {display: 'none'};;
  let moreCount = +props.currentCount<0 ? {display: 'inline'} : {display: 'none'};;
  let productAdded = props.productAdded ? {display:'inline'} : {display:'none'};
  let spans = {fontWeight:props.isEverythingChosen?200:500};

  return (
    <div className='product-info'>
      <div style={background} className='product-info__img-box'></div>
      <div className='product-info__info-box'>
        <div>
          {props.currentProduct.name}<br/><br/>
          ARTICULE: {props.currentProduct.articule}<br/><br/>
          DESCRIPTION<br/><br/>
          {props.currentProduct.description}<br/><br/>
          PRODUCT INFO<br/><br/>
          {props.currentProduct.productInfo}
        </div>
        <div className='product-info__options'>
          <br/><br/>
          PRICE: {props.currentProduct.price} $<br/><br/>
          <ColorsBlock colors={props.currentProduct.colors} 
                       changeColor={props.changeColor}
                       currentColor={props.currentColor}/>
          <br/>
          COUNT:<br/>
          <input onChange={props.onCountChange}
                 ref={props.countInputRef}
                 value={props.currentCount}
                 className='product-info__cout-input'
                 type='number'>
          </input>
          <br/><br/>
          <Button text='ADD TO BASKET' function={props.addToBasket} disabled={false}/>
          <br/>
          <span style={spans}>
            <span style={chooseColor}>Choose color<br/></span>
            <span style={chooseCount}>Choose count<br/></span>
            <span style={lessCount}>Count should be less<br/></span>
            <span style={moreCount}>Count should be more<br/></span>
            <span style={productAdded}>Product was added</span>
          </span>
        </div>
      </div>
    </div> 
  );
}

export default ProductInfo;