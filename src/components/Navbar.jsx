import { Link } from "react-router-dom";
import Logo from "../images/logo/logo.png";
import { useState } from "react";

function Navbar() {
  const [nav, setNav] = useState(false);

  const openNav = () => {
    setNav(!nav);
  };

  return (
    <>
      <nav>
        <div class="navbar">
          <div className="navbar__img">
            <Link to="/" onClick={() => window.scrollTo(0, 0)}>
              <img src={Logo} alt="logo-img" />
            </Link>
          </div>
          <ul className="navbar__links">
            <li>
              <Link className="home-link" to="/">
                Beranda
              </Link>
            </li>
            <li>
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
            </li>
            <li>
              {" "}
              <Link className="longterm-link" to="/jangkapanjang">
                Sewa Jangka Panjang
              </Link>
            </li>
            <li>
              {" "}
              <Link className="penyewa-link" to="/penyewa">
                Penyewa
              </Link>
            </li>
          </ul>
          <div className="navbar__buttons">
            <Link className="navbar__buttons__sign-in" to="/">
              Sign In
            </Link>
            <Link className="navbar__buttons__register" to="/">
              Register
            </Link>
          </div>

          {/* mobile */}
          <div className="mobile-hamb" onClick={openNav}>
            <i className="fa-solid fa-bars"></i>
          </div>
        </div>
      </nav>
    </>
  );
}

export default Navbar;
