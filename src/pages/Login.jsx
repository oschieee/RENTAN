import React, {useContext, useState} from 'react';
import Logo from "../images/logo/logo.png";
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import { AuthContext } from '../AuthContext';
import { useDispatch } from 'react-redux';
import * as action from "../config/redux/auth/action"

const LoginPage = () => {

const navigate = useNavigate();
const dispatch = useDispatch()
  
const [payload, setPayload] = useState({
  email: '',
  password: '',
});

// const {setToken} = useContext(AuthContext);

const handleChange = (e) => {
  const { value, name } = e.target;
  setPayload({ ...payload, [name]: value });
};

const handleSubmit = async (e) => {
  e.preventDefault();
  try {
    console.log(payload);
    
    // Dispatch the login action
    const result = await dispatch(action.LoginAction({ email: payload.email, password: payload.password }));
    console.log("result", result);
    
    if (result.error) {
      // Handle the error case
      console.log(result.message);
      // Optionally show an error message to the user
    }
  } catch (error) {
    console.error('There was an error logging the user!', error);
    // Optionally show an error message to the user
  }
};


const handleClick = () => {
  navigate('/register');
};

  return (
    <div className="login-container">
      <div className="login-card">
        <div className="login-image">
          <img src={Logo} alt="Login" />
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
