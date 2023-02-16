import React from "react";
import { Link } from "react-router-dom";
import css from "./header.module.css";
import Button from "../button/button";
import { Links } from "../links/links";

const Header = () => {
  return (
    <div className={css.wrapper + " container "}>

        <div className={css.left}>
          <div className={css.logo}>
            <Link>
              <span>SOLID PIZZA</span>
            </Link>
          </div>
          <div className={css.za}>
            <span>Доставка пиицы Бишкек </span>
            <p>34 мин | 4.75 </p>
          </div>
          <div className={css.num}>
            <span>0(551)500-550</span>
            <p className={css.numb}>Звонок по телефону</p>
          </div>
        </div>
        <div className={css.right}>
          <div className="">
            <Link>Додокоины</Link>
          </div>
          <div>
            <button className={css.button}>Войти</button>
          </div>
        </div>
    </div>
  );
};

export default Header;
