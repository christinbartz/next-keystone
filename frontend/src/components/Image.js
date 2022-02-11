import React from "react";

function Image({ src, caption }) {
  return (
    <figure className="image">
      <img className="image_img" src={src} alt={caption} />
      <figcaption className="image_caption">{caption}</figcaption>
    </figure>
  );
}

export default Image;
