import React, {useState} from 'react';
import { useNavigate } from 'react-router-dom';
import CarImg1 from "../images/cars-big/innova.jpg";
import Navbar from '../components/Navbar';

const MyBooking = () => {

const navigate = useNavigate();
const handlePlaceOrder = () => {
    navigate("/payment");
};
  
const [payload, setPayload] = useState({
  CarName: 'Toyota Kijang Innova',
  Location: 'Jakarta',
  StartDate: 'Minggu,23 Juni 2024',
  EndDate: 'Senin, 24 Juni 2024',
  Status: 'Accepted',
});

const handleChange = (e) => {
  const { value, name } = e.target;
  
  setPayload({ ...payload, [name]: value });

  
};

  return (
    <>
    <Navbar/>
    <div className='detail-booking-container'>
        <div className='detail-booking-card'>
        <div className="car-detail-booking-form">
          {/* <h2><span>Order Details</span></h2> */}
          <form >
            <div className="car-detail">
                <div className='car-detail-booking-image'>
                <img src={CarImg1} alt="car-detail"/>
            </div>
                <div className='car-detail-booking-text'>
                <   h2> {payload.CarName}</h2>
                    <div className='car-detail-booking-details'>
                            <p>{payload.Location} | </p>
                            <p>{payload.StartDate} - </p>
                            <p>{payload.EndDate}</p>
                            
                </div>
                <p className='accepted'>{payload.Status}</p>
            </div>              
        </div>
       
       
          </form>
        </div>
        </div>
        
    </div>
    </>
  );
}

export default MyBooking;
