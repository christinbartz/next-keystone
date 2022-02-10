import React from "react"

function Teaser({ title, image, text, linktext, link }) {
  return (
    <section>
      <h3>{title}</h3>
      <img src={image} alt="" />
      <p>{text}</p>
      <a href={link}>{linktext}</a>
    </section>
  )
}

export default Teaser
