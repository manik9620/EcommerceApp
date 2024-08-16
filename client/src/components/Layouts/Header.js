import React from "react";
import { Link, NavLink } from "react-router-dom";
import { useCart } from "../../context/cart";
import SearchInput from "../Form/SearchInput";
import { Badge } from "antd";
import useCategory from "../../hooks/useCategory";
import { useAuth } from "../../context/Auth";
import { Notyf } from "notyf";
import { ReactComponent as Sun } from "./Sun.svg";
import { ReactComponent as Moon } from "./Moon.svg";
import "./DarkMode.css";

const notyf = new Notyf({
  duration: 2000,
  position: {
    x: "center",
    y: "top",
  },
});
const Header = (props) => {
  const [cart] = useCart();
  const { auth, setAuth } = useAuth();

  const categories = useCategory();

  const handlelogout = () => {
    setAuth({
      ...auth,
      user: null,
      token: "",
    });
    localStorage.removeItem("auth");
    notyf.success("Logout Sucessfully");
  };

  return (
    <nav
      className={`navbar navbar-expand-lg  navbar-${props.mode} bg-${props.mode}`}
    >
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
          <div className="navbar-brand">
            {/* <FaShoppingCart />  */}
            <Link className="nav-link" to="/">
              <img
                src="https://i.postimg.cc/rsjxY7z1/navbar-logo.png"
                width={90}
                height={40}
                alt="Logo"
              ></img>
            </Link>
          </div>
          <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
            <SearchInput />
            <li className="nav-item">
              <NavLink className="nav-link " to="/">
                Home
              </NavLink>
            </li>
            <li className="nav-item dropdown">
              <Link
                className="nav-link dropdown-toggle"
                to={"/categories"}
                data-bs-toggle="dropdown"
              >
                Categories
              </Link>
              <ul className="dropdown-menu">
                <li>
                  <Link className="dropdown-item" to={"/categories"}>
                    All Categories
                  </Link>
                </li>
                {categories?.map((c) => (
                  <li key={c._id}>
                    <Link className="dropdown-item" to={`/category/${c.slug}`}>
                      {c.slug}
                    </Link>
                  </li>
                ))}
              </ul>
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
                <li className="nav-item dropdown">
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
                    className="dropdown-menu"
                    aria-labelledby="navbarDropdownMenuLink"
                  >
                    <li>
                      <NavLink
                        className="dropdown-item"
                        to={`/dashboard/${
                          auth?.user?.role === 1 ? "admin" : "user"
                        }`}
                      >
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
              <Badge count={cart?.length} showZero>
                <NavLink className="nav-link" to="/shop">
                  Cart
                </NavLink>
              </Badge>
            </li>
          </ul>
        </div>
        <div className="dark_mode">
          <input
            className="dark_mode_input"
            type="checkbox"
            id="flexSwitchCheckDefault"
            onChange={props.ChangeMode}
          />
          <label
            className={`dark_mode_label form-check-label text-${
              props.mode === "light" ? "dark" : "light"
            }`}
            htmlFor="flexSwitchCheckDefault"
          >
            <Sun />
            <Moon />
          </label>
        </div>
      </div>
    </nav>
  );
};

export default Header;
