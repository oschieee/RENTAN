import React, {useContext, useEffect, useState} from 'react';
import { useNavigate } from 'react-router-dom';
import Navbar from '../components/Navbar';
import axios from 'axios';
import { AuthContext } from '../AuthContext';

const Penyewa = () => {

const navigate = useNavigate();
  
const [payload, setPayload] = useState({
  Email: '',
  Password: '',
  Username: '',
  Name: '',
  Phone: '+62',
  Address: '',
  Image: '',
  Type: '',
  Year: '',

});

const { token } = useContext(AuthContext);

useEffect(() => {
  const fetchData = async () => {
    try {
      console.log(token);
      const response = await axios.get('http://localhost:3000/api/rental', {
        headers: {
          Authorization: `Bearer ${token}`
        },
        withCredentials: true
      });
      console.log(response.data);
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };

  if (token) {
    fetchData();
  }
}, [token]);

const handleChange = (e) => {
  const { value, name } = e.target;
  setPayload({ ...payload, [name]: value });
};


const handleSubmit = (e) => {
  e.preventDefault();
  // Here you would typically handle the login logic, e.g., API call
  console.log(payload);
  navigate('/home');
};

  return (
    <>
    <Navbar/>
    <div className="penyewa-container">
      <div className="penyewa-card">
        <div className='penyewa-kiri'> 
        <h2><span>Data Diri</span></h2>
        <p>Daftarkan Diri Anda</p>
        <div className="input-group">
              <i className="fa fa-envelope"></i>
              <input
                type="email"
                name="Email"
                placeholder="Email"
                value={payload.Email}
                required
                onChange={handleChange}
              />
            </div>
            <div className="input-group">
              <i className="fa fa-envelope"></i>
              <input
                type="password"
                name="Password"
                placeholder="Password"
                value={payload.Password}
                required
                onChange={handleChange}
              />
            </div>
            
        </div>
        <div className="penyewa-form">
          <form onSubmit={handleSubmit}>
            <div className="input-group">
              <i className="fa fa-envelope"></i>
              <input
                type="text"
                name="Username"
                placeholder="Username"
                value={payload.Username}
                required
                onChange={handleChange}
              />
            </div>
            <div className="input-group">
              <i className="fa fa-lock"></i>
              <input
                type="text"
                name="Name"
                placeholder="Name"
                value={payload.Name}
                required
                onChange={handleChange}
              />
            </div>
            <div className="input-group">
              <input
                type="tel"
                name="Phone"
                placeholder="Phone"
                
                value={payload.Phone}
                required
                onChange={handleChange}
              />
            </div>
            <div className="input-group">
              <i className="fa fa-lock"></i>
              <input
                type="text"
                name="Address"
                placeholder="Address"
                value={payload.Address}
                required
                onChange={handleChange}
              />
            </div>

            <div>
            </div>
            <button className="button-login" type="submit">Log in</button>
          </form>
        </div>
      </div>
      <div className="penyewa-card">
        <div className='penyewa-kiri'> 
        <h2><span>Data Kendaraan</span></h2>
        <p>Daftarkan Kendaraan Anda</p>
        <div className="input-group">
              <i className="fa fa-envelope"></i>
              <input
                type="text"
                name="Nama Kendaraan"
                placeholder="Nama Kendaraan"
                value={payload.NamaKendaraan}
                required
                onChange={handleChange}
              />
            </div>
            <div className="input-group">
              <i className="fa fa-envelope"></i>
              <input
                type="text"
                name="Description"
                placeholder="Description"
                value={payload.Description}
                required
                onChange={handleChange}
              />
            </div>
            <div className="input-group">
              <i className="fa fa-envelope"></i>
              <input
                type="number"
                name="Harga"
                placeholder="Harga"
                value={payload.Description}
                required
                onChange={handleChange}
              />
            </div>
            
            
        </div>
        <div className="penyewa-form">
          <form onSubmit={handleSubmit}>
            <div className="input-image">    
            <select
                name="Tipe"
                className='dropdown-car-type'
                value={payload.Type}
                required
                onChange={handleChange}
              >
                <option value="default">--pilih jenis--</option>
                <option value="car">Car</option>
                <option value="motor">Motor</option>
                <option value="bus">Bus</option>
              </select>
            </div>
            <div className="input-group">
              <i className="fa fa-lock"></i>
              <input
                type="text"
                name="Tahun Pembuatan"
                placeholder="Tahun Pembuatan"
                value={payload.Year}
                required
                onChange={handleChange}
              />
            </div>
            <div className="input-image">
            <p>Image</p>
              <input
                type="file"
                name="Image"
                placeholder="Image"
                value={payload.Image}
                required
                onChange={handleChange}
              />
            </div>
            

            <div>
            </div>
            <button className="button-login" type="submit">Submit</button>
          </form>
          
        </div>
      </div>
    </div>
    </>
  );
}

export default Penyewa;
