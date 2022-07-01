import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import Home from './components/Home';
import About from './components/About';
import Contact from './components/Contact';
import Listing from './components/Listing';
import Login from './components/auth/Login';
import Register from './components/auth/Register';
import Reservation from './components/Home-client/Reservation';
import Profil from './components/Home-client/Profil';
import Complaint from './components/Home-client/Complaint';
import Historical from './components/Home-client/Historical';
import Admin from './components/admin/Admin';
import DataTables from './components/admin/Data-tables';

import Clients from './components/admin/Clients';
import Administrateurs from './components/SuperAdmin/Administrateurs';
import AddAdmins from './components/SuperAdmin/AddAdmins';
import AddVehicles from './components/admin/AddVehicles';
import UpdateReservation from './components/admin/UpdateReservation';
import RéparVoiture from './components/admin/RéparVoiture';
import UpdateVehicle from './components/admin/UpdateVehicule';
import UpdateAdmin from './components/SuperAdmin/UpdateAdmin';
import Dashboard from './components2/dashboard/index';
import CarsList from './components2/dashboard/carsList';
import ClientList from './components2/dashboard/clientList';
import ReservationList from "./components2/dashboard/reservations"
import ReservationForm from "./components2/dashboard/reservationForm"
import Reclamation from './components2/dashboard/reclamation';
import AdminList from './components2/dashboard/adminList';
import { ProtectedRoute} from './protected.route';
import { NoAuthRoute } from './noauth.route';
function App() {
  return (

    <Router>
      <div className="App">

        <Routes>
          
          {/* clients routes */}
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/listing" element={<Listing />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/reservation" element={<Reservation />} />
          <Route path="/complaint" element={<Complaint/>} />
          <Route path="/reservations" element={<ReservationList/>} />
          <Route path="/book/:carId" element={<ReservationForm/>} />

          {/* end clients routes */}

          {/* dashboard routes */}
          <Route path="/dashboard" element={ <ProtectedRoute> <Dashboard/> </ProtectedRoute> } />
          <Route path="/voitures" element={ <ProtectedRoute> <CarsList/> </ProtectedRoute> } />
          <Route path="/clients" element={ <ProtectedRoute> <ClientList /> </ProtectedRoute> } />
          <Route path="/reclamation" element={ <ProtectedRoute> <Reclamation /> </ProtectedRoute> } />
          <Route path="/admin" element={ <ProtectedRoute> <AdminList /> </ProtectedRoute> } />
          


          <Route path="/profil" element={<Profil />} />
          <Route path="/historical" element={<Historical />} />
          <Route path="/addadmins" element={<AddAdmins />} />
          <Route path="/addvehicles" element={<AddVehicles />} />
          <Route path="/updatereservation" element={<UpdateReservation />} />
          <Route path="/reparation" element={<RéparVoiture />} />
          <Route path="/updatevehicle" element={<UpdateVehicle />} />
          <Route path="/updateadmin" element={<UpdateAdmin />} />
          {/* end dashboard routes */}


        </Routes>

      </div>

    </Router>

  );
}

export default App
