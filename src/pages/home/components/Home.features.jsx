import "./style.css"
import BoxGear from "../../../assets/features/boxgear.svg"
import HandShake from "../../../assets/features/handshake.svg"
import Idea from "../../../assets/features/idea.svg"
import RisingStock from "../../../assets/features/risingstock.svg"
import ArrowUp from "../../../assets/hero/ArrowUp Right.svg"



function Features(){
    return (
        <div class="features">
        <div class="featureLeft">
          <p class="featureSub">Features</p>
          <h1 class="featureTitle">
            Our Accounting is trusted by thousands of companies
          </h1>
          <button class="featureMainButton">
            Learn More <img src={ArrowUp} />
          </button>
        </div>
        <div class="featureRight">
          <div class="featureRightTop">
            <div class="feature">
              <img src={HandShake} />
              <h1 class="featuresTitle">Busniess Advice</h1>
              <p class="featuresSub">
                Lorem ipsum, dolor sit amet consectetur adipiscing elit.
              </p>
            </div>
            <div class="feature">
              <img src={Idea} />
              <h1 class="featuresTitle">Startup Busniess</h1>
              <p class="featuresSub">
                Lorem ipsum, dolor sit amet consectetur adipiscing elit.
              </p>
            </div>
          </div>
          <div class="featureRightBottom">
            <div class="feature">
              <img src={RisingStock} />
              <h1 class="featuresTitle">Financial Advice</h1>
              <p class="featuresSub">
                Lorem ipsum, dolor sit amet consectetur adipiscing elit.
              </p>
            </div>
            <div class="feature">
              <img src={BoxGear} />
              <h1 class="featuresTitle">Risk Managment</h1>
              <p class="featuresSub">
                Lorem ipsum, dolor sit amet consectetur adipiscing elit.
              </p>
            </div>
          </div>
        </div>
      </div>
    )
}

export default Features;