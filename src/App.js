import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import Navbar from './components/Navbar';
import 'bootstrap/dist/css/bootstrap.min.css';
import SewaMobil from './pages/SewaMobil';
import LoginPage from './pages/Login';



function App() {
  return (
    <div className="App">
        <Router basename="/">
        
      <Routes>
        <Route index path="/" element={<LoginPage />} />
        <Route index path="/home" element={<Home />} />
        <Route index path="/sewamobil" element={<SewaMobil />} />
      </Routes>
      </Router>
    </div>
  );
}

export default App;