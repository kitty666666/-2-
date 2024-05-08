import React from "react";

import iconClose from "../assets/closeIcon.svg";
import iconDelete from "../assets/basketIcon.svg";

const Popup = ({ cart, isPopup, setIsPopup, setCart }) => {
  return (
    <div className={`popup ${isPopup ? "" : "none"}`}>
      <div className="popup__title">
        <h2 className="title2">Your cart</h2>
      </div>
      <ul className="popup__list">
        {cart.map((cartItem) => (
          <li className="popup__item">
            <img
              className="popup__image"
              src={cartItem.image}
              alt="cart image"
            />
            <span className="popup__span">{cartItem.title}</span>
          </li>
        ))}
      </ul>
      <div className="popup__button">
        <button onClick={() => setIsPopup(!isPopup)}>
          <img src={iconClose} alt="" />
        </button>
      </div>
      <div className="popup__button-delete">
        <button
          onClick={() => {
            setCart([]);
            setIsPopup(!isPopup);
          }}
        >
          <img src={iconDelete} alt="" />
        </button>
      </div>
    </div>
  );
};

export default Popup;
