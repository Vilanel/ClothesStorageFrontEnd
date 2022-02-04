import React from 'react';
import './Contact.scss';
import Title from '../../common/Title/Title.js';
import RegistrationContainer from '../Registration/RegistrationContainer.js';
import SignInContainer from '../SignIn/SignInContainer.js';
import SignOutContainer from '../SignOut/SignOutContainer.js';

const Contact = (props) => {
    return (
      <div className='contact'>
        <div className='contact__info'>
          <Title title='CONTACT US'/>
          Pankivska street, 14А, Kyiv City<br/><br/>
          top_shop@gmail.com<br/><br/>
          123-456-7890
        </div>
        {(props.mode==='registration')?
        (props.isAuth)?<SignOutContainer/>:<RegistrationContainer/>:
        (props.isAuth)?<SignOutContainer/>:<SignInContainer/>}
      </div>
    );
}

export default Contact;
