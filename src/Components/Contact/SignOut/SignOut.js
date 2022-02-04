import React from 'react';
import '../common/Sign.scss';
import Input from '../common/Input/Input.js';
import Button from '../../common/Button/Button.js';

const EMAIL = 'email';
const PASSWORD = 'password';

const CORRECT_COLOR = 'rgb(66, 65, 65)';

const SignOut = (props) =>{
    const signOut = (e) => {
        e.preventDefault();
        props.signOut();
    }
    return(
        <div className='contact__sign'>
            <form>
              <Input labelText='Email' 
                     maxlength='254'
                     type="text"
                     name={EMAIL}
                     value={props.email}
                     borderColor={CORRECT_COLOR}
                     onChangeFunction={()=>{}}
                     onBlurFunction = {()=>{}}/>
              <Input labelText='Password' 
                     maxlength='30'
                     type='password'
                     name={PASSWORD}
                     value={props.password}
                     borderColor={CORRECT_COLOR}
                     onChangeFunction={()=>{}}
                     onBlurFunction = {()=>{}}/>
              <div className='contact__button-box'>
                <Button text='SIGN OUT' function={signOut}/>
              </div>
            </form>
        </div>
    );
}

export default SignOut;