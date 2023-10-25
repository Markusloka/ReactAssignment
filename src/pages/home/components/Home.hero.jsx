import "./style.css";
import ArrowUp from "../../../assets/hero/ArrowUp Right.svg";
import TabletMan from "../../../assets/hero/Mantablet.svg";

function Hero() {
  return (
    <div className="hero">
      <div className="heroContent">
        <div className="rightSide">
          <h1 className="heroSlogan">We provide The Best business solutions</h1>
          <p className="heroText">
            Establish your vision and value proposition and turn into testable
            prototypes
          </p>
          <div className="buttons">
            <button className="mainHeroButton">
              Get Consulting <img src={ArrowUp} />
            </button>
            <button className="secHeroButton">
              Learn More <img src={ArrowUp} />
            </button>
          </div>
        </div>
        <div className="heroImage">
          <img
            src={TabletMan}
            alt="Man reading a tablet"
            width="500"
            height="600"
          />
        </div>
      </div>
    </div>
  );
}

export default Hero;
