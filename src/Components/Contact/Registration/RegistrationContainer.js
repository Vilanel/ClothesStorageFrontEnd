import Registration from './Registration.js';
import {registrationThunkCreator} from '../../../State/authReducer.js';
import {connect} from 'react-redux';

let mapStateToProps = (state) => {
    return {
        warning: state.auth.registrationWarning,
        userWasCreatedMessage: state.auth.userWasCreatedMessage,
    };
}
let mapDispatchToProps = (dispatch) => {
    return {
        registration: (user)=>{
            dispatch(registrationThunkCreator(user));
        }
    };
}
const RegistrationContainer = connect(mapStateToProps,mapDispatchToProps)(Registration);

export default RegistrationContainer;