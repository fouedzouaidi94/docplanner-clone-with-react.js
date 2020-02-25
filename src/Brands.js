import React from "react";
//import "./App.css";

function Brands(props) {
  return (
    <div className="brand-section">
      <h1>
        We are a global company <br />
        with local culture
      </h1>
      <ul className="brand-liste">
        {props.brands.map(e => (
          <li>
            <a href="#">
              <svg
                className="brand-logo"
                xmlns="http://www.w3.org/2000/svg"
                width="200"
                height="32"
                viewBox="0 0 200 32"
              >
                <path d={e.path}></path>
              </svg>
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Brands;
