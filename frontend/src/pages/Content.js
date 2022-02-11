import React from "react";
import Area from "../helperComponents/Area";

function Content({ content }) {
  return (
    <div className="content">
      <Area items={content}></Area>
    </div>
  );
}

export default Content;
