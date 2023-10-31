export function Card(props) {
  return (
    <div className="cardBody">
      <div className="rightSide">
        <img className="Icon" src={props.img} />
      </div>
      <div className="leftSide">
        <h1 className="cardTitle">{props.title}</h1>
        <p className="cardSub">{props.sub1}</p>
        <p className="cardSub">{props.sub2}</p>
      </div>
    </div>
  );
}
