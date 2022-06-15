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
import Voiture from './components/admin/Voitures';
import Navbar from './components/Navbar';


function App() {
  return (
    <Router>

    
        <div classNameName="App">
      <Navbar/>
      <Routes>
        <Route path="/"  component={Home} />
        <Route path="/about"  component={About} />
        <Route path="/contact"  component={Contact} />
        <Route path="/listing"  component={Listing} />
        <Route path="/login"  component={Login} />
      </Routes>

    </div>
    </Router>
    
  );
}

export default App
