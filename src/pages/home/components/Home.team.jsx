import "./style.team.css";
import AmandaProfile from "../../../assets/team/Amanda.png";
import CassandraProfile from "../../../assets/team/Cassandra.png";
import JackProfile from "../../../assets/team/Jack.png";
import KimberlyProfile from "../../../assets/team/Kimberly.png";
import JustinProfile from "../../../assets/team/Justin.png";
import KristineProfile from "../../../assets/team/Kristine.png";
import MarkProfile from "../../../assets/team/Mark.png";
import Star from "../../../assets/team/Star.png";
import ArrowUp from "../../../assets/hero/ArrowUp Right.svg";
import ArrowUpWhite from "../../../assets/about/ArrowUpRightwhite.svg";

export function Team() {
  return (
    <div className="Team">
      <div className="textButton">
        <div className="teamText">
          <p className="teamSub">Meet Our Team</p>
          <h1 className="teamTitle">Experience Team Members</h1>
        </div>
        <button className="teamButton">
          Browse Team <img src={ArrowUp} />
        </button>
      </div>
      <div className="teamMembers">
        <div className="member1">
          <img src={KristineProfile} />
          <h3 className="memberName">Kristine Palmer</h3>
          <p className="memberPosition">Cheif Operation Officer</p>
        </div>
        <div className="member2">
          <img src={MarkProfile} />
          <h3 className="memberName">Mark Aubri</h3>
          <p className="memberPosition">Senior Consultant</p>
        </div>
        <div className="member3">
          <img src={KimberlyProfile} />
          <h3 className="memberName">Kimberly Hansen</h3>
          <p className="memberPosition">Senior Consultant</p>
        </div>
        <div className="member4">
          <img src={JustinProfile} />
          <h3 className="memberName">Justin Willoman</h3>
          <p className="memberPosition">Senior Tech Consultant</p>
        </div>
      </div>

      <div className="Testimonial">
        <div className="testimonialText">
          <p className="testimonialSub">Testimonial</p>
          <h1 className="testimonialTitle">What Our Client Says</h1>
        </div>
        <div className="testimonials">
          <div className="testimonial1">
            <img src={Star} />
            <p className="reviewSub">
              "Lorem ipsum dolor, sit amet consectetur adipisicing elit.
              Laudantium libero, ad dignissimos velit qui, dolorum obcaecati cum
              saepe nesciunt nemo eligendi numquam voluptate"
            </p>
            <div className="reviewProfile">
              <img src={CassandraProfile} />
              <div className="reviewText">
                <h1 className="reviewName">Cassandra Warren</h1>
                <p className="reviewTitle">Business Manager, Dorfus</p>
              </div>
            </div>
          </div>
          <div className="testimonial2">
            <img src={Star} />
            <p className="reviewSub">
              "Lorem ipsum dolor, sit amet consectetur adipisicing elit.
              Laudantium libero, ad dignissimos velit qui, dolorum obcaecati cum
              saepe nesciunt nemo eligendi numquam voluptate"
            </p>
            <div className="reviewProfile">
              <img src={AmandaProfile} />
              <div className="reviewText">
                <h1 className="reviewName">Amanda Tulling</h1>
                <p className="reviewTitle">Senior Developer, Square</p>
              </div>
            </div>
          </div>
          <div className="testimonial3">
            <img src={Star} />
            <p className="reviewSub">
              "Lorem ipsum dolor, sit amet consectetur adipisicing elit.
              Laudantium libero, ad dignissimos velit qui, dolorum obcaecati cum
              saepe nesciunt nemo eligendi numquam voluptate"
            </p>
            <div className="reviewProfile">
              <img src={JackProfile} />
              <div className="reviewText">
                <h1 className="reviewName">Jack McDogglas</h1>
                <p className="reviewTitle">Key Account Manager, Gobona</p>
              </div>
            </div>
          </div>
        </div>
        <button className="testimonailButton">
          All Reviews <img src={ArrowUpWhite} />
        </button>
      </div>
    </div>
  );
}
