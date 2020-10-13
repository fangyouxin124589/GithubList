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
  async fetchGet() {
    // console.log(this.props);
    let obj = {};
    if (window.location.href.includes("?")) {
      let arr = window.location.href.split("?")[1].split("&");
      for (let i = 0; i < arr.length; i++) {
        let res = arr[i].split("=");
        obj[res[0]] = res[1];
      }
    }
    const { user1, user2 } = obj;
    const urlOne = `https://api.github.com/search/repositories?q=${user1}in:name&sort=stars&order=desc&type=Repositories&per_page=1`;
    const urlTwo = `https://api.github.com/search/repositories?q=${user2}in:name&sort=stars&order=desc&type=Repositories&per_page=1`;
    const resOne = await axios.get(urlOne);
    const resTwo = await axios.get(urlTwo);
    const playerOne = resOne.data.items[0];
    const playerTwo = resTwo.data.items[0];
    let winner = "";
    if (playerOne.stargazers_count > playerTwo.stargazers_count) {
      winner = playerOne.name;
    } else if (playerOne.stargazers_count < playerTwo.stargazers_count) {
      winner = playerTwo.name;
    }
    this.setState({
      winner,
      playerOne,
      playerTwo,
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
                winner === playerOne.name
                  ? "Winner"
                  : winner === ""
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
                winner === playerTwo.name
                  ? "Winner"
                  : winner === ""
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
