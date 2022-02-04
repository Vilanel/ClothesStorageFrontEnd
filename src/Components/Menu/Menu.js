import React,{useState,useEffect} from 'react';
import './Menu.scss';
import { NavLink } from 'react-router-dom';
import { Navbar, Nav, Container } from 'react-bootstrap';

const Menu = (props) => {
  let [isAuth,setIsAuth] = useState(props.isAuth);
  useEffect(()=>{
    setIsAuth(props.isAuth);
  },[props.isAuth]);

  let [isAdmin,setIsAdmin] = useState(props.isAdmin);
  useEffect(()=>{
    setIsAdmin(props.isAdmin);
  },[props.isAdmin]);

  if(isAdmin && isAuth){
    return (
      <div className='menu'>
        <Navbar expand="lg">
          <Container>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
              <Nav className="ml-auto">
                <NavLink to="/admin-panel">Admin Panel</NavLink>
                <NavLink to="/about">About</NavLink>
                <NavLink to="/shop">Shop</NavLink>
                <NavLink to="/gallery">Gallery</NavLink>
                <NavLink to="/signOut">Sign out</NavLink>
              </Nav>
            </Navbar.Collapse>
          </Container>
        </Navbar>
      </div>
    );
  }
  if(isAuth){
    return (
      <div className='menu'>
        <Navbar expand="lg">
          <Container>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
              <Nav className="ml-auto">
                <NavLink to="/basket">Basket</NavLink>
                <NavLink to="/about">About</NavLink>
                <NavLink to="/shop">Shop</NavLink>
                <NavLink to="/gallery">Gallery</NavLink>
                <NavLink to="/signOut">Sign out</NavLink>
              </Nav>
            </Navbar.Collapse>
          </Container>
        </Navbar>
      </div>
    );
  }
  return (
    <div className='menu'>
      <Navbar expand="lg">
        <Container>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ml-auto">
              <NavLink to="/about">About</NavLink>
              <NavLink to="/shop">Shop</NavLink>
              <NavLink to="/gallery">Gallery</NavLink>
              <NavLink to="/signIn">Sign in</NavLink>
              <NavLink to="/registration">/&nbsp;&nbsp;&nbsp;up</NavLink>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
}

export default Menu;