import React from "react";
import HeaderNav from "../components/HeaderNav";

const Header = ({ cart, isPopup, setIsPopup }) => {
  return (
    <header className="header">
      <div className="container">
        <div className="header__wrapper">
          <HeaderNav cart={cart} isPopup={isPopup} setIsPopup={setIsPopup} />
        </div>
      </div>
    </header>
  );
};

export default Header;
