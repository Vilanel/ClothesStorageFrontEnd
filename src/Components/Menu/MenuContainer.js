import Menu from './Menu.js';
import {connect} from 'react-redux';

let mapStateToProps = (state) => {
    return {
        isAuth: state.auth.isAuth,
        isAdmin: state.auth.isAdmin,
    };
}
const RegistrationContainer = connect(mapStateToProps,{})(Menu);

export default RegistrationContainer;