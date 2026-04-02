import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

// Layout components
import Layout from './components/Layout';

// Page components (First Batch)
import Login from './pages/Login';
import ProductDetail from './pages/ProductDetail';
import OrderSummary from './pages/OrderSummary';
import OrderDetails from './pages/OrderDetails';
import Register from './pages/Register';
import ShippingAddress from './pages/ShippingAddress';
import Terms from './pages/Terms';
import NotFound from './pages/NotFound';

// Page components (Second Batch - The ones causing the error)
import Home from './pages/Home';
import Category from './pages/Category';
import Cart from './pages/Cart';
import Checkout from './pages/Checkout';
import Contact from './pages/Contact';
import About from './pages/About';
import ForgotPassword from './pages/ForgotPassword';
import EditProfile from './pages/EditProfile';

// Account Management (Additional files from your upload)
import Account from './pages/Account';
import BillingAddress from './pages/BillingAddress';

import './App.css'; 

function App() {
  return (
    <Router>
      <Layout>
        <Routes>
          {/* Main Pages */}
          <Route path="/" element={<Home />} />
          <Route path="/product" element={<ProductDetail />} />
          <Route path="/category" element={<Category />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/checkout" element={<Checkout />} />
          
          {/* Auth & Account */}
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/forgot-password" element={<ForgotPassword />} />
          <Route path="/account" element={<Account />} />
          <Route path="/edit-profile" element={<EditProfile />} />
          <Route path="/edit-shipping" element={<ShippingAddress />} />
          <Route path="/edit-billing" element={<BillingAddress />} />
          
          {/* Orders */}
          <Route path="/order-summary" element={<OrderSummary />} />
          <Route path="/order-details" element={<OrderDetails />} />
          
          {/* Information */}
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/terms" element={<Terms />} />

          {/* 404 Route */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </Layout>
    </Router>
  );
}

export default App;