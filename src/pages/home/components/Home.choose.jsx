import "./style.choose.css";
import ChooseImage from "../../../assets/chooseus/chooseUSimage.svg";
import HeadAi from "../../../assets/chooseus/headAi.svg";
import Pen from "../../../assets/chooseus/pen.svg";
import Pentagon from "../../../assets/chooseus/pentagon.svg";
import ThumbsUp from "../../../assets/chooseus/thumbsUp.svg";
export function Choose() {
  return (
    <div className="Choose">
      <div className="chooseLeft">
        <div className="chooseText">
          <p className="chooseUsSub">Why Choose Us</p>
          <h1 className="chooseUsTitle">
            Why We Are The Best Busniess Consulting Agency
          </h1>
        </div>
        <div className="chooseReasons">
          <div className="reasons">
            <img src={ThumbsUp} />
            <div className="reasonsText">
              <h1 className="reasonsTitle">Process Excellence</h1>
              <p className="reasonsSub">
                Lorem, ipsum dolor sit amet consectetur.
              </p>
            </div>
          </div>
          <div className="reasons">
            <img src={Pentagon} />
            <div className="reasonsText">
              <h1 className="reasonsTitle">Strategic Planning</h1>
              <p className="reasonsSub">
                Lorem, ipsum dolor sit amet consectetur.
              </p>
            </div>
          </div>
          <div className="reasons">
            <img src={Pen} />
            <div className="reasonsText">
              <h1 className="reasonsTitle">Experience Design</h1>
              <p className="reasonsSub">
                Lorem, ipsum dolor sit amet consectetur.
              </p>
            </div>
          </div>
          <div className="reasons">
            <img src={HeadAi} />
            <div className="reasonsText">
              <h1 className="reasonsTitle">Artificial Inteligence</h1>
              <p className="reasonsSub">
                Lorem, ipsum dolor sit amet consectetur.
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="chooseRight">
        <img className="chooseImage" src={ChooseImage} />
        <div className="behindImg"></div>
      </div>
    </div>
  );
}
