import React from "react";
import "@/css/Load.css";

class Load extends React.Component {
  constructor(props) {
    super(props);
  }

  render () {
      return (
          <div className="load d-flex flex-wrap flex-row">
              <div className="load_img"></div>
              <div className="load_img"></div>
              <div className="load_img"></div>
              <div className="load_img"></div>
              <div className="load_img"></div>
              <div className="load_img"></div>
              <div className="load_img"></div>
              <div className="load_img"></div>
              <div className="load_img"></div>
              <div className="load_img2"></div>
          </div>
      )
  }
}

export default Load;
