import React,{useState,useEffect} from 'react';
import './ProfileSection.scss';
import Button from '../../common/Button/Button.js';
import {Redirect} from 'react-router-dom';

const ProfileSection = (props) => {
  let [isButtonClicked,setIsButtonClicked] = useState(false);
  const addProduct = () => {
    setIsButtonClicked(true);
  }
  return (
    <div className='profileSection'>
      <br/>
      {props.isBasketEmpty ? <>Basket is empty.<br/></> : <></>}
      Do you want to add product?<br/>
      <div className='profileSection__button'>
        <Button text={props.buttonText}
                function={addProduct} 
                disabled={false}/>
      </div>
      {isButtonClicked ? <Redirect to='/shop'/> : <></>}
    </div>
  );
}

export default ProfileSection;