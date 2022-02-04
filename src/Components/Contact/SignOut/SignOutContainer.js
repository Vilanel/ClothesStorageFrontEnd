import SignOut from './SignOut.js';
import {signOutThunkCreator} from '../../../State/authReducer.js';
import {connect} from 'react-redux';

let mapStateToProps = (state) => {
    return {
        email:state.auth.userEmail,
        password:state.auth.userPassword,
    };
}
let mapDispatchToProps = (dispatch) => {
    return {
        signOut: () => {
            dispatch(signOutThunkCreator());
        }
    };
}
const SignOutContainer = connect(mapStateToProps,mapDispatchToProps)(SignOut);

export default SignOutContainer;