import React from 'react';
import {Link,NavLink} from 'react-router-dom';
import {FaShoppingCart} from 'react-icons/fa'
import { useAuth } from '../../context/Auth'; 
import { Notyf } from "notyf";

const notyf = new Notyf({
  duration: 2000,
  position: {
    x: "center",
    y: "top",
  },
});
const Header = () => {
  const {auth,setAuth} = useAuth();

  const handlelogout = () =>{
    setAuth({
      ...auth,
      user:null,
      token: ""
    })
    localStorage.removeItem('auth');
    notyf.success("Logout Sucessfully")
  }

  

  return (
    <nav className="navbar navbar-expand-lg bg-body-tertiary mb-auto">
      <div className="container-fluid">
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarTogglerDemo01"
          aria-controls="navbarTogglerDemo01"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarTogglerDemo01">
          <Link className="navbar-brand" to="/">
            <FaShoppingCart /> Ecommerce App
          </Link>
          <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <NavLink className="nav-link " to="/">
                Home
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" to="/category">
                category
              </NavLink>
            </li>
            {!auth.user ? (
              <>
                <li className="nav-item">
                  <NavLink className="nav-link" to="/register">
                    register
                  </NavLink>
                </li>
                <li className="nav-item">
                  <NavLink className="nav-link" to="/login">
                    login
                  </NavLink>
                </li>
              </>
            ) : (
              <>
                <li class="nav-item dropdown">
                  <NavLink
                    className="nav-link dropdown-toggle"
                    to="/"
                    id="navbarDropdownMenuLink"
                    role="button"
                    data-bs-toggle="dropdown"
                    aria-expanded="false"
                  >
                    {auth?.user?.name}
                  </NavLink>
                  <ul
                    class="dropdown-menu"
                    aria-labelledby="navbarDropdownMenuLink"
                  >
                    <li>
                      <NavLink className="dropdown-item" to={`/dashboard/${auth?.user?.role===1?"admin":"user"}`}>
                        Dashboard
                      </NavLink>
                    </li>
                    <li>
                      <NavLink
                        onClick={handlelogout}
                        className="dropdown-item"
                        to="/login"
                      >
                        logout
                      </NavLink>
                    </li>
                  </ul>
                </li>
              </>
            )}
            <li className="nav-item">
              <NavLink className="nav-link" to="/shop">
                cart(0)
              </NavLink>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Header
