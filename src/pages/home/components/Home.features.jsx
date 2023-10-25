import "./style.css"
import BoxGear from "../../../assets/features/boxgear.svg"
import HandShake from "../../../assets/features/handshake.svg"
import Idea from "../../../assets/features/idea.svg"
import RisingStock from "../../../assets/features/risingstock.svg"
import ArrowUp from "../../../assets/hero/ArrowUp Right.svg"



function Features(){
    return (
        <div className="features">
        <div className="featureLeft">
          <p className="featureSub">Features</p>
          <h1 className="featureTitle">
            Our Accounting is trusted by thousands of companies
          </h1>
          <button className="featureMainButton">
            Learn More <img src={ArrowUp} />
          </button>
        </div>
        <div className="featureRight">
          <div className="featureRightTop">
            <div className="feature">
              <img src={HandShake} />
              <h1 className="featuresTitle">Busniess Advice</h1>
              <p className="featuresSub">
                Lorem ipsum, dolor sit amet consectetur adipiscing elit.
              </p>
            </div>
            <div className="feature">
              <img src={Idea} />
              <h1 className="featuresTitle">Startup Busniess</h1>
              <p className="featuresSub">
                Lorem ipsum, dolor sit amet consectetur adipiscing elit.
              </p>
            </div>
          </div>
          <div className="featureRightBottom">
            <div className="feature">
              <img src={RisingStock} />
              <h1 className="featuresTitle">Financial Advice</h1>
              <p className="featuresSub">
                Lorem ipsum, dolor sit amet consectetur adipiscing elit.
              </p>
            </div>
            <div className="feature">
              <img src={BoxGear} />
              <h1 className="featuresTitle">Risk Managment</h1>
              <p className="featuresSub">
                Lorem ipsum, dolor sit amet consectetur adipiscing elit.
              </p>
            </div>
          </div>
        </div>
      </div>
    )
}

export default Features;