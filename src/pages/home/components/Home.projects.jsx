import "./style.projects.css";
import Books from "../../../assets/projects/books.png";
import Busniess from "../../../assets/projects/busniess.png";
import Line from "../../../assets/projects/LineProjects.png";
import Notes from "../../../assets/projects/notes.png";
import Stats from "../../../assets/projects/stats.png";
import ArrowUpWhite from "../../../assets/about/ArrowUpRightwhite.svg";
import ArrowUp from "../../../assets/hero/ArrowUp Right.svg";

export function Projects() {
  return (
    <div className="Projects">
      <div className="projectsText">
        <p className="projectsSub">Project & Case Studies</p>
        <h1 className="projectsTitle">Let's Looks Our Global Projects</h1>
      </div>
      <div className="projectsCluster">
        <div className="Project">
          <div className="div1">
            <img src={Busniess} />
            <h1 className="projectName">Grow your business</h1>
            <img src={Line} className="projectLine" />
            <button className="projectsButton">
              Read More <img src={ArrowUp} />
            </button>
          </div>
          <div className="div2">
            <img src={Books} />
            <h1 className="projectName">
              Why your clients needs a responsive website
            </h1>
            <img src={Line} className="projectLine" />
            <button className="projectsButton">
              Read More <img src={ArrowUp} />
            </button>
          </div>
          <div className="div3">
            <img src={Notes} />
            <h1 className="projectName">
              Educate your employees to get better results
            </h1>
            <img src={Line} className="projectLine" />
            <button className="projectsButton">
              Read More <img src={ArrowUp} />
            </button>
          </div>
          <div className="div4">
            <img src={Stats} />
            <h1 className="projectName">
              Busniess Insights is a important piece of your busniess
            </h1>
            <img src={Line} className="projectLine" />
            <button className="projectsButton">
              Read More <img src={ArrowUp} />
            </button>
          </div>
        </div>
      </div>
      <button className="projectButton">
        All Recent Projects <img src={ArrowUpWhite} />
      </button>
    </div>
  );
}
