import React from "react";
import ReactDOM from "react-dom";
import axios from "axios";

import "@/css/Battle.css";
import Card from "@/components/Card.jsx";

//比较结果展示
class BattleEnd extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      playerOne: {
        owner: {
          avatar_url: "",
        },
      },
      playerTwo: {
        owner: {
          avatar_url: "",
        },
      },
      winner: "",
    };
    this.resetTo = this.resetTo.bind(this);
    this.fetchGet = this.fetchGet.bind(this);
  }
  componentDidMount() {
    this.fetchGet();
  }
  fetchGet() {
    const lS_winner = localStorage.getItem("winner");
    const lS_playerOne = JSON.parse(localStorage.getItem("playerOne"));
    const lS_playerTwo = JSON.parse(localStorage.getItem("playerTwo"));
    location.href = "#/BattleEnd" + "?user1=" + lS_playerOne.name + "&user2=" + lS_playerTwo.name; 
    this.setState({
      winner: lS_winner,
      playerOne: lS_playerOne,
      playerTwo: lS_playerTwo,
    });
  }
  resetTo() {
    this.props.history.push({ pathname: "/Battle" });
  }
  render() {
    const { playerOne, playerTwo, winner } = this.state;
    const divCenterStyle = {
      textAlign: "center",
    };
    const battleCardStyle = {
      justifyContent: "space-around",
    };
    return (
      <div className="container_end">
        <div>
          <ul style={battleCardStyle} className="d-flex flex-wrap">
            <Card
              listNum={
                winner == playerOne.name
                  ? "Winner"
                  : winner == ""
                  ? "Draw"
                  : "Loser"
              }
              name={playerOne.name}
              avatar={playerOne.owner.avatar_url}
              starsCount={playerOne.stargazers_count}
              forksCount={playerOne.forks_count}
              openIssuesCount={playerOne.open_issues_count}
            ></Card>
            <Card
              listNum={
                winner == playerTwo.name
                  ? "Winner"
                  : winner == ""
                  ? "Draw"
                  : "Loser"
              }
              name={playerTwo.name}
              avatar={playerTwo.owner.avatar_url}
              starsCount={playerTwo.stargazers_count}
              forksCount={playerTwo.forks_count}
              openIssuesCount={playerTwo.open_issues_count}
            ></Card>
          </ul>
        </div>
        <div style={divCenterStyle}>
          <button onClick={this.resetTo} className="reget_btn">
            Reget
          </button>
        </div>
      </div>
    );
  }
}

export default BattleEnd;
