import React from "react";

import vkIcon from "../assets/vkIcon.svg";
import odnIcon from "../assets/odnoklassnikiIcon.svg";
import instagramIcon from "../assets/instagramIcon.svg";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer__wrapper">
          <ul className="footer__list">
            <li className="footer__item footer__item-title">
              Справочные ссылки
            </li>
            <li className="footer__item">
              <a href="#!">Политика конфиденциальности</a>
            </li>
            <li className="footer__item">
              <a href="#!">Условия использования</a>
            </li>
            <li className="footer__item">
              <a href="#!">Доставка и возврат</a>
            </li>
            <li className="footer__item">
              <a href="#!">Часто задаваемые вопросы</a>
            </li>
          </ul>
          <ul className="footer__list footer__list-icon">
            <li className="footer__item-icon">
              <a href="#!">
                <img src={vkIcon} alt="vk icon" />
              </a>
            </li>
            <li className="footer__item-icon">
              <a href="#!">
                <img src={odnIcon} alt="odn icon" />
              </a>
            </li>
            <li className="footer__item-icon">
              <a href="#!">
                <img src={instagramIcon} alt="insta icon" />
              </a>
            </li>
          </ul>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
