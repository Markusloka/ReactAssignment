import "./style.breadcrum.css";
import Element from "../../../assets/services/Group1.png";
export function Breadcrum() {
  return (
    <div className="breadcrum">
      <div className="breadsubtext">
        <p>Home</p>
        <p>News</p>
      </div>
      <h1 className="breadTitle">News & Articles</h1>

      <img className="breadElement" src={Element} />
    </div>
  );
}
