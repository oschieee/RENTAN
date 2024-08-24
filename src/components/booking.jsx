import axios from "axios";
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

function Booking() {
  const [modal, setModal] = useState(false); 
  const navigate = useNavigate();

  // booking car
  const [carType, setCarType] = useState("");
  const [pickUp, setPickUp] = useState("");
  const [dropOff, setDropOff] = useState("");
  const [pickTime, setPickTime] = useState("");
  const [dropTime, setDropTime] = useState("");
  const [carImg, setCarImg] = useState("");

  console.log("select filter", carType, pickTime, dropTime);

  
  const openModal = (e) => {
    e.preventDefault();
    const errorMsg = document.querySelector(".error-message");
    if (
      pickUp === "" ||
      dropOff === "" ||
      pickTime === "" ||
      dropTime === "" ||
      carType === ""
    ) {
      errorMsg.style.display = "flex";
    } else {
      setModal(!modal);
      const modalDiv = document.querySelector(".booking-modal");
      modalDiv.scroll(0, 0);
      errorMsg.style.display = "none";
    }
  };

 
  useEffect(() => {
    if (modal === true) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
  }, [modal]);

  const {token} = useSelector((state) => state.Auth.user)
  const [data, setData] = useState([])


  const handleSubmit = async(e) => {
    e.preventDefault();
    try {
      console.log(token);
      const requirements = {
        status: 'Available',
        pickUp: pickTime,
        dropOff: dropTime,
        vehicleType: carType,
        location: dropOff
      };

      console.log("req", requirements);
      
      const response = await axios.post('http://localhost:3000/api/rental_filter', {
        requirements: requirements
      }, {
        headers: {
          Authorization: `Bearer ${token}`
        },
        withCredentials: true
      });
      setData(response.data)
      console.log(response.data);
      navigate('/sewamobil', {state: 
        {
          data: response.data,
          pickUp: pickTime,
          dropOff: dropTime
        }});
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  }

  const formatDateForDisplay = (isoString) => {
    if (!isoString) return "";
    const date = new Date(isoString);
    const year = date.getFullYear();
    const month = String(date.getMonth() + 1).padStart(2, '0');
    const day = String(date.getDate()).padStart(2, '0');
    return `${year}-${month}-${day}`;
  };

  console.log("data rental", data);
  

  
  const confirmBooking = (e) => {
    e.preventDefault();
    setModal(!modal);
    const doneMsg = document.querySelector(".booking-done");
    doneMsg.style.display = "flex";
  };

 
  const handleCar = (e) => {
    setCarType(e.target.value);
    setCarImg(e.target.value);
  };

  const handlePick = (e) => {
    setPickUp(e.target.value);
  };

  const handleDrop = (e) => {
    setDropOff(e.target.value);
  };

  const formatForInput = (isoString) => {
    if (!isoString) return "";
    const date = new Date(isoString);
    return date.toISOString().slice(0, 16);
  };

  // Converts input value to ISO string
  const parseToISO = (inputValue) => {
    const date = new Date(inputValue);
    return isNaN(date.getTime()) ? "" : date.toISOString();
  };

  const handlePickTime = (e) => {
    const isoString = parseToISO(e.target.value);
    setPickTime(isoString);
  };

  const handleDropTime = (e) => {
    const isoString = parseToISO(e.target.value);
    setDropTime(isoString);
  };

  const hideMessage = () => {
    const doneMsg = document.querySelector(".booking-done");
    doneMsg.style.display = "none";
  };

  return (
    <>
      <section id="booking-section" className="book-section">
        {/* overlay */}
        <div
          onClick={openModal}
          className={`modal-overlay ${modal ? "active-modal" : ""}`}
        ></div>

        <div className="container">
          <div className="book-content">
            <div className="book-content__box">
              <h2>Book a car</h2>

              <p className="error-message">
                All fields required! <i className="fa-solid fa-xmark"></i>
              </p>

              <p className="booking-done">
                Check your email to confirm an order.{" "}
                <i onClick={hideMessage} className="fa-solid fa-xmark"></i>
              </p>

              <form className="box-form">
                <div className="box-form__car-type">
                  <label>
                    <i className="fa-solid fa-car"></i> &nbsp; Pilih Kendaraan <b>*</b>
                  </label>
                  <select value={carType} onChange={handleCar}>
                    <option>Pilih Kendaraan</option>
                    <option value="Mobil">Mobil</option>
                    <option value="Motor">Motor</option>
                    <option value="Bus">Bus</option>
                  </select>
                </div>

                <div className="box-form__car-type">
                  <label>
                    <i className="fa-solid fa-location-dot"></i> &nbsp; Pengemudi{" "}
                    <b>*</b>
                  </label>
                  <select value={pickUp} onChange={handlePick}>
                    <option>Pilih Pengemudi</option>
                    <option>Dengan Supir</option>
                    <option>Tanpa Supir</option>
                  </select>
                </div>

                <div className="box-form__car-type">
                  <label>
                    <i className="fa-solid fa-location-dot"></i> &nbsp; Lokasi{" "}
                    <b>*</b>
                  </label>
                  <select value={dropOff} onChange={handleDrop}>
                    <option>Lokasi</option>
                    <option>Jakarta</option>
                    <option>Bali</option>
                    <option>Bandung</option>
                    <option>Jogjakarta</option>
                    <option>Malang</option>
                  </select>
                </div>

                <div className="box-form__car-time">
                  <label htmlFor="picktime">
                    <i className="fa-regular fa-calendar-days "></i> &nbsp;
                    Pick-up <b>*</b>
                  </label>
                  <input
                    id="picktime"
                    value={formatDateForDisplay(pickTime)}
                    onChange={handlePickTime}
                    type="date"
                  ></input>
                </div>

                <div className="box-form__car-time">
                  <label htmlFor="droptime">
                    <i className="fa-regular fa-calendar-days "></i> &nbsp;
                    Drop-of <b>*</b>
                  </label>
                  <input
                    id="droptime"
                    value={formatDateForDisplay(dropTime)}
                    onChange={handleDropTime}
                    type="date"
                  ></input>
                </div>

                <button onClick={handleSubmit} type="submit">
                  Search
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Booking;
