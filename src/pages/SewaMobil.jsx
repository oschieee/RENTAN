import { useContext, useEffect } from "react";
import Navbar from "../components/Navbar";
import CarImg1 from "../images/cars-big/innova.jpg";
import axios from 'axios';
import { Link, useLocation , useNavigate} from "react-router-dom";
import { AuthContext } from "../AuthContext";

function SewaMobil() {

  const location = useLocation();
  const { data, pickUp, dropOff } = location.state || {};
  
const navigate = useNavigate();

const handleClick = (d) => {
  navigate('/sewamobil/detail', {state: {
    data: d,
    pickUp: pickUp,
    dropOff: dropOff
  }});
  window.scrollTo(0, 0);
};

  return (
    <>
    <Navbar/>
      <section className="models-section">
        <div className="container">
          <div className="models-div">
            {data.map((d) => (
              <div className="models-div__box">
                <div className="models-div__box__img">
                  {/* <img src={d.vehicleId.image} alt="car_img" /> */}
                  <img src={`http://localhost:3000/uploads/${d.vehicleId.image}`} alt="car_img" />
                  <div className="models-div__box__descr">
                    <div className="models-div__box__descr__name-price">
                      <div className="models-div__box__descr__name-price__name">
                        <p>{d.vehicleId.name}</p>
                        <span>
                          <i className="fa-solid fa-star"></i>
                          <i className="fa-solid fa-star"></i>
                          <i className="fa-solid fa-star"></i>
                          <i className="fa-solid fa-star"></i>
                          <i className="fa-solid fa-star"></i>
                        </span>
                      </div>
                      <div className="models-div__box__descr__name-price__price">
                        <h4>{d.vehicleId.price}</h4>
                        <p>per hari</p>
                      </div>
                    </div>
                    <div className="models-div__box__descr__name-price__details">
                      <span>
                        <i className="fa-solid fa-car-side"></i> &nbsp; {d.vehicleId.transmissionId.transmissionName} 
                      </span>
                      
                      <span>
                        <i className="fa-solid fa-car-side"></i> &nbsp; {d.vehicleId.vehicleTypeId.vehicleName}
                      </span>
                      <span style={{ textAlign: "center" }}>
                        {d.vehicleId.yearManufacture} &nbsp; <i className="fa-solid fa-car-side"></i>
                      </span>
                    </div>
                    
                    <button  className="models-div__box__descr__name-price__btn text-white" onClick={() => handleClick(d)}>
                      Pesan Sekarang
                    </button>
                   
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
       
      </section>
    </>
  );
}

export default SewaMobil;
