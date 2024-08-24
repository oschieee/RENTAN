import { Link } from "react-router-dom";
import Logo from "../images/logo/logo.png";
import { useState } from "react";
import { useSelector } from "react-redux";
import ProfileButton from "./Logout";

function Navbar() {
  const [nav, setNav] = useState(false);
  const {token, role_id} = useSelector((state) => state.Auth.user)
  
  
  const openNav = () => {
    setNav(!nav);
  };

  return (
    <>
      <nav>
        <div className="navbar">
        {role_id === "penyewa" ? (
  <div className="navbar__img">
    <Link to="/dashboardpenyewa" onClick={() => window.scrollTo(0, 0)}>
      <img src={Logo} alt="logo-img" />
    </Link>
  </div>
) : role_id === "admin" ? (
  <div className="navbar__img">
    <Link to="/admin" onClick={() => window.scrollTo(0, 0)}>
      <img src={Logo} alt="logo-img" />
    </Link>
  </div>
) : (
  <div className="navbar__img">
    <Link to="/home" onClick={() => window.scrollTo(0, 0)}>
      <img src={Logo} alt="logo-img" />
    </Link>
  </div>
)}

          
          <ul className="navbar__links">
            {/* {role_id=="penyewa"?(
              <li>
              <Link className="home-link" to="/dashboardpenyewa">
                Beranda
              </Link>
            </li>
            ):(
              <li>
              <Link className="home-link" to="/home">
                Beranda
              </Link>
            </li>
            )} */}
            {/* <li>
              {" "}
              <Link className="about-link" to="/tentangkami">
                Tentang Kami
              </Link>
            </li>
            <li>
              {" "}
              <Link className="contact-link" to="/kontak">
                Kontak
              </Link>
            </li> */}
            {role_id=="penyewa" ?(
              <li>
              {" "}
              <Link className="penyewa-link" to="/penyewa">
                Penyewa
              </Link>
            </li> 
            ) : (
              <div></div>
            )}
            
          </ul>
          {!token ? (
            <>
              <div className="navbar__buttons">
                <Link className="navbar__buttons__sign-in" to="/">
                  Sign In
                </Link>
                <Link className="navbar__buttons__register" to="/register">
                  Register
                </Link>
              </div>

              {/* mobile */}
              <div className="mobile-hamb" onClick={openNav}>
                <i className="fa-solid fa-bars"></i>
              </div>
            </>
          ) : (
            <ProfileButton/>
            
          
          )}
        </div>
      </nav>
    </>
  );
}

export default Navbar;
