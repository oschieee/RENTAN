import React, {useState} from 'react';
import { useNavigate } from 'react-router-dom';
import CarImg1 from "../images/cars-big/innova.jpg";
import Navbar from '../components/Navbar';
import { Tab } from 'bootstrap';



const OrderDetail = () => {

const navigate = useNavigate();
  
const [payload, setPayload] = useState({
  CarName: 'Toyota Kijang Innova',
  Location: 'Jakarta',
  StartDate: 'Minggu,23 Juni 2024',
  EndDate: 'Senin, 24 Juni 2024',
});

const handleChange = (e) => {
  const { value, name } = e.target;
  
  setPayload({ ...payload, [name]: value });

  
};

  return (
    <>
    <Navbar/>
    <div className='detail-container'>
        <div className='detail-card'>
        <div className="car-detail-form">
          {/* <h2><span>Order Details</span></h2> */}
          <form >
            <div className="car-detail">
                <div className='car-detail-image'>
                <img src={CarImg1} alt="car-detail"/>
            </div>
                <div className='car-detail-text'>
                <   h2> {payload.CarName}</h2>
                    <div className='car-detail-details'>
                            <p>{payload.Location} | </p>
                            <p>{payload.StartDate} - </p>
                            <p>{payload.EndDate}</p>
                </div>
            </div>              
        </div>
        <div className='pickup-location'>
        <h2><span>Pickup Location</span></h2>
            <div className='pickup-location-text'>
                <p> Tanjung Duren Utara No. 12, 11430, Jakata Barat</p>
            </div>
        </div>
        <div className='pickup-location'>
        <h2><span>Dropoff Location</span></h2>
            <div className='pickup-location-text'>
                <p> Tanjung Duren Utara No. 12, 11430, Jakata Barat</p>
            </div>
        </div>
        <div className='totalPrice'>
        <h2><span>Total Price</span></h2>
        <div className='box-abu'>
            <div className='totalPrice-left'>
                <p>
                    Total Basic Rental : 
                </p>
                <p>
                    Admin Fee (50%) :
                </p>
                <h6>
                    Total Price :
                </h6>
            </div>
            <div className='totalPrice-right'>
            <p>
                    Rp. 700.000 
                </p>
                <p>
                    Rp. 70.000
                </p>
                <h6>
                    Rp. 770.000
                </h6>
            </div>
            
        </div>
        
        </div>
            
            
          </form>
          
        </div>
        
        </div>
        <div className='payment-card'>
                <div className='payment-detail-form'>
                        <h2><span>Payment Method</span></h2>
                        <div className='payment-flex'>
                        <div className='payment-box'>
                            <div className='payment-options'>
                            <input type="radio" id="bca" name="payment" value="BCA" />
                            <label htmlFor="bca">
                            {/* <img src="bca-logo-url" alt="BCA Logo" className="logo" /> */}
                            <span>BCA VIRTUAL ACCOUNT</span>
                            </label>
                            </div>
                        </div>
                        <div className='payment-box'>
                            <div className='payment-options'>
                            <input type="radio" id="bca" name="payment" value="BNI" />
                            <label htmlFor="bni">
                            {/* <img src="bca-logo-url" alt="BCA Logo" className="logo" /> */}
                            <span>BNI VIRTUAL ACCOUNT</span>
                            </label>
                            </div>
                        </div>
                        </div>
                        <div className='payment-flex'>
                        <div className='payment-box'>
                            <div className='payment-options'>
                            <input type="radio" id="bca" name="payment" value="BCA" />
                            <label htmlFor="bca">
                            {/* <img src="bca-logo-url" alt="BCA Logo" className="logo" /> */}
                            <span>BCA VIRTUAL ACCOUNT</span>
                            </label>
                            </div>
                        </div>
                        <div className='payment-box'>
                            <div className='payment-options'>
                            <input type="radio" id="bca" name="payment" value="BNI" />
                            <label htmlFor="bni">
                            {/* <img src="bca-logo-url" alt="BCA Logo" className="logo" /> */}
                            <span>BNI VIRTUAL ACCOUNT</span>
                            </label>
                            </div>
                        </div>
                        </div>
                        
                        
                </div>
            </div>
    </div>
    </>
  );
}

export default OrderDetail;
