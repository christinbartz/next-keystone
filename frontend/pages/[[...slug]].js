import fs from "fs";
import React from "react";
import ItemToComponent from "../src/helperComponents/ItemToComponent";

function CmsPage(props) {
  return <ItemToComponent template={props.template} {...props} />;
}

export async function getStaticProps(context) {
  const data = JSON.parse(fs.readFileSync("test-content.json", "utf-8"));
  const path = context.params.slug ? "/" + context.params.slug.join("/") : "/";

  const props = data.find(item => item.path === path);
  return {
    props,
  };
}

export async function getStaticPaths() {
  const pages = JSON.parse(
    fs.readFileSync("test-content.json", { encoding: "utf8" })
  );
  return {
    paths: pages.map(page => {
      return {
        params: {
          slug: page.path === "/" ? false : page.path.substring(1).split("/"),
        },
      };
    }),
    fallback: false,
  };
}

export default CmsPage;
