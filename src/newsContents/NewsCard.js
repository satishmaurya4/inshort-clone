import React from "react";
import { useThemeProviderValue } from "../context/ThemeContext";
import "./NewsCard.css";

const NewsCard = ({ newsItem }) => {
  const {
    author,
    content,
    description,
    publishedAt,
    title,
    url,
    urlToImage,
    source,
  } = newsItem;
  const fullDate = new Date(publishedAt);
  let date = fullDate.toString().split(" ");
  const hour = parseInt(date[4].substring(0, 2));
  const time = hour > 12 ? true : false;

  const { isLight } = useThemeProviderValue();

  return (
    <div className="news-card" style={!isLight ? {boxShadow: '0 2px 5px #fff'} : {boxShadow:'0 2px 5px rgba(0,0,0,0.4)'}}>
      <img
        className="news-image"
        alt={title}
        src={urlToImage ? urlToImage : "https://source.uplash.com/random"}
      />
      <div className="news-text">
        <div>
          <span className="title">{title}</span>
          <br />
          <span className="author">
            <a href={url} target="_blank">
              <strong>short</strong>
            </a>{" "}
            <span className="muted">
              {" "}
              by {author ? author : "unknown"}/{" "}
              {time
                ? `${hour - 12}:${date[4].substring(3, 5)}PM`
                : `${hour}:${date[4].substring(3, 5)}AM`}{" "}
              on {date[2]} {date[1]} {date[0]}
            </span>
          </span>
        </div>
        <div className="lower-news-text">
          <div className="description">{description}</div>
          <span className="readmore">
            read more at {" "}
            <a href={url} target="_blank" className="source" style={!isLight ?{color:'#383838'} : {color:'#000'}}>
              {source.name}
            </a>
          </span>
        </div>
      </div>
    </div>
  );
};

export default NewsCard;
