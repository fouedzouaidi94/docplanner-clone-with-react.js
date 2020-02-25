import React from "react";
//import "./App.css";
function Offices(props) {
  return (
    <div className="offices-section">
      <h1>Improve the lives of millions. Change yours forever</h1>
      <p>
        More than 1000 team mates share our same vision, goals and passion. With
        offices in Warsaw, Barcelona, Istanbul, Rome, Mexico City and Curitiba,
        our search for great talent never stops.
      </p>
      <div className="offices">
        {props.offices.map(e => (
          <div className="office">
            <a href="#">
              <img srcset={e.imageSource} alt="" />
              <div className="offices-btn">
                <p>{e.place}</p>
                <button>SEE OPENINGS</button>
              </div>
            </a>
          </div>
        ))}
      </div>
    </div>
  );
}
export default Offices;
