import { Link, NavLink } from "react-router-dom";
import { useAuth } from "../../AuthContext.js";
import logo from "../../assets/logo.png";
import logoR from "../../assets/logo_R.png";
import robuxIcon from "../../assets/icons2/robux.png";
import menuIcon from "../../assets/icons2/menu.png";

export default function Topbar() {
  const { loggedIn } = useAuth();

  return (
    <div id="topbar">
      <div id="left">
        <div id="brand">
          <Link id="logo" to="/">
            <picture>
              <source media="(max-width: 1300px)" srcSet={logoR} />
              <img id="logoimg" src={logo} alt="Logo" />
            </picture>
        </Link>
        </div>
        <nav id="tabs">
          <NavLink className="tab-btn" to="/games" end>Games</NavLink>
          <NavLink className="tab-btn" to="/catalog" end>Catalog</NavLink>
          <NavLink className="tab-btn" to="/develop" end>Develop</NavLink>
          <NavLink className="tab-btn" to="/upgrades/robux" end>ROBUX</NavLink>
        </nav>
      </div>
      <div id="search">
        <input id="SearchInput" placeholder="Search" />
        <button id="Searchbtn"></button>
      </div>
      <div id="right">
        {loggedIn ? (
          <>
            <Link className="r-btn robux" to="/upgrades/robux">
              <img
                id="robuxicon"
                src={robuxIcon}
                alt="R$"
              />
              <span id="robuxtext">1234</span>
            </Link>

            <button className="r-btn">
              <img
                id="settingsicon"
                src={menuIcon}
                alt="R$"
              />
            </button>
          </>
        ) : (
          <>
            <Link className="r-btn" to="/account/login">Log in</Link>
            <Link className="r-btn" to="/account/signup">Sign up</Link>
          </>
        )}
      </div>
    </div>
  );
}
