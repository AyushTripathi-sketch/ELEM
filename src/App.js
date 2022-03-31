import React from 'react';
import './App.css';

import Home from './pages/Home';
import Logined from './pages/Logined'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Household from './pages/Household';
import Dashboard from './pages/Dashboard';
import ELEMoney from './pages/ELEMoney';
import AboutElemoney from './pages/ELEMoney_General';
import AboutDSPN from './pages/DSPN_General';
import Register from'./pages/Register';
import ElemoneyRegister from'./pages/ElemoneyRegister';
import Login from './pages/Login';
import Contact from './pages/Contact';
import Team from './pages/Team';
import DSPN from './pages/DSPN';
import Faq from './pages/faq';
import Welem from './pages/WELEM';
import {ProtectedRoute} from "./components";
import MonitoringSetup from './pages/MonitoringSetup';
import { UserAuthContextProvider } from "./context/UserAuthContext";
function App() {
  return (
    <Router>
      <UserAuthContextProvider>
      <Routes>
      <Route path="/" element={<Home/>} />
          <Route path="/home" element={<ProtectedRoute><Home/></ProtectedRoute>} />
          <Route path="/aboutelemoney" element={<AboutElemoney/>} />
          <Route path="/aboutdspn" exact element={<AboutDSPN/>} />
          <Route path="/login" element={<Login/>} />
          <Route path="/contact" element={<Contact/>} />
          <Route path="/team" element={<Team/>} />
          <Route path="/dashboard" element={<ProtectedRoute><Dashboard/></ProtectedRoute>} />
          <Route path="/myhousehold" element={<ProtectedRoute><Household/></ProtectedRoute>} />
          <Route path="/elemoney" element={<ELEMoney/>} />
          <Route path="/dspn" element={<DSPN/>} />
          <Route path="/faq" element={<Faq/>} />
          <Route path="/monitoringsetup" element={<ProtectedRoute><MonitoringSetup/></ProtectedRoute>} />
          <Route path="/elemoneyRegister" element={<ElemoneyRegister/>} />
          <Route path="/register" element={<Register/>} />
          <Route path='/welem' element={<Welem/>} />
      </Routes>
      </UserAuthContextProvider>
    </Router>
  );
}

export default App;
