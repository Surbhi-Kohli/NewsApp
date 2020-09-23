import React from "react";
import Card from "../Card/Card";

const article = props => (
  <Card
    url={props.url}
    title={props.title}
    author={props.author}
    src={props.src}
    description={props.description}
    infoSource={props.infoSource}
    publishedAt={props.publishedAt}
  />
);

export default article;
