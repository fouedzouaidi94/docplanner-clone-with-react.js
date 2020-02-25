import React from "react";
//import "./App.css";
function Card(props) {
  return (
    <div className="section-2">
      {props.card.map(e => (
        <div className={e.identity}>
          <small>{e.title}</small>
          <h2>{e.text}</h2>
          {!e.select ? null : (
            <select className="patient-option">
              {e.select.map((el, i) => (
                <option value>{el}</option>
              ))}
            </select>
          )}
          <img className={e.photoClass} src={e.photo} alt="imageCard"></img>
        </div>
      ))}
    </div>
  );
}
export default Card;
