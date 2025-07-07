
import './App.css';
import { Routes,Route } from 'react-router-dom';
import Banner from './component/BannerComponent/Banner';
import Nav from './component/NavComponent/Nav';
import Header from './component/HeaderComponent/Header';
import Sidebar from './component/SidebarComponent/Sidebar';
import Footer from './component/FooterComponent/Footer';
import Home from './component/HomeComponent/Home';
import Contact from './component/ContactComponent/Contact';
import Login from './component/LoginComponent/Login';
import Register from './component/RegisterComponent/Register';
import About from './component/AboutComponent/About';
import Services from './component/ServiceComponent/Services';
import React from 'react';

function App() {
  return(
    <>
    <Nav/>
    <Banner/>
    <Routes>  {/* Ensuring only one route is active at a time */}
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />
        <Route path="/services" element={<Services />} />
        <Route path="/contact" element={<Contact />} /> {/* Fixed spelling */}
      </Routes>
    <div id="container">
    </div>
    </>
  );
  
}

export default App;
