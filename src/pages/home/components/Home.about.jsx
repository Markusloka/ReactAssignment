import "./style.about.css"
import ElementWhite from "../../../assets/about/EWlementWhite.svg"
import ArrowUpWhite from "../../../assets/about/ArrowUpRightwhite.svg"
import CeoImage from "../../../assets/about/ceoImage.svg"
import VideoIcon from "../../../assets/about/Videoicon.svg"


export function About(){

    return(    
    <div className="About">
    <div className="aboutLeft">
      <img className="ewElement" src={ElementWhite} />
      <img className="aboutImage" src={CeoImage} />
      <div className="aboutImageText">
        <h1 className="aboutImageTitle">
          Samantha Brown,
          <p className="aboutImageFounder">Founder</p>
        </h1>
        <p className="aboutImageSub">
          "Lorem ipsum dolor sit amet consectetur adipisicing elit."
        </p>
      </div>
    </div>
    <div className="aboutRight">
      <div className="aboutRightTop">
        <p className="aboutSub">About Company</p>
        <h1 className="aboutTitle">
          We Are Busniess Consulting & Credit Repair Experts
        </h1>
        <p className="aboutText">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam
          officiis quas assumenda esse obcaecati? Ex esse error voluptates
          iure vel totam eos.
          <br />
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis esse
          quasi incidunt adipisci accusantium libero provident voluptate amet.
        </p>
      </div>
      <div className="aboutButtons">
        <button className="aboutPrimary">
          Learn More <img src={ArrowUpWhite} />
        </button>
        <button className="aboutSec">
          <img src={VideoIcon} /> Intro video
        </button>
      </div>
    </div>
  </div>
  )
}