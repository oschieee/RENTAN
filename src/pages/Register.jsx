import React, { useState } from 'react';
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
    roleManagementId: '', // Add this if needed
  });

  const handleChange = (e) => {
    const { value, name } = e.target;
    setPayload({ ...payload, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      // console.log(payload)
      const response = await axios.post('http://localhost:3000/auth/register', payload, {withCredentials: true});
      console.log(response.data);
      navigate('/home');
    } catch (error) {
      console.error('There was an error registering the user!', error);
    }
  };

  const handleClick = () => {
    navigate('/');
  };

  return (
    <div className="login-container">
      <div className="login-card">
        <div className="login-image">
          <img src="" alt="Login" />
        </div>
        <div className="login-form">
          <h2><span>Register</span></h2>
          <p>Welcome! Register your account.</p>
          <form onSubmit={handleSubmit}>
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
            <div className="input-group">
              <i className="fa fa-id-badge"></i>
              <input
                type="text"
                name="roleManagementId"
                placeholder="Role Management ID"
                value={payload.roleManagementId}
                required
                onChange={handleChange}
              />
            </div>
            <button type="submit" className='button'>Register</button>
          </form>
          <button className='button-register'>
            <h6 onClick={handleClick}>
              Sudah punya akun?
            </h6>
          </button>
        </div>
      </div>
    </div>
  );
}

export default Register;
