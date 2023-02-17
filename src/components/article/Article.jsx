import React from "react";
import "./article.css";

const Article = (props) => {
  return (
    <div className="gpt3__blog-container_article">
      <div className="gpt3__blog-container_article-image">
        <img src={props.imageUrl} alt="blog"></img>
      </div>
      <div className="gpt3__blog-container_article-content"></div>
    </div>
  );
};

export default Article;
