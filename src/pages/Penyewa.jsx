import React, {useContext, useEffect, useState} from 'react';
import { useNavigate } from 'react-router-dom';
import Navbar from '../components/Navbar';
import axios from 'axios';
import { AuthContext } from '../AuthContext';
import { useSelector } from 'react-redux';

const Penyewa = () => {

const navigate = useNavigate();
  

const [vehicleType, setVehicleType] = useState([]);
const [transmission, setTransmission] = useState([]);


const [payload, setPayload] = useState({
  name:'',
  image: null,
  price:'',
  description: '',
  yearManufacture: '',
  vehicleTypeId: '',  
  transmissionId: '',  
  location: ''
});



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
      setPayload({ ...payload, ["vehicleTypeId"]: response?.data[0]._id });
      const response2 = await axios.get('http://localhost:3000/api/transmission/', {
        headers: {
          Authorization: `Bearer ${token}`
        },
        withCredentials: true
      });
      setTransmission(response2.data);
      setPayload({ ...payload, ["transmissionId"]: response2?.data[0]._id });
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

console.log("payload", payload);


const handleChange = (e) => {
  const { name, value, type, files } = e.target;

  if (type === 'file') {
    setPayload({
      ...payload,
      [name]: files[0], // Set the File object
    });
  } else {
    setPayload({
      ...payload,
      [name]: value,
    });
  }
};


const handleSubmit = async (e) => {
  e.preventDefault();
  console.log("payload", payload);

  const formData = new FormData();

  formData.append('name', payload.name);
  formData.append('price', payload.price);
  formData.append('description', payload.description);
  formData.append('yearManufacture', payload.yearManufacture);
  formData.append('vehicleTypeId', payload.vehicleTypeId);
  formData.append('transmissionId', payload.transmissionId);
  formData.append('location', payload.location);
  formData.append('image', payload.image); // Ensure payload.image is a File object

  try {
    const response = await axios.post('http://localhost:3000/api/vehicle', formData, {
      withCredentials: true,
      headers: {
        Authorization: `Bearer ${token}`,
        'Content-Type': 'multipart/form-data',
      },
    });
    console.log(response);
    alert("Successfully Created!");
    navigate('/dashboardpenyewa')
  } catch (error) {
    console.error('There was an error submitting the form!', error);
  }
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
              placeholder="Name"
              value={payload.name || ''}
              required
              onChange={handleChange}
            />
          </div>
          <div className="input-group">
            <i className="fa fa-envelope"></i>
            <input
              type="text"
              name="description"
              placeholder="Description"
              value={payload.description || ''}
              required
              onChange={handleChange}
            />
          </div>
          <div className="input-group">
            <i className="fa fa-envelope"></i>
            <input
              type="number"
              name="price"
              placeholder="Price"
              value={payload.price || ''}
              required
              onChange={handleChange}
            />
          </div>
          <div className="input-group">
            <select
              name="vehicleTypeId"
              className='dropdown-car-type'
              value={payload.vehicleTypeId || ''}
              required
              onChange={handleChange}
            >
              {vehicleType.map((type) => (
                <option key={type._id} value={type._id}>{type.vehicleName}</option>
              ))}
            </select>
          </div>
        </div>
        <div className="penyewa-form">
          <form onSubmit={handleSubmit}>
            <div className="input-image">    
              <select
                name="transmissionId"
                className='dropdown-car-type'
                value={payload.transmissionId || ''}
                required
                onChange={handleChange}
              >
                {transmission.map((transmission) => (
                  <option key={transmission._id} value={transmission._id}>{transmission.transmissionName}</option>
                ))}
              </select>
            </div>
            <div className="input-group">
              <i className="fa fa-lock"></i>
              <input
                type="text"
                name="yearManufacture"
                placeholder="Tahun Pembuatan"
                value={payload.yearManufacture || ''}
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
                required
                onChange={handleChange}
              />
            </div>
            <div className="input-image">
              <label>
                <i className="fa-solid fa-location-dot"></i> &nbsp; Lokasi{" "}
                <b>*</b>
              </label>
              <select value={payload.location} onChange={handleChange} name='location'>
                <option>Lokasi</option>
                <option>DKI Jakarta</option>
                <option>Bali</option>
                <option>Bandung</option>
                <option>Jogjakarta</option>
                <option>Malang</option>
              </select>
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
