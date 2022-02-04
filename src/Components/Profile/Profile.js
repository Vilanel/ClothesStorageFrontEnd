import React,{useState,useEffect} from 'react';
import Title from '../common/Title/Title.js';
import ProfileSection from './ProfileSection/ProfileSection.js';
import BasketProduct from './BasketProduct/BasketProduct.js';
import './Profile.scss';

const Profile = (props) => {
    useEffect(()=>{
      props.getBasket(props.token);
    },[]);

    let basket = props.basket.map((el)=>{
      return <BasketProduct el = {el}
                            deleteBasket={props.deleteBasket}
                            token = {props.token}/>
    })

    return (
      <div className='profile'>
        {props.email}
        <div className='profile__titleBlock'>
          <div className='profile__title'>
            <Title title='BASKET'/>  
          </div>
          <div className='profile__iconBlock'>
            <img className='profile__icon' src='Pictures/Other/basket.png'/>
          </div>
        </div>
        <div className='profile__basketProducts'>
          {basket}
        </div>
        <div className='profile__basketBlock'>
            <div className='profile__firstSection'>
                <ProfileSection name='Basket'
                                buttonText='ADD TO BASKET'
                                isBasketEmpty={(props.basket.length===0) ? true : false}/>
            </div>
        </div>
      </div>
    );
}

export default Profile;