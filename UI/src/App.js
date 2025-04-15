
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
import Enterprises from './component/EnterprisesComponent/Enterprises';
import Services from './component/ServiceComponent/Services';
import UserHome from './component/UserHome/UserHome.js';
import AdminHome from './component/AdminComponent/AdminHome.js';
import Logout from './component/LogoutComponent/Logout.js';
import React from 'react';
import ManageUser from './component/ManageUserComponent/ManageUser.js';
import EpAdmin from './component/EpAdminComponent/EpAdmin.js';
import Verifyuser from './component/VerifyuserComponent/Verifyuser.js';
import Delivery from './component/DeliveryComponent/Delivery.js';
import 'bootstrap/dist/css/bootstrap.min.css';
import Estimate from './Estimate.js';
import Trucks from './component/Trucks';
import PackersMovers from './component/PackersMovers';
import IntercityCourier from './component/IntercityCourier';
import TwoWheeler from './TwoWheeler.js';
import CpUser from './component/CpUserComponent/CpUser.js';
import EpUser from './component/EpUserComponent/EpUser.js';

//import Estimate from './Estimate.js';



function App() {
  return(
    <>
    <Nav/>
    <Banner/>
    <Routes>  {/* Ensuring only one route is active at a time */}
    <Route path="/Enterprises" element={<Enterprises />} />   
        <Route path="/" element={<Home />} />
        <Route path="/Enterprises" element={<Enterprises />} />
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />
        <Route path="/services" element={<Services />} />
        <Route path="/contact" element={<Contact />} /> {/* Fixed spelling */}
        <Route path="/admin" element={<AdminHome />} /> 
        <Route path="/user" element={<UserHome />} /> 
        <Route path="/logout" element={<Logout />} />
        <Route path="/manageuser" element={<ManageUser />} />
        <Route path="/epadmin" element={<EpAdmin />} />
        <Route path="/verifyuser/:email" element={<Verifyuser />} />
        <Route path="/delivery" element={<Delivery />} />
        <Route path="/estimate" element={<Estimate />} />
        <Route path="/two-wheeler" element={<TwoWheeler />} />
        <Route path="/trucks" element={<Trucks />} />
        <Route path="/packers-movers" element={<PackersMovers />} />
        <Route path="/intercity" element={<IntercityCourier />} />
        <Route path="/epuser" element={<EpUser />} />
        <Route path="/cpuser" element={<CpUser />} />
        

      </Routes>
    <div id="container">
    </div>
    </>
  );
  
}

export default App;
