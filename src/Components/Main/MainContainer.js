import {connect} from 'react-redux';
import Main from './Main';

let mapStateToProps = (state) => {
    return {
        bestSellers:state.products.bestSellers
    };
}

const MainContainer = connect(mapStateToProps)(Main);

export default MainContainer;