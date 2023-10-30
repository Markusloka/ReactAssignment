import "./style.news.css";
import ArrowUp from "../../../assets/hero/ArrowUp Right.svg";
export function News() {
  return (
    <div className="Newspaper">
      <h1 className="newsPaperText">Get News Updates By Signup</h1>
      <div className="newsPaperRight">
        <form className="emailForm">
          <input
            type="text"
            id="emailForms"
            name="fname"
            placeholder="username@domain.com"
            style="border: 0"
            width="100%"
          />
        </form>
        <button className="buttonForm">
          Subscribe <img src={ArrowUp} />
        </button>
      </div>
    </div>
  );
}
