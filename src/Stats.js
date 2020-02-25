import React from "react";
//import "./App.css";

function Stats(props) {
  return (
    <div className="stats">
      <div className="stats-section">
        <div className="stats-title">
          <h1>
            The world's
            <br />
            biggest healthcare platform
          </h1>
          <p>
            We work from 6 offices all over the world, bringing Docplanner Group
            to life in almost 20 countries.
          </p>
        </div>
        <div className="stats-content">
          {props.stats.map(e => (
            <div className={e.identity}>
              <img src={e.imageSource} alt="" />
              <h3>{e.title}</h3>
              <p>{e.text}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
export default Stats;
