import React from "react";
import { CmsComponents } from "../cmsComponents";

function ItemToComponent(props) {
  const Component = CmsComponents[props.template];

  return Component ? (
    <Component {...props} />
  ) : (
    <pre>{JSON.stringify(props, null, 2)}</pre>
  );
}

export default ItemToComponent;
