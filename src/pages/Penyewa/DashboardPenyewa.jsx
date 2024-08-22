import { useContext, useEffect, useState } from "react";
import Navbar from "../../components/Navbar";
import CarImg1 from "../../images/cars-big/innova.jpg";
import axios from 'axios';

import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
// import { AuthContext } from "../../AuthContext";




function DashboardPenyewa() {

// const { token } = useContext(AuthContext);
const {token} = useSelector((state) => state.Auth.user)
const [data, setData] = useState([])

useEffect(() => {
  const fetchData = async () => {
    try {
      console.log(token);
      const response = await axios.get('http://localhost:3000/api/vehicle', {
        headers: {
          Authorization: `Bearer ${token}`
        },
        withCredentials: true
      });
      setData(response.data)
      console.log(response.data);
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };

  if (token) {
    fetchData();
  }
}, [token]);

console.log("data", data);


  return (
    <>
    <Navbar/>
      <section className="models-section">
        
        <div className="container">
            <div className="my-vehicles">
                <h2><span>
                    My Vehicles
                </span></h2>
            </div>
          <div className="models-div">
          {data.map((d) => (
            <div className="models-div__box">
              <div className="models-div__box__img">
                <img src={d.image} alt="car_img" />
                <div className="models-div__box__descr">
                  <div className="models-div__box__descr__name-price">
                    <div className="models-div__box__descr__name-price__name">
                      <p>{d?.name}</p>
                    </div>
                    <div className="models-div__box__descr__name-price__price">
                      <h4>{d?.price}</h4>
                      <p>per hari</p>
                    </div>
                  </div>
                  <div className="models-div__box__descr__name-price__details">
                    <span>
                      <i className="fa-solid fa-car-side"></i> &nbsp; Toyota
                    </span>
                    <span style={{ textAlign: "right" }}>
                      {d.transmissionId.transmissionId} &nbsp; <i className="fa-solid fa-car-side"></i>
                    </span>
                    <span style={{ textAlign: "right" }}>
                      {d.vehicleTypeId.vehicleName} &nbsp; <i className="fa-solid fa-car-side"></i>
                    </span>
                    <span>
                      <i className="fa-solid fa-car-side"></i> &nbsp; Matic
                    </span>
                    <span style={{ textAlign: "right" }}>
                      {d.yearManufacture} &nbsp; <i className="fa-solid fa-car-side"></i>
                    </span>
                  </div>
                  <div className="button-edit-dashboard">
                    <Link  to={`/edit/vehicle/${d._id}`}>
                      Edit
                    </Link>
                  </div>
                </div>
              </div>
            </div>
              )) 
              }
           
          </div>
        </div>
       
      </section>
    </>
  );
}

export default DashboardPenyewa;
