import React from "react";
import css from "./title.module.css";

export const Title = ({ name, position }) => {
  return (
    <div className={css.title} style={{ textAlign: { position } }}>
      {name}
    </div>
  );
};
