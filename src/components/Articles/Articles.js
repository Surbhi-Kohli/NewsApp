import React, { Component } from "react";
//import axios from "axios";
import styles from  "./Articles.module.css";
import Article from "../Article/Article";

class Articles extends Component {
  renderAlbums = () => {
    console.log("renderAlbums called");
    console.log(this.props.blog);
    return this.props.blog.map((art, i) => {
      return (
        <Article
          title={art.title}
          author={art.author}
          key={i}
          src={art.urlToImage}
          description={art.description}
          infoSource={art.source.name}
        />
      );
    });
  };

  render() {
    console.log("in render of articles.js");
    return <div className={styles.gridResp}>{this.renderAlbums()}</div>;
  }
}
export default Articles;
