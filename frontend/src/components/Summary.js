import React from "react"

function Summary({ title, content }) {
  return (
    <div>
      <h3>{title}</h3>
      <p>{content}</p>
    </div>
  )
}

export default Summary
