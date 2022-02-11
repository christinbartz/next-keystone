import React from "react";

function Teaser({ title, imagesrc, text, linkText, linkUrl }) {
  return (
    <div className="box">
      <h3>{title}</h3>
      <img className="image_img" src={imagesrc} alt="" />
      <p>{text}</p>
      <a href={linkUrl}>{linkText}</a>
    </div>
  );
}

export default Teaser;
