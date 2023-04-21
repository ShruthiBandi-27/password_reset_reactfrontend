import React from 'react'
import {
    Navbar,
    Nav,
    NavItem,
  } from 'reactstrap';
  
import {Link} from 'react-router-dom';

export default function Navigation() {
  return (
    <div>
        <Navbar expand="md">
        <div className="collapse navbar-collapse">
        {/* <NavbarBrand href="/" className="me-auto">
          <span className="navbar">Student/Teacher Management</span>
        </NavbarBrand> */}
          <Nav navbar>
            <NavItem>
              <Link to="/" className="nav-link">
                <span className="link-text">Signup</span>
              </Link>
            </NavItem>
            <NavItem>
              <Link to="/login" className="nav-link">
                <span className="link-text">Login</span>
              </Link>
            </NavItem>
            <NavItem>
              <Link to="/forgotpass" className="nav-link">
                <span className="link-text">ForgotPassword</span>
              </Link>
            </NavItem>
          </Nav>
          </div>
      </Navbar>
    </div>
  )
}
