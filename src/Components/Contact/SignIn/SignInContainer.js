import SignIn from './SignIn.js';
import {signInThunkCreator} from '../../../State/authReducer.js';
import {connect} from 'react-redux';

let mapStateToProps = (state) => {
    return {
        warning: state.auth.signInWarning,
    };
}
let mapDispatchToProps = (dispatch) => {
    return {
        signIn: (user)=>{
            dispatch(signInThunkCreator(user));
        }
    };
}
const SignInContainer = connect(mapStateToProps,mapDispatchToProps)(SignIn);

export default SignInContainer;