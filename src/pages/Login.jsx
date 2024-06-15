import React from 'react';
import { useNavigate } from 'react-router-dom';


const LoginPage = () => {

const navigate = useNavigate();
  const handleButtonClick = () => {
    navigate('/home');
  };
  return (
    <div className="login-container">
      <div className="login-card">
        <div className="login-image">
          <img src="" alt="Login" />
        </div>
        <div className="login-form">
          <h2>We are <span>Login</span></h2>
          <p>Welcome back! Log in to your account.</p>
          <form>
            <div className="input-group">
              <i className="fa fa-envelope"></i>
              <input type="email" placeholder="Email" required />
            </div>
            <div className="input-group">
              <i className="fa fa-lock"></i>
              <input type="password" placeholder="Password" required />
            </div>
            <button onClick={handleButtonClick} type="submit">Log in</button>
          </form>
          
        </div>
      </div>
    </div>
  );
}

export default LoginPage;
