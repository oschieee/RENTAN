import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

const Register = () => {
  const navigate = useNavigate();
  
  const [payload, setPayload] = useState({
    username: '',
    name: '',
    password: '',
    email: '',
    address: '',
    phoneNumber: '',
    roleManagementId: '',
    SIM:'',
    KTP:'',
  });

  console.log("role id", payload.roleManagementId);

  const [userType, setUserType] = useState("");
 
  const [roleOptions, setRoleOptions] = useState([]);
  const handleChange = (e) => {
    const { value, name } = e.target;
    setPayload({ ...payload, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      console.log(payload)
      const response = await axios.post('https://rentan-be.vercel.app/auth/register', payload, {withCredentials: true});
      console.log(response.data);
      console.log("ini response",response);
      navigate('/');
    } catch (error) {
      console.error('There was an error registering the user!', error);
    }
  };
  
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get('https://rentan-be.vercel.app/api/rolemanagement/');
        console.log(response.data);
        
        setRoleOptions(response.data);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };
    
    fetchData();
  }, []);

  const handleClick = () => {
    navigate('/');
  };
  console.log(payload.roleManagementId);

  return (
    <div className="login-container">
      <div className="login-card">
        <div className="login-form">
        <h2><span>Register</span></h2>
        <p>Welcome! Register your account.</p>
        <form onSubmit={handleSubmit}>
        <div className="input-group">
              <select 
               name="roleManagementId" 
               value={payload.roleManagementId} 
               onChange={handleChange}
               required
               >
                  <option value="">Pilih Tipe User</option>
                    {roleOptions.map(role => (
                      <option key={role._id} value={role._id}>
                        {role.name}
                  </option>))}
                  </select>
            </div>
            <div className="input-group">
              <i className="fa fa-envelope"></i>
              <input
                type="email"
                name="email"
                placeholder="Email"
                value={payload.email}
                required
                onChange={handleChange}
              />
            </div>
            <div className="input-group">
              <i className="fa fa-lock"></i>
              <input
                type="password"
                name="password"
                placeholder="Password"
                value={payload.password}
                required
                onChange={handleChange}
              />
            </div>
            <div className="input-group">
              <i className="fa fa-user"></i>
              <input
                type="text"
                name="name"
                placeholder="Nama"
                value={payload.name}
                required
                onChange={handleChange}
              />
            </div>
            <div className="input-group">
              <input
                type="tel"
                name="phoneNumber"
                placeholder="Phone"
                value={payload.phoneNumber}
                required
                onChange={handleChange}
              />
            </div>
            <div className="input-group">
              <i className="fa fa-lock"></i>
              <input
                type="text"
                name="address"
                placeholder="Address"
                value={payload.address}
                required
                onChange={handleChange}
              />
            </div>
            <div className="input-group">
              <i className="fa fa-user"></i>
              <input
                type="text"
                name="username"
                placeholder="Username"
                value={payload.username}
                required
                onChange={handleChange}
              />
            </div>
            
            <button type="submit" className='button-login'>Register</button>
                
            
          </form>
          <button className='button-register'>
            <h6 onClick={handleClick}>
              Sudah punya akun?
            </h6>
          </button>
        </div>
        <div className="login-kiri">
          
        {payload.roleManagementId === '1' && (
          <form onSubmit={handleSubmit}>
            <div className="input-image">
            <p>SIM</p>
              <input
                type="file"
                name="SIM"
                placeholder="SIM"
                value={payload.SIM}
                required
                onChange={handleChange}
              />
            </div>
            <div className="input-image">
              <p>KTP</p>
              <input
                type="file"
                name="KTP"
                placeholder="KTP"
                value={payload.KTP}
                required
                onChange={handleChange}
              />
            </div>
          </form>
        )}
        </div>
      </div>
    </div>
  );
}

export default Register;
