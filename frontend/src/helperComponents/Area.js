import React from "react"
import ItemToComponent from "./ItemToComponent"

function Area({ items }) {
  const content = items.map(item => {
    return <ItemToComponent template={item.template} {...item} />
  })
  return content
}

export default Area
