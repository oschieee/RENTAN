import React, {useState} from 'react';
import { useNavigate } from 'react-router-dom';



const Register = () => {

const navigate = useNavigate();
  
const [payload, setPayload] = useState({
  Email: '',
  Password: '',
  Phone: '+62',
  Address: '',
});

const handleChange = (e) => {
  const { value, name } = e.target;
  
  setPayload({ ...payload, [name]: value });

  
};

const handleSubmit = (e) => {
  e.preventDefault();
  console.log(payload);
  navigate('/home');
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
          <p>Welcome ! Register your account.</p>
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
            
            <button type="submit" className='button'>Register</button>
          </form>
          <button className='button-register' >
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
