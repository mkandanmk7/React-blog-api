import React from "react";
import "./about.css";

import Rename from "./Rename.jpg";
// console.log(Rename);
export const AboutMe = () => {
  return (
    <div className="container-fluid first">
      <div className="row">
        <div className="col-6 col-sm-6 col-md-6 col-lg-12 text-center">
          <h1 className="text-start">
            <span>
              <img className="profile" src={Rename} alt="profile" />
            </span>
          </h1>
        </div>
      </div>
      <div className="row">
        <div className="col-12 col-sm-12 col-md-12 col-lg-12 text-center pt-2 mt-2">
          <h3 className="text-start">
            Name:
            <span className="text-info" style={{ color: "black" }}>
              Muthu
            </span>
          </h3>
          <h3 className="text-start">
            Education: <span className="text-info">BE CSE</span>
          </h3>
          <h3 className="text-start">
            Current:{" "}
            <span className="text-info">Full stack web developer !</span>
          </h3>
        </div>
      </div>
    </div>
  );
};
