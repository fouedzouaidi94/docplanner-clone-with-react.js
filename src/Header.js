import React from "react";
//import "./App.css";
function NavBar(props) {
  let listhtml = [];
  listhtml = props.items.map(currentitem => (
    <li className="drop">
      <a href={currentitem.link}>{currentitem.title}</a>
      {!currentitem.drop ? null : (
        <ul className="dropdown">
          {currentitem.drop.map(el => (
            <li className="lis">
              <a href={el.link}>{el.title}</a>
            </li>
          ))}
        </ul>
      )}
    </li>
  ));
  return (
    <header>
      <div class="main-nav">
        <a href="#">
          <img
            className="logo-doc"
            src="https://www.docplanner.com/img/logo-default-group-en.svg?v=1"
            alt="logo"
          />
        </a>
        <ul className="nav">{listhtml}</ul>
      </div>
    </header>
  );
}
export default NavBar;
