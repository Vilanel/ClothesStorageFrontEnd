import React,{useState,useEffect} from 'react';
import '../common/Sign.scss';
import Input from '../common/Input/Input.js';
import WarningBlock from '../common/WarningBlock/WarningBlock.js';
import Button from '../../common/Button/Button.js';

const EMAIL = 'email';
const PASSWORD = 'password';

const EMAIL_WARNING = 'Invalid email';
const PASSWORD_WARNING = 'Invalid password';

const CORRECT_COLOR = 'rgb(66, 65, 65)';
const ERROR_COLOR = 'rgb(214, 6, 6)';

const emailRegex = /^((([0-9A-Za-z]{1}[-0-9A-z\.]{0,30}[0-9A-Za-z]?)|([0-9А-Яа-я]{1}[-0-9А-я\.]{0,30}[0-9А-Яа-я]?))@([-A-Za-z]{1,}\.){1,}[-A-Za-z]{2,})$/

const SignIn = (props) =>{
    let [email,setEmail] = useState('');
    let [password,setPassword] = useState('');

    let [emailDirty,setEmailDirty] = useState(false);
    let [passwordDirty,setPasswordDirty] = useState(false);

    let [emailWarning,setEmailWarning] = useState('');
    let [passwordWarning,setPasswordWarning] = useState('');

    let [formValid,setFormValid] = useState(false);
    let [warning,setWarning] = useState(props.warning);

    useEffect(()=>{
        setWarning(props.warning);
    },[props.warning]);

    let onBlur = (e) => {
        switch(e.target.name){
            case EMAIL:
                setEmailDirty(true);
                break;
            case PASSWORD:
                setPasswordDirty(true);
                break;
            default:
                break;
        }
    }
    const onEmailChange = (e) => {
        setWarning({});
        let text = e.currentTarget.value;
        if(emailRegex.test(String(text).toLocaleLowerCase())){
            setEmailWarning('');
        }
        else{
            setEmailWarning(EMAIL_WARNING);
        }
        setEmail(text);
    }
    const onPasswordChange = (e) => {
        setWarning({});
        let text = e.currentTarget.value;
        if(text.length>=4){
            setPasswordWarning('');
        }
        else{
            setPasswordWarning(PASSWORD_WARNING);
        }
        setPassword(text);
    }
    const checkAllFields = () => {
        if(!emailRegex.test(String(email).toLocaleLowerCase()) ||
           password.length < 4){ return; }
        return true;
    }
    useEffect(()=>{
        if(emailWarning || passwordWarning)
            setFormValid(false);
        else if(emailDirty && passwordDirty)
            setFormValid(true);
        else if(checkAllFields())
            setFormValid(true);
        else setFormValid(false);
    },[email,password]);
    const signIn = (e) => {
        e.preventDefault();
        if(formValid){
            let user = {email,password};
            props.signIn(user);
        }
    }
    return(
        <div className='contact__sign'>
            <form>
              <Input labelText='Email' 
                     maxlength='254'
                     type="text"
                     name={EMAIL}
                     value={email}
                     borderColor={emailWarning?ERROR_COLOR:CORRECT_COLOR}
                     onChangeFunction={onEmailChange}
                     onBlurFunction = {onBlur}/>
              {emailDirty && emailWarning && <WarningBlock text={emailWarning}/>}
              <Input labelText='Password' 
                     maxlength='30'
                     type='password'
                     name={PASSWORD}
                     value={password}
                     borderColor={passwordWarning?ERROR_COLOR:CORRECT_COLOR}
                     onChangeFunction={onPasswordChange}
                     onBlurFunction = {onBlur}/>
              {passwordDirty && passwordWarning && <WarningBlock text={passwordWarning}/>}
              {warning.message && <WarningBlock text={warning.message}/>}
              <div className='contact__button-box'>
                <Button text='SIGN IN' function={signIn} disabled={!formValid}/>
              </div>
            </form>
        </div>
    );
}

export default SignIn;