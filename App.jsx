import React from 'react'
import HomePage from './pages/home/HomePage'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import NavbarLogin from './components/NavbarLogin';
import Footer from './components/Footer';
import LoginPage from './pages/Auth/LoginPage';
import RegisterPage from './pages/Auth/RegisterPage';
import Allcategory from './pages/allcategory';

const App = () => {
  return (
    <BrowserRouter>
      <NavbarLogin />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/register" element={<RegisterPage />} />
        <Route path="/allcategory" element={<Allcategory />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App