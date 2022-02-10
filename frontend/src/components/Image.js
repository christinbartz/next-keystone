import React from "react"

function Image({ image, caption }) {
  return (
    <figure>
      <img src={image} alt="" />
      <figcaption>{caption}</figcaption>
    </figure>
  )
}

export default Image
