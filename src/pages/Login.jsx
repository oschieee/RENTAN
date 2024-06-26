import React, {useContext, useState} from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import { AuthContext } from '../AuthContext';

const LoginPage = () => {

const navigate = useNavigate();
  
const [payload, setPayload] = useState({
  email: '',
  password: '',
});

const {setToken} = useContext(AuthContext);

const handleChange = (e) => {
  const { value, name } = e.target;
  setPayload({ ...payload, [name]: value });
};

const handleSubmit = async (e) => {
  e.preventDefault();
  // Here you would typically handle the login logic, e.g., API call
  // console.log(payload);
  try {
    // console.log(payload)
    const response = await axios.post('http://localhost:3000/auth/login', payload, {withCredentials: true});
    setToken(response.data);
    console.log(response.data);
    navigate('/home');
    console.log(response.data);
  } catch (error) {
    console.error('There was an error loggin the user!', error);
  }
  
};
console.log(payload);

const handleClick = () => {
  navigate('/register');
};

  return (
    <div className="login-container">
      <div className="login-card">
        <div className="login-image">
          <img src="" alt="Login" />
        </div>
        <div className="penyewa-form">
          <h2><span>Login</span></h2>
          <p>Welcome back! Log in to your account.</p>
          <form onSubmit={handleSubmit}>
            <div className="input-group">
              <i className="fa fa-envelope"></i>
              <input
                type="email"
                name="email"
                placeholder="email"
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
                placeholder="password"
                value={payload.password}
                required
                onChange={handleChange}
              />
            </div>
            <button type="submit" className='button-login'>Log in</button>
          </form>
          <button className='button-register' >
              <h6 onClick={handleClick}>
                belum punya akun?
              </h6>
          </button>
        </div>
      </div>
    </div>
  );
}

export default LoginPage;
