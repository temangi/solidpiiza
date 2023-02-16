import React from "react";
import Button from "../button/button";

export const Card = () => {
  return(
    <div>
      <img />
      <span>Name</span>
      <p>opisanie</p> 
      <div>
        <span>Price</span>
        <Button variant='empty' name='В корзуны'/>
      </div>  
    </div>
  )
};
