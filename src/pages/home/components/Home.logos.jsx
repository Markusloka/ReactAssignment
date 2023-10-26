import "./style.logos.css";
import PaperzLogo from "../../../assets/logos/Paperz.svg";
import DorfusLogo from "../../../assets/logos/DorfusLogo.svg";
import MartinoLogo from "../../../assets/logos/MartinoLogo.svg";
import Squarelogo from "../../../assets/logos/squarelogo.svg";
import GobonaLogo from "../../../assets/logos/GobonaLogo.svg";

function Logos(){
return(
    <div className="logos">
      <img src={PaperzLogo} />
      <img src={DorfusLogo} />
      <img src= {MartinoLogo} />
      <img src= {Squarelogo} />
      <img src= {GobonaLogo} />
    </div>

)
}

export default Logos;