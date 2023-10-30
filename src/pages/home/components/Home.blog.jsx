import "./style.blog.css";
import ArrowUp from "../../../assets/hero/ArrowUp Right.svg";
import Dot from "../../../assets/blog/dot.png";
import EventOne from "../../../assets/blog/EventOne.png";
import EventTwo from "../../../assets/blog/EventTwo.png";
import EventThree from "../../../assets/blog/EventThree.png";

export function Blog() {
  return (
    <div className="Blog">
      <div className="blogContent">
        <div className="blogTop">
          <div className="blogTopText">
            <p className="blogTopSub">Article & News</p>
            <h1 className="blogtopTitle">Get Every Single Articles & News</h1>
          </div>
          <button className="blogButton">
            Browse Articles <img src={ArrowUp} />
          </button>
        </div>

        <div className="blogItems">
          <div className="blogItem">
            <img src={EventOne} />
            <p className="blogSub">Busniess</p>
            <h1 className="blogTitle">
              How To Use Digitalization In The classNameroom
            </h1>
            <p className="blogText">
              Lorem, ipsum dolor sit amet consectetur adipisicing elit.
              Architecto sed hic libero.
            </p>
          </div>
          <div className="blogItem2">
            <img src={EventTwo} />
            <p className="blogSub">Busniess</p>
            <h1 className="blogTitle">
              How To Implement Chat GPT In Your Projects
            </h1>
            <p className="blogText">
              Lorem, ipsum dolor sit amet consectetur adipisicing elit.
              Architecto sed hic libero.
            </p>
          </div>
          <div className="blogItem3">
            <img src={EventThree} />
            <p className="blogSub">Busniess</p>
            <h1 className="blogTitle">
              The Guide To Support Modern CSS Design
            </h1>
            <p className="blogText">
              Lorem, ipsum dolor sit amet consectetur adipisicing elit.
              Architecto sed hic libero.
            </p>
          </div>
        </div>
        <img className="blogDot" src={Dot} />
      </div>
    </div>
  );
}
