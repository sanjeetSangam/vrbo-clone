import { useState } from "react";
import { Link } from "react-router-dom";
import "./navbar.css";

export const Navbar = () => {
  const [showLogin, setshowLogin] = useState(false);
  const [help, setHelp] = useState(false);

  return (
    <div className="navbar-home">
      <div className="logo-main">
        <Link to="/">
          {" "}
          <img
            src="https://csvcus.homeaway.com/rsrcs/cdn-logos/5.8.0/sitename/vrbo/web/logo.svg"
            alt=""
          />
        </Link>
      </div>
      <div className="menus">
        <div className="menu">
          <ion-icon name="heart-outline"></ion-icon>
          <a href="#">Trip Boards</a>
        </div>

        <div className="menu drop-down">
          <div
            className="list-menu"
            onClick={() => {
              setshowLogin(!showLogin);
              setHelp(false);
            }}
          >
            <ion-icon name="person-outline"></ion-icon>
            <p>Log in</p>
          </div>

          <div className={showLogin ? "drop login active" : "drop"}>
            <Link to="/login">Traveler Login</Link>
            <a href="#">Owner Login</a>
          </div>
        </div>

        <div className="menu">
          <ion-icon name="person-add-outline"></ion-icon>
          <Link to="/register">Sign up</Link>
        </div>

        <div className="menu drop-down">
          <div
            className="list-menu"
            onClick={() => {
              setHelp(!help);
              setshowLogin(false);
            }}
          >
            <ion-icon name="help-circle-outline"></ion-icon>
            <p>Help</p>
          </div>

          <div className={help ? "drop help active" : "drop"}>
            <a href="#">Traveler Help</a>
            <a href="#">Owner Help</a>
            <a href="#">Property Manager Help</a>
            <a href="#">Trust & Safety</a>
          </div>
        </div>

        <div className="menu">
          <a href="#">USD($)</a>
        </div>

        <div className="menu em">
          <img
            src="https://csvcus.homeaway.com/rsrcs-crs/baseline/5.16.0/images/flag/us.svg"
            alt=""
          />
          <a href="#">EM</a>
        </div>
      </div>

      <div className="prop">
        <p>List your Property</p>
      </div>
    </div>
  );
};
