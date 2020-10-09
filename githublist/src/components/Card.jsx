import React from "react";
import "@/css/Card.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faUser,
  faStar,
  faShareAlt,
  faExclamation,
} from "@fortawesome/free-solid-svg-icons";

class Card extends React.Component {
  constructor(props) {
    super(props);
  }

  openNewPage = () => {
    window.open(this.props.htmlUrl);
  };

  render() {
    const {
      listNum,
      avatar,
      name,
      starsCount,
      forksCount,
      openIssuesCount,
    } = this.props;

    const itemDetStyle = {
      margin: "0 auto",
    };

    const listUserIcon = {
      color: "orange",
      width: "20px",
    };

    const listStarIcon = {
      color: "yellow",
      width: "20px",
    };

    const listForkIcon = {
      color: "skyblue",
      width: "20px",
    };

    const listIssueIcon = {
      color: "pink",
      width: "20px",
    };

    return (
      <div className="github-list d-flex flex-column" onClick={this.openNewPage}>
        <span className="listNumber">#{listNum}</span>
        <img src={avatar} alt="" className="listAvatar" />
        <p className="listName">{name}</p>
        <div style={itemDetStyle}>
          <div style={{ marginBottom: "5px" }}>
            <FontAwesomeIcon style={listUserIcon} icon={faUser} />
            <span style={{ fontWeight: "bold"}}> {name}</span>
          </div>
          <div style={{ marginBottom: "5px" }}>
            <FontAwesomeIcon style={listStarIcon} icon={faStar} />
            <span>{starsCount} stars</span>
          </div>
          <div style={{ marginBottom: "5px" }}>
            <FontAwesomeIcon style={listForkIcon} icon={faShareAlt} />
            <span>{forksCount} forks</span>
          </div>
          <div>
            <FontAwesomeIcon style={listIssueIcon} icon={faExclamation} />
            <span>{openIssuesCount} open issues</span>
          </div>
        </div>
      </div>
    );
  }
}

export default Card;
