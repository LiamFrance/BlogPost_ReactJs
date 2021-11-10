import { useEffect } from "react";
import "../../css/Header.css";
import { Link } from "react-router-dom";
import logo from "../../images/logo.png";
const Header = ({ title, searchText, setSearchText }) => {
  useEffect(() => {
    var search_input = document.querySelector(".Header__search--input");
    var search_icon = document.querySelector(".Header__search--icon");
    var search_load = document.querySelector(".Header__search--searching");
    var search_warning = document.querySelector(".Header__warning");
    search_icon.addEventListener("click", function () {
      let value = search_input.value.trim();
      // console.log(value.length);
      if (value.length === 0) {
        search_warning.classList.add("showing");
        // alert("You must enter at least one character");
      } else {
        // console.log("object");
        search_warning.classList.remove("showing");
        search_load.classList.add("showing");
        setInterval(function () {
          search_load.classList.remove("showing");
        }, 3000);
      }
    });
    return () => {
      clearInterval();
    };
  });
  return (
    <div>
      <header className="Header">
        <div className="Wrapper Wrapper--header">
          <div className="Header__top">
            <Link to="/" className="Header__logo">
              <img
                src={logo}
                alt="background-header"
                className="Header__logo--img"
              />
            </Link>
            <div className="Header__menu">
              <ul>
                <li>
                  <Link to="/">HOME</Link>
                </li>
                <li>
                  <Link to="/about">ABOUT</Link>
                </li>
                <li>
                  <Link to="/posts">POSTS</Link>
                </li>
                <li>
                  <Link to="/contact">CONTACT</Link>
                </li>
                <li>
                  <Link to="/profile">PROFILE</Link>
                </li>
                <li>
                  <Link to="/login">LOGIN</Link>
                </li>
              </ul>
            </div>
          </div>
          <div className="Header__search">
            <input
              type="text"
              className="Header__search--input"
              placeholder="Search..."
              value={searchText}
              onChange={(evt) => setSearchText(evt.target.value)}
            />
            <i className="fas fa-search Header__search--icon" />
            <span className="Header__search--searching">Searching...</span>
          </div>
          <div className="Header__warning">
            You must enter at least one character
          </div>
          <div className="Header__title">{title}</div>
          <div className="Header__sub-title">Engineer/Video Creator</div>
        </div>
      </header>
    </div>
  );
};

export default Header;
