import React from "react";
import Headline from "../components/Headline";
import Image from "../components/Image";
import Area from "../helperComponents/Area";

function Article({ title, text, imagesrc, imageCaption, content }) {
  return (
    <div>
      <Headline>{title}</Headline>
      <Image src={imagesrc} caption={imageCaption}></Image>
      <p>{text}</p>
      <Area items={content}></Area>
    </div>
  );
}

export default Article;
