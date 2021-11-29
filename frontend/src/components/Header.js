import React from "react";
import { Navbar, Nav} from "react-bootstrap";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router";

const Header = () => {
  const navigate = useNavigate()
  const user = JSON.parse(localStorage.getItem('user-info'))
  const logout = ()=>{
    localStorage.clear()
    navigate('/')
  }
  return (
    <div>
      <Navbar bg="dark" variant="dark">
          <Navbar.Brand style={{marginLeft:'35px'}}>Turun Kauppa</Navbar.Brand>
          <Nav className="me-auto nav_bar_wrapper" >
            {user ? (
              <>
                <Link to="/" style = {{textDecoration:'none', color:'wheat'}}>Product List</Link>
                <Link to="/add" style = {{textDecoration:'none', color:'wheat'}}>Add Product</Link>
                <button style = {{color:'black', marginLeft:'5px'}}>Welcome {user.name}</button>
                <button onClick = {logout} style = {{color:'black', marginLeft:'5px'}}>Logout</button>
              </>
            ) : (
              <>
                <Link to="/login">Login</Link>
                <Link to="/register">Register</Link>
              </>
            )}
          </Nav>

      </Navbar>
    </div>
  );
};

export default Header;
