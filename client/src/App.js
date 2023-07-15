import './App.css';
import Register from './pages/Register';
// import Layout from './components/Layouts/Layout';
import {Route,Routes,BrowserRouter} from 'react-router-dom';
import About from './pages/About';
import Contact from './pages/Contact';
import Policy from './pages/Policy';
import PageNotFound from './pages/PageNotFound';
import HomePage from './pages/HomePage';
import Login from './pages/Login';
import Dashboard from './pages/user/Dashboard';
import Private from './components/Layouts/route/Private'
import ForgotPassword from './pages/ForgotPassword';
import AdminRoute from './components/Layouts/route/AdminRoute';
import AdminDashboard from './pages/admin/AdminDashboard'
import CreateCategory from './pages/admin/CreateCategory';
import CreateProduct from './pages/admin/CreateProduct';
import Users from "./pages/admin/users";
import UserProfile from './pages/user/UserProfile';
import UserOrders from './pages/user/UserOrders';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/dashboard" element={<Private />}>
          <Route path="user" element={<Dashboard />} />
          <Route path="user/profile" element={<UserProfile/>} />
          <Route path="user/orders" element={<UserOrders/>} />
        </Route>
        <Route path="/dashboard" element={<AdminRoute />}>
          <Route path="admin" element={<AdminDashboard />} />
          <Route path="admin/create-category" element={<CreateCategory />} />
          <Route path="admin/create-product" element={<CreateProduct />} />
          <Route path="admin/users" element={<Users />} />
        </Route>
        <Route path="/about" element={<About />} />
        <Route path="/forgot-password" element={<ForgotPassword />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/policy" element={<Policy />} />
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />
        <Route path="*" element={<PageNotFound />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
