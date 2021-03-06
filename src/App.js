import React from 'react';
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import './App.css';
import Home from './components/Home';
import About from './components/About';
import Contact from './components/Contact';
import Listing from './components/Listing';
import Login from './components/auth/Login';
import Register from './components/auth/Register';
import HomeClient from './components/Home-client/HomeClient';
import Reservation from './components/Home-client/Reservation';
import Profil from './components/Home-client/Profil';
import Complaint from './components/Home-client/Complaint';
import Historical from './components/Home-client/Historical';
import Admin from './components/admin/Admin';
import DataTables from './components/admin/Data-tables';
import Reclamation from './components/admin/Reclamation';
import Voitures from './components/admin/Voitures';
import Navbar from './components/Navbar';
import Clients from './components/admin/Clients';
import Administrateurs from './components/SuperAdmin/Administrateurs';
import AddAdmins from './components/SuperAdmin/AddAdmins';
import AddVehicles from './components/admin/AddVehicles';
import UpdateReservation from './components/admin/UpdateReservation';
import RéparVoiture from './components/admin/RéparVoiture';
import UpdateVehicle from './components/admin/UpdateVehicule';
import UpdateAdmin from './components/SuperAdmin/UpdateAdmin';
import Test from './components/Test';


function App() {
  return (
    
    <Router>
        <div classNameName="App">
      
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/about"  element={<About/>} />
        <Route path="/contact" element={<Contact/>} />
        <Route path="/listing" element={<Listing/>} />
        <Route path="/login"   element={<Login/>} />
        <Route path="/reservation"  element={<Reservation/>} />
        <Route path="/complaint" element={<Complaint/>} />
        <Route path="/profil" element={<Profil/>} />
        <Route path="/historical"   element={<Historical/>} />
        <Route path="/register"   element={<Register/>} />
        <Route path="/admin"   element={<Admin/>} />
        <Route path="/reclamation"   element={<Reclamation/>} />
        <Route path="/voitures"   element={<Voitures/>} />
        <Route path="/datatables"   element={<DataTables/>} />
        <Route path="/clients"   element={<Clients/>} />
        <Route path="/superadministrateurs"   element={<Administrateurs/>} />
        <Route path="/addadmins"   element={<AddAdmins/>} />
        <Route path="/addvehicles"   element={<AddVehicles/>} />
        <Route path="/updatereservation"   element={<UpdateReservation/>} />
        <Route path="/reparation"   element={<RéparVoiture/>} />
        <Route path="/updatevehicle"   element={<UpdateVehicle/>} />
        <Route path="/updateadmin"   element={<UpdateAdmin/>} />
        <Route path="/test"   element={<Test/>} />
        
         
      </Routes>
       
    </div>
    
    </Router>
    
  );
}

export default App
