import React from "react";

//images
import cartIcon from "../assets/cartIcon.svg";

const HeaderNav = ({ cart, isPopup, setIsPopup }) => {
  return (
    <nav className="header__nav">
      <ul className="header__list">
        <li className="header__item">
          <a href="#!" className="header__link">
            About
          </a>
        </li>
        <li className="header__item">
          <a href="#!" className="header__link">
            Account
          </a>
        </li>
        <li className="header__item">
          <button
            onClick={() => setIsPopup(!isPopup)}
            href="#!"
            className="header__button"
          >
            <img src={cartIcon} alt="cart icon" />
            <span
              className={`header__counter ${cart.length === 0 ? "none" : ""}`}
            >
              {cart.length}
            </span>
          </button>
        </li>
        <li className="header__item">
          <a href="#!" className="header__link">
            Shop
          </a>
        </li>
        <li className="header__item">
          <a href="#!" className="header__link">
            Contacts
          </a>
        </li>
      </ul>
    </nav>
  );
};

export default HeaderNav;
