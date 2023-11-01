import "./style.css";
import CritoLogo from "../../assets/hero/LogoCrito.svg";
import PhoneIcon from "../../assets/hero/Phone.svg";
import EmailIcon from "../../assets/hero/Email.svg";
import LocationIcon from "../../assets/hero/Location.svg";
import ArrowUp from "../../assets/hero/ArrowUp Right.svg";
import NavbarLinks from "./navLinks";
function Navbar() {
  return (
    <div className="navbar">
      <img src={CritoLogo} alt="Crito logo" width="137" height="57" />
      <div className="contactLinks">
        <div className="contactInfo">
          <div className="contacts">
            <img src={PhoneIcon} />
          </div>
          <div className="contacts">
            <img src={EmailIcon} />
          </div>
          <div className="contacts">
            <img src={LocationIcon} />
          </div>
        </div>
        <NavbarLinks />
      </div>
      <button className="loginButton">
        Login <img src={ArrowUp} />
      </button>
    </div>
  );
}

export default Navbar;
