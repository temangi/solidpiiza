import React from "react";
import css from './button.module.css'

const Button = ({name,variant}) => {
    return (
        <button className={variant == "full" ? css.full : css.empty}>{name}</button>
    )
}

export default Button