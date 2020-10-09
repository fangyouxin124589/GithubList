import React from "react";
import ReactDOM from "react-dom";
import { HashRouter as Router, Switch, Route, Link } from "react-router-dom";
import Header from "@/components/Header.jsx";
import Content from "@/components/Content.jsx";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = { nowpages: "Popular" };
  }

  pagesClick = (pages) => {
    this.setState({ nowpages: pages });
  };

  render() {
    const { nowpages } = this.state;
    return (
      <div className="App">
        <Router>
          <Header
            pagesClick={this.pagesClick}
            nowpages={nowpages}
          ></Header>
          <Content nowpages={nowpages}></Content>
        </Router>
      </div>
    );
  }
}

export default App;
