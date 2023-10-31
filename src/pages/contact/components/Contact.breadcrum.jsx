import "./style.breadcrum.css";
import Element from "../../../assets/services/Group1.png";
export function Breadcrum() {
  return (
    <div className="breadcrum">
      <div className="breadsubtext">
        <p>Home</p>
        <p>Contact</p>
      </div>
      <h1 className="breadTitle">Let's Connect</h1>

      <img className="breadElement" src={Element} />
    </div>
  );
}
