import Header from './Components/Header/Header.js';
import MenuContainer from './Components/Menu/MenuContainer.js';
import Footer from './Components/Footer/Footer.js';
import RoutersContainer from './Components/Routers/RoutersContainer.js';
import 'bootstrap/dist/css/bootstrap.min.css';

function App(props) {
  return (
    <>
      <Header/>
      <MenuContainer/>
      <RoutersContainer/>
      <Footer/>
    </>
  );
}

export default App;
