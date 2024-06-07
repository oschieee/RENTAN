import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import Navbar from './components/Navbar';
import 'bootstrap/dist/css/bootstrap.min.css';
import SewaMobil from './pages/SewaMobil';



function App() {
  return (
    <div className="App">
        <Router basename="/">
        <Navbar/>
      <Routes>
        <Route index path="/" element={<Home />} />
        <Route index path="/kontak" element={<SewaMobil />} />
      </Routes>
      </Router>
    </div>
  );
}

export default App;