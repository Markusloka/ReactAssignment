import "./style.service.css";
import ArrowCard from "../../../assets/services/arrowCard.svg";
import ArrowCardWhite from "../../../assets/services/arrowCardWhite.svg";
import SmallLine from "../../../assets/services/smallLine.svg";
import ElementService from "../../../assets/services/ElementServices.svg";
export function Services() {
  return (
    <div className="service">
      <div className="serviceText">
        <p className="serviceSubText">Our Services</p>
        <h1 className="serviceTitle">
          We Provide The Best Service For Consulting
        </h1>
      </div>
      <div className="serviceCards">
        <div className="servicesCardWhite">
          <img className="serviceCardLine" src={SmallLine} />
          <h1 className="serviceCardTitle">Business Advice</h1>
          <p className="serviceCardText">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Officiis
            in nam possimus.
          </p>
          <button className="serviceCardButton">
            <img src={ArrowCardWhite} />
          </button>
        </div>
        <div className="servicesCardOrange">
          <img className="serviceCardLine" src={SmallLine} />
          <h1 className="serviceCardTitle">Startup Business</h1>
          <p className="serviceCardText">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Officiis
            in nam possimus.
          </p>
          <button className="serviceCardButtonOrange">
            <img className="serviceCardArrow" src={ArrowCard} />
          </button>
        </div>
        <div className="servicesCardWhite">
          <img className="serviceCardLine" src={SmallLine} />
          <h1 className="serviceCardTitle">Financial Advice</h1>
          <p className="serviceCardText">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Officiis
            in nam possimus.
          </p>
          <button className="serviceCardButton">
            <img src={ArrowCardWhite} />
          </button>
        </div>
        <div className="servicesCardWhite">
          <img className="serviceCardLine" src={SmallLine} />
          <h1 className="serviceCardTitle">Risk Management</h1>
          <p className="serviceCardText">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Officiis
            in nam possimus.
          </p>
          <button className="serviceCardButton">
            <img src={ArrowCardWhite} />
          </button>
        </div>
      </div>
      <button className="serviceButton">
        Browse Services <img src={ArrowCard} />
      </button>
      <img className="elementServices" src={ElementService} />
    </div>
  );
}
