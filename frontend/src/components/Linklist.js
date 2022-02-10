import React from "react"
import Area from "../helperComponents/Area"

function Linklist({ title, links }) {
  return (
    <div>
      <h1>{title}</h1>
      <Area items={links} />
    </div>
  )
}

export default Linklist
