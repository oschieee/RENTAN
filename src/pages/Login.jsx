import React, {useState} from 'react';
import { useNavigate } from 'react-router-dom';


const LoginPage = () => {

const navigate = useNavigate();
  
const [payload, setPayload] = useState({
  Email: '',
  Password: '',
});

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
                name="Email"
                placeholder="Email"
                value={payload.Email}
                required
                onChange={handleChange}
              />
            </div>
            <div className="input-group">
              <i className="fa fa-lock"></i>
              <input
                type="password"
                name="Password"
                placeholder="Password"
                value={payload.Password}
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
