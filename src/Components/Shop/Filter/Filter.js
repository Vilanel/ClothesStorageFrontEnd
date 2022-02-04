import React,{useState,useEffect} from 'react';
import ProductsBlock from '../../ProductsBlock/ProductsBlock.js';
import './Filter.scss';

const Filter = (props) => {
  let [categoryOption,setCategoryOption] = useState('---');
  let [priceOption,setPriceOption] = useState('---');
  let [categoryConstantName,setCategoryConstantName] = useState('');
  let [categories,setCategories] = useState(props.categories);

  let [categoryProducts,setCategoryProducts] = useState(props.products);
  let [pricedProducts,setPricedProducts] = useState(props.products);
  let [allShowenProducts,setAllShowenProducts] = useState([]);

  useEffect(()=>{
    setPricedProducts(props.pricedProducts);
  },[props.pricedProducts]);

  useEffect(()=>{
    formShowenProducts();
  },[categoryProducts]);

  useEffect(()=>{
    formShowenProducts();
  },[pricedProducts]);

  let formShowenProducts = () => {
    let pricedProductsArr = pricedProducts;
    if(priceOption==='---'){
      setPricedProducts(props.products);
      pricedProductsArr = props.products;
    }
    console.log(categoryProducts)
    console.log(pricedProducts)
    let arr = [];
    for(let el1 of categoryProducts){
      for(let el2 of pricedProductsArr){
        if(el1._id === el2._id)
          arr.push(el1);
      }
    }
    setAllShowenProducts(arr);
  }
  let onCategoryOptionChange = (e) => {
    setCategoryOption(e.target.value);
    if(e.target.value==='---')
      setCategoryProducts(props.products);
    for(let el of categories){
      if(el.name===e.target.value){
        setCategoryConstantName(el.constantName);
        setCategoryProducts(props.productsMap.get(el.constantName));
      }
    }
  }
  let onPriceOptionChange = (e) => {
    setPriceOption(e.target.value);
    if(e.target.value==='0-10 $')
      props.getPricedArr(0,10);
    else if(e.target.value==='10-100 $')
      props.getPricedArr(10,100);
    else if(e.target.value==='100+ $')
      props.getPricedArr(100,100000);
  }

  let allProducts = props.categories.map((el)=>{
    return (
      <ProductsBlock title={el.name} productsArr={props.productsMap.get(el.constantName)}/>
    )
  });

  let categoriesList = props.categories.map((el)=>{
    return (
      <option>{el.name}</option>
    )
  });

  return (
    <div>
      <div className='filter'>
        <p>Choose categoty:</p>
        <select value={categoryOption} onChange={onCategoryOptionChange}>
          <option>---</option>
          {categoriesList}
        </select>
        <br/><br/>
        <p>Price filter:</p>
        <select value={priceOption} onChange={onPriceOptionChange}>
          <option>---</option>
          <option>0-10 $</option>
          <option>10-100 $</option>
          <option>100+ $</option>
        </select>
      </div>
      {(categoryOption==='---'&&priceOption==='---')?allProducts:
      <ProductsBlock title={''} productsArr={allShowenProducts}/>}  
    </div> 
  );
}

export default Filter;