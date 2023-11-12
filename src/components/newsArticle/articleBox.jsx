import { useEffect } from "react";
import "./style.articleBox.css";
import { useState } from "react";

export function Articles() {
  const [articles, setArticles] = useState([]);
  useEffect(() => {
    const interval = setInterval(() => {
      getArticles();
      console.log("getting articles...");
    }, 10000);
    return () => clearInterval(interval);
  }, []);

  const getArticles = async () => {
    const result = await fetch("https://win23-assignment.azurewebsites.net");
    setArticles(await result.json()), [];
  };

  return (
    <div>
      {articles.map((article) => (
        <div className="blogItem" key={article.id}>
          <img src={article.img} />
          <p className="blogSub">{article.Sub}</p>
          <h1 className="blogTitle"> {article.title}</h1>
          <p className="blogText">{article.Text}</p>
        </div>
      ))}
    </div>
  );
}
