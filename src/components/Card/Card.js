import React from "react";
import "./Card.css";
//import share from "../../assets/share2.png";
//import ytube from '../../assets/images/youtube1.png';
class card extends React.Component {
  //if(props.infoSource==="Youtube.com")
  ///btn=<img src={ytube} className="youtube" alt="yt"/>
  handleShare(passedProps) {
    navigator.share({
      title: passedProps.title,
      text: passedProps.title,
      url: passedProps.url
    });
  }
  render() {
    let cardClasses = "Card";
    let btn;
    if (this.props.src === null) {
      cardClasses = "Card small";
    }
    console.log("published at-->  " + this.props.publishedAt);

    return (
      <div className={cardClasses}>
        <div className="Font_Title">
          {this.props.title} {btn}
        </div>
        <div className="Font_Author">{this.props.author}</div>
        {this.props.src !== null ? (
          <a href={this.props.url}>
            <img className="imageClass" src={this.props.src} alt="pic" />
          </a>
        ) : null}
        <div className="Font_Description">{this.props.description}</div>
        {/* <div className="div1">
          <img
            src={share}
            className="shareClass"
            alt="pic"
            onClick={() => this.handleShare(this.props)}
          />
          {this.props.publishedAt}
        </div> */}
      </div>
    );
  }
}
export default card;
