import React, {useContext, useEffect, useState} from 'react';
import { useNavigate } from 'react-router-dom';
import Navbar from '../components/Navbar';
import axios from 'axios';
import { AuthContext } from '../AuthContext';
import { useSelector } from 'react-redux';

const Penyewa = () => {

const navigate = useNavigate();
  
const [payload, setPayload] = useState({
  name:'',
  image: '',
  price:'',
  description: '',
  yearManufacture: '',
  vehicleTypeId:'',
  transmissionId:'',
});

const [vehicleType, setVehicleType] = useState([]);
const [transmission, setTransmission] = useState([]);


// const { token } = useContext(AuthContext);
const {token} = useSelector((state) => state.Auth.user)

useEffect(() => {
  const fetchData = async () => {
    try {
      console.log(token);
      const response = await axios.get('http://localhost:3000/api/vehicletype/', {
        headers: {
          Authorization: `Bearer ${token}`
        },
        withCredentials: true
      });
      setVehicleType(response.data);
      const response2 = await axios.get('http://localhost:3000/api/transmission/', {
        headers: {
          Authorization: `Bearer ${token}`
        },
        withCredentials: true
      });
      setTransmission(response2.data);
      console.log(response2.data)

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


const handleSubmit = async(e) => {
  e.preventDefault();
  console.log("payload", payload);
  // Here you would typically handle the login logic, e.g., API call
  // try {
  //   const response = await axios.post('http://localhost:3000/api/vehicle/', payload, {withCredentials: true,  headers: {
  //     Authorization: `Bearer ${token.token}`
  //   },});
  //   console.log(response);
  // } catch (error) {
  //   console.error('There was an error loggin the user!', error);
  // }
};

  return (
    <>
    <Navbar/>
    <div className="penyewa-container">
      

      <div className="penyewa-card">
        <div className='penyewa-kiri'> 
        <h2><span>Data Kendaraan</span></h2>
        <p>Daftarkan Kendaraan Anda</p>
        <div className="input-group">
              <i className="fa fa-envelope"></i>
              <input
                type="text"
                name="name"
                placeholder="name"
                value={payload.name}
                required
                onChange={handleChange}
              />
            </div>
            <div className="input-group">
              <i className="fa fa-envelope"></i>
              <input
                type="text"
                name="description"
                placeholder="description"
                value={payload.description}
                required
                onChange={handleChange}
              />
            </div>
            <div className="input-group">
              <i className="fa fa-envelope"></i>
              <input
                type="number"
                name="price"
                placeholder="price"
                value={payload.price}
                required
                onChange={handleChange}
              />
            </div>
            <div className="input-group">
              
              <select
                name="vehicleTypeId"
                className='dropdown-car-type'
                // value={payload.transmission}
                required
                onChange={handleChange}
              >
                {vehicleType.map((type) => (
                  <option value={type._id}>{type.vehicleName}</option>
                )) 
                }
              </select>
            </div>
            
            
        </div>
        <div className="penyewa-form">
          <form onSubmit={handleSubmit}>
            <div className="input-image">    
            <select
                name="transmissionId"
                className='dropdown-car-type'
                // value={payload.TransmissionName}
                required
                onChange={handleChange}
              >
                {transmission.map((transmission) => (
                  <option value={transmission._id}>{transmission.transmissionName}</option>
                )) 
                }
              </select>
            </div>
            <div className="input-group">
              <i className="fa fa-lock"></i>
              <input
                type="text"
                name="yearManufacture"
                placeholder="Tahun Pembuatan"
                value={payload.yearManufacture}
                required
                onChange={handleChange}
              />
            </div>
            <div className="input-image">
            <p>Image</p>
              <input
                type="file"
                name="image"
                placeholder="Gambar Kendaraan"
                value={payload.image}
                required
                onChange={handleChange}
              />
            </div>
            

            <div>
            </div>
            <button className="button-penyewa" type="submit">Submit</button>
          </form>
          
        </div>
      </div>
    </div>
    </>
  );
}

export default Penyewa;
