import React,{useState,useEffect} from 'react';
import './Registration.scss';
import Input from '../common/Input/Input.js';
import WarningBlock from '../common/WarningBlock/WarningBlock.js';
import Button from '../../common/Button/Button.js';

const USER_NAME = 'userName';
const EMAIL = 'email';
const MOBILE_NUMBER = 'mobileNumber';
const PASSWORD = 'password';
const REPEAT_PASSWORD = 'repeatPassword';

const USER_NAME_WARNING = 'Your userName must contain at least 2 characters';
const EMAIL_WARNING = 'Invalid email';
const MOBILE_NUMBER_WARNING = 'Invalid mobile number';
const PASSWORD_WARNING = 'Your password must contain at least 4 characters';
const REPEAT_PASSWORD_WARNING = 'Pleace repeat password';

const CORRECT_COLOR = 'rgb(66, 65, 65)';
const ERROR_COLOR = 'rgb(214, 6, 6)';

const emailRegex = /^((([0-9A-Za-z]{1}[-0-9A-z\.]{0,30}[0-9A-Za-z]?)|([0-9А-Яа-я]{1}[-0-9А-я\.]{0,30}[0-9А-Яа-я]?))@([-A-Za-z]{1,}\.){1,}[-A-Za-z]{2,})$/
const mobileRegex = /^(\s*)?(\+)?([- _():=+]?\d[- _():=+]?){10,14}(\s*)?$/

const Registration = (props) =>{
    let [userName,setUserName] = useState('');
    let [email,setEmail] = useState('');
    let [mobileNumber,setMobileNumber] = useState('');
    let [password,setPassword] = useState('');
    let [repeatPassword,setRepeatPassword] = useState('');

    let [userNameDirty,setUserNameDirty] = useState(false);
    let [emailDirty,setEmailDirty] = useState(false);
    let [mobileNumberDirty,setMobileNumberDirty] = useState(false);
    let [passwordDirty,setPasswordDirty] = useState(false);
    let [repeatPasswordDirty,setRepeatPasswordDirty] = useState(false);

    let [userNameWarning,setUserNameWarning] = useState('');
    let [emailWarning,setEmailWarning] = useState('');
    let [mobileNumberWarning,setMobileNumberWarning] = useState('');
    let [passwordWarning,setPasswordWarning] = useState('');
    let [repeatPasswordWarning,setRepeatPasswordWarning] = useState('');

    let [formValid,setFormValid] = useState(false);
    let [warning,setWarning] = useState(props.warning);
    useEffect(()=>{
        setWarning(props.warning);
    },[props.warning]);

    let onBlur = (e) => {
        switch(e.target.name){
            case USER_NAME:
                setUserNameDirty(true);
                break;
            case EMAIL:
                setEmailDirty(true);
                break;
            case MOBILE_NUMBER:
                setMobileNumberDirty(true);
                break;
            case PASSWORD:
                setPasswordDirty(true);
                break;
            case REPEAT_PASSWORD:
                setRepeatPasswordDirty(true);
                break;
            default:
                break;
        }
    }
    const onUserNameChange = (e) => {
        let text = e.currentTarget.value;
        if(text.length>1)
            setUserNameWarning('');
        else
            setUserNameWarning(USER_NAME_WARNING);
        setUserName(text);

        if(warning.param===USER_NAME) setWarning({});
    }
    const onEmailChange = (e) => {
        let text = e.currentTarget.value;
        if(emailRegex.test(String(text).toLocaleLowerCase()))
            setEmailWarning('');
        else
            setEmailWarning(EMAIL_WARNING);
        setEmail(text);

        if(warning.param===EMAIL) setWarning({});
    }
    const onMobileNumberChange = (e) => {
        let text = e.currentTarget.value;
        if(mobileRegex.test(text))
            setMobileNumberWarning('');
        else
            setMobileNumberWarning(MOBILE_NUMBER_WARNING);
        setMobileNumber(text);

        if(warning.param===MOBILE_NUMBER) setWarning({});
    }
    const onPasswordChange = (e) => {
        let text = e.currentTarget.value;
        if(text.length>=4)
            setPasswordWarning('');
        else
            setPasswordWarning(PASSWORD_WARNING);
        setPassword(text);

        if(repeatPasswordDirty && text!==repeatPassword)
            setRepeatPasswordWarning(REPEAT_PASSWORD_WARNING);
        else if(repeatPasswordDirty && text===repeatPassword)
            setRepeatPasswordWarning('');
    }
    const onRepeatPasswordChange = (e) => {
        let repeatPassword = e.currentTarget.value;
        if(password===repeatPassword)
            setRepeatPasswordWarning('');
        else
            setRepeatPasswordWarning(REPEAT_PASSWORD_WARNING);
        setRepeatPassword(repeatPassword);
    }
    function checkAllFields (){
        if(userName.length <= 1 || 
           !emailRegex.test(String(email).toLocaleLowerCase()) ||
           !mobileRegex.test(mobileNumber) ||
           password.length < 4 ||
           password !== repeatPassword){ return; }
        return true;
    }
    useEffect(()=>{
        if(userNameWarning || emailWarning || passwordWarning || mobileNumberWarning || repeatPasswordWarning)
            setFormValid(false);
        else if(userNameDirty && emailDirty && mobileNumberDirty && passwordDirty && repeatPasswordDirty)
            setFormValid(true);
        else if(checkAllFields())
            setFormValid(true);
        else setFormValid(false);
    },[userName,email,mobileNumber,password,repeatPassword]);
    const addUser = (e) => {
        e.preventDefault();
        if(formValid){
            let user = {userName,password,email,mobileNumber};
            props.registration(user);
        }
    }
    return(
        <div className='contact__registration'>
            <form>
                <Input labelText='User Name' 
                        maxlength='30'
                        type="text"
                        name={USER_NAME}
                        value={userName}
                        borderColor={userNameWarning?ERROR_COLOR:CORRECT_COLOR}
                        onChangeFunction={onUserNameChange}
                        onBlurFunction = {onBlur}
                />
                {userNameDirty && userNameWarning && <WarningBlock text={userNameWarning}/>}
                <div className='contact__input-box'>
                    <div className='contact__input-small'>
                    <Input labelText='Email' 
                            maxlength='254'
                            type="text"
                            name={EMAIL}
                            value={email}
                            borderColor={emailWarning?ERROR_COLOR:CORRECT_COLOR}
                            onChangeFunction={onEmailChange}
                            onBlurFunction = {onBlur}/>
                    {emailDirty && emailWarning && <WarningBlock text={emailWarning}/>}
                    </div>
                    <div className='contact__input-small'>
                    <Input labelText='Mobile Number'
                            maxlength='21'
                            type='text'
                            name={MOBILE_NUMBER}
                            value={mobileNumber}
                            borderColor={mobileNumberWarning?ERROR_COLOR:CORRECT_COLOR}
                            onChangeFunction={onMobileNumberChange}
                            onBlurFunction = {onBlur}/>
                    {mobileNumberDirty && mobileNumberWarning && <WarningBlock text={mobileNumberWarning}/>}
                    </div>
                </div>
                <Input labelText='Password' 
                        maxlength='30'
                        type='password'
                        name={PASSWORD}
                        value={password}
                        borderColor={passwordWarning?ERROR_COLOR:CORRECT_COLOR}
                        onChangeFunction={onPasswordChange}
                        onBlurFunction = {onBlur}/>
                {passwordDirty && passwordWarning && <WarningBlock text={passwordWarning}/>}
                <Input labelText='Repeat Password' 
                        maxlength='30'
                        type='password'
                        name={REPEAT_PASSWORD}
                        value={repeatPassword}
                        borderColor={repeatPasswordWarning?ERROR_COLOR:CORRECT_COLOR}
                        onChangeFunction={onRepeatPasswordChange}
                        onBlurFunction = {onBlur}/>
                {repeatPasswordDirty && repeatPasswordWarning && <WarningBlock text={repeatPasswordWarning}/>}
                {warning.message && <WarningBlock text={warning.message}/>}
                <div className='contact__button-box'>
                    <Button text='SIGN UP' function={addUser} disabled={!formValid}/>
                </div>
            </form>
        </div>
    );
}

export default Registration;
