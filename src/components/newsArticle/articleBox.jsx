import "./style.articleBox.css";
export function NewsArticle(props) {
  return (
    <div className="blogItems">
      <div className="blogItem">
        <img src={props.img} />
        <p className="blogSub">{props.Sub}</p>
        <h1 className="blogTitle"> {props.Title}</h1>
        <p className="blogText">{props.Text}</p>
      </div>
    </div>
  );
}
