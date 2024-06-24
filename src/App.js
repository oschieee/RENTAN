import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import 'bootstrap/dist/css/bootstrap.min.css';
import SewaMobil from './pages/SewaMobil';
import LoginPage from './pages/Login';
import Penyewa from './pages/Penyewa';
import Register from './pages/Register';
import OrderDetail from './pages/OrderDetail';
import Payment from './pages/Payment';



function App() {
  return (
    <div className="App">
        <Router basename="/">
        
      <Routes>
        <Route index path="/" element={<LoginPage />} />
        <Route index path="/home" element={<Home />} />
        <Route index path="/sewamobil" element={<SewaMobil />} />
        <Route index path="/penyewa" element={<Penyewa />} />
        <Route index path="/register" element={<Register />} />
        <Route index path="/payment" element={<Payment />} />
        <Route index path="/sewamobil/detail" element={<OrderDetail />} />
      </Routes>
      </Router>
    </div>
  );
}

export default App;