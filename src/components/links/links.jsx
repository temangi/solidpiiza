import React from "react";
import { Link } from "react-router-dom";
import css from './link.module.css'

export const Links = ({name}) => {
  return (
    <div className="container">
      <div className={css.link}>
        <Link>{name}</Link>
      </div>
    </div>
  );
};
