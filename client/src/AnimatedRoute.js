import React from "react";
import Register from "./pages/Register";
// import Layout from './components/Layouts/Layout';
import { Route, Routes, useLocation } from "react-router-dom";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Policy from "./pages/Policy";
import PageNotFound from "./pages/PageNotFound";
import HomePage from "./pages/HomePage";
import Login from "./pages/Login";
import Dashboard from "./pages/user/Dashboard";
import Private from "./components/Layouts/route/Private";
import ForgotPassword from "./pages/ForgotPassword";
import AdminRoute from "./components/Layouts/route/AdminRoute";
import AdminDashboard from "./pages/admin/AdminDashboard";
import CreateCategory from "./pages/admin/CreateCategory";
import CreateProduct from "./pages/admin/CreateProduct";
import Users from "./pages/admin/Users";
import UserProfile from "./pages/user/UserProfile";
import UserOrders from "./pages/user/UserOrders";
import Products from "./pages/admin/Products";
import UpdateProduct from "./pages/admin/UpdateProduct";
import Search from "./pages/Search";
import ProductDetails from "./pages/ProductDetails";
import CartPage from "./pages/CartPage";
import Categories from "./pages/Categories";
import AdminOrders from "./pages/admin/AdminOrders";
import CategoryProduct from "./pages/CategoryProduct";
import { AnimatePresence } from "framer-motion";
import Header from "./components/Layouts/Header";

const AnimatedRoute = () => {
  const location = useLocation();
  const [mode, setmode] = React.useState("light");

  const ChangeMode = () => {
    if (mode === "light") {
      setmode("dark");
    } else {
      setmode("light");
    }
  };
  return (
    <AnimatePresence>
      <Header mode={mode} ChangeMode={ChangeMode} />
      <Routes location={location} key={location.pathname}>
        <Route path="/" element={<HomePage mode={mode} />} />
        <Route path="/search" element={<Search />} />
        <Route path="/categories" element={<Categories mode={mode} />} />
        <Route path="/product/:slug" element={<ProductDetails />} />
        <Route path="/shop" element={<CartPage mode={mode} />} />
        <Route
          path="/category/:slug"
          element={<CategoryProduct mode={mode} />}
        />
        <Route path="/dashboard" element={<Private />}>
          <Route path="user" element={<Dashboard mode={mode} />} />
          <Route path="user/profile" element={<UserProfile mode={mode} />} />
          <Route path="user/orders" element={<UserOrders mode={mode} />} />
        </Route>
        <Route path="/dashboard" element={<AdminRoute />}>
          <Route path="admin" element={<AdminDashboard mode={mode} />} />
          <Route
            path="admin/create-category"
            element={<CreateCategory mode={mode} />}
          />
          <Route
            path="admin/create-product"
            element={<CreateProduct mode={mode} />}
          />
          <Route
            path="admin/product/:slug"
            element={<UpdateProduct mode={mode} />}
          />
          <Route path="admin/products" element={<Products mode={mode} />} />
          <Route path="admin/users" element={<Users mode={mode} />} />
          <Route path="admin/orders" element={<AdminOrders mode={mode} />} />
        </Route>
        <Route path="/about" element={<About />} />
        <Route path="/forgot-password" element={<ForgotPassword />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/policy" element={<Policy />} />
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />
        <Route path="*" element={<PageNotFound />} />
      </Routes>
    </AnimatePresence>
  );
};

export default AnimatedRoute;
