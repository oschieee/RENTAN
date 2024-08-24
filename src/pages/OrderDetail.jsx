import React, {useState} from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import CarImg1 from "../images/cars-big/innova.jpg";
import Navbar from '../components/Navbar';
import { useSelector } from 'react-redux';
import axios from 'axios';

const OrderDetail = () => {
const {token} = useSelector((state) => state.Auth.user)
const navigate = useNavigate();
const location = useLocation();
const { data, pickUp, dropOff } = location.state || {};

console.log("data order", data);

const calculateDaysBetweenDates = () => {
    // Convert startDate and endDate to Date objects
    const start = new Date(pickUp);
    const end = new Date(dropOff);
  
    // Calculate the difference in milliseconds
    const differenceInMillis = end - start;
  
    // Convert milliseconds to days (1 day = 24 hours * 60 minutes * 60 seconds * 1000 milliseconds)
    const differenceInDays = differenceInMillis / (1000 * 60 * 60 * 24);
  
    return Math.round(differenceInDays); // Round to the nearest whole number
};

const [payload, setPayload] = useState({
    CarName: data.vehicleId.name,
    Location: data.vehicleId.location,
    StartDate: data.pickUp,
    EndDate: data.dropOff,
    payment: ''
});


const handlePlaceOrder = async() => {
    const payload_sent = {
        rentalId: data._id,
        total: calculateDaysBetweenDates()*data.vehicleId.price,
        method: payload.payment,
        pickUp: pickUp,
        dropOff: dropOff
    }
    console.log("payload", payload_sent);
    
    try {
        console.log(token);
        const response = await axios.post('http://localhost:3000/api/transaction', { payload_sent },{
            headers: {
                Authorization: `Bearer ${token}`
            },
            withCredentials: true,
        });
        console.log(response.data);
        navigate("/payment");
    } catch (error) {
        console.error('Error fetching data:', error);
    }
};

// const handleChange = (e) => {
//   const { value, name } = e.target;
//   setPayload({ ...payload, [name]: value });
// };

const handleChange = (event) => {
    setPayload({
        ...payload,
        payment: event.target.value
    });
    console.log('Selected payment method:', event.target.value);
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
                {/* <img src={`../${data.vehicleId.image}`} alt="car-detail"/> */}
                <img src={`http://localhost:3000/uploads/${data.vehicleId.image}`} alt="car_img" />
            </div>
                <div className='car-detail-text'>
                <h2> {data.vehicleId.name}</h2>
                    <div className='car-detail-details'>
                            <p>{data.vehicleId.location} | </p>
                            <p> {new Date(pickUp).toISOString().split('T')[0]} -  </p>
                            <p> {new Date(dropOff).toISOString().split('T')[0]}</p>
                </div>
            </div>              
        </div>
        <div className='pickup-location'>
        <h2><span>Pickup Location</span></h2>
            <div className='pickup-location-text'>
                <p> {data.vehicleId.location}</p>
            </div>
        </div>
        <div className='pickup-location'>
        <h2><span>Dropoff Location</span></h2>
            <div className='pickup-location-text'>
                <p> {data.vehicleId.location}</p>
            </div>
        </div>
        <div className='totalPrice'>
        <h2><span>Total Price</span></h2>
        <div className='box-abu'>
            <div className='totalPrice-left'>
                <p>
                    Total Basic Rental : 
                </p>
                <h6>
                    Total Price :
                </h6>
            </div>
            <div className='totalPrice-right'>
            <p>
            Rp. {data.vehicleId.price}
                </p>
                <h6>
                Rp. {data.vehicleId.price}
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
                            <input type="radio" id="bca" name="payment" value="BCA" onChange={handleChange}/>
                            <label htmlFor="bca">
                            {/* <img src="bca-logo-url" alt="BCA Logo" className="logo" /> */}
                            <span>BCA VIRTUAL ACCOUNT</span>
                            </label>
                            </div>
                        </div>
                        <div className='payment-box'>
                            <div className='payment-options'>
                            <input type="radio" id="bca" name="payment" value="BNI" onChange={handleChange}/>
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
                            <input type="radio" id="bca" name="payment" value="BCA" onChange={handleChange}/>
                            <label htmlFor="bca">
                            {/* <img src="bca-logo-url" alt="BCA Logo" className="logo" /> */}
                            <span>BCA VIRTUAL ACCOUNT</span>
                            </label>
                            </div>
                        </div>
                        <div className='payment-box'>
                            <div className='payment-options'>
                            <input type="radio" id="bca" name="payment" value="BNI" onChange={handleChange}/>
                            <label htmlFor="bni">
                            {/* <img src="bca-logo-url" alt="BCA Logo" className="logo" /> */}
                            <span>BNI VIRTUAL ACCOUNT</span>
                            </label>
                            </div>
                        </div>
                        </div>
                        <button onClick={handlePlaceOrder} className='button-order'>Place Order</button>
                </div>
        </div>
    </div>
    </>
  );
}

export default OrderDetail;
