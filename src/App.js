import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Home from './pages/home/Home';
import AboutUs from './pages/aboutus/AboutUs';
import Product from './pages/product/Product';
import Service from './pages/service/Service';
import Contact from './pages/contact/Contact';
import NotFoundPage from './notfound/NotFoundPage';
import Footer from './components/Footer';

export default function App() {

  return (
    <>
      <Routes>
        <Route path="/" element={<><Home /></>} />
        <Route path="/about" element={<><AboutUs /></>} />
        <Route path="/product" element={<><Product /></>} />
        <Route path="/service" element={<><Service /></>} />
        <Route path="/contact" element={<><Contact /></>} />
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
      <Footer />
    </>
  );
}
