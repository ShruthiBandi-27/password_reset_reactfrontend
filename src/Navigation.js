import React from 'react'
import {
    Navbar,
    Nav,
    NavItem,
  } from 'reactstrap';
  
import {Link, useNavigate} from 'react-router-dom';
import Avatar from 'react-avatar';

export default function Navigation({user, setUser, setShortenLink}) {
  const nav = useNavigate();
  const handleLogout = () => {
    setUser(null);
    setShortenLink(null);
    nav("/");
  };
  return (
    <div>
        <Navbar expand="md">
        <div className="collapse navbar-collapse justify-content-between">
        <h1 className="navbar-heading">URL <span>Shortener</span></h1>
          <Nav navbar>
          {user ? (
            <>
              <NavItem>
                {/* <span className="nav-link" style={{color: "white"}}>Profile: {user.charAt(0)}</span> */}
                {/* <span className="nav-link" style={{color: "white"}}><Avatar name="Foo Bar" /></span> */}
                <Avatar googleId="118096717852922241760" size="50" round={true} name = {user.charAt(0)} />
              </NavItem>
              <NavItem>
              <span className="nav-link" onClick={handleLogout}>
                    <span className="link-text">Logout</span>
                  </span>
                </NavItem>
              </>
          ): (
            <>
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
            

            </>
          )}
          </Nav>
          </div>
      </Navbar>
    </div>
  )
}
