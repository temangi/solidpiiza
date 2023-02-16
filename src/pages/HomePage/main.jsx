import React from "react";
import Header from "../../components/header/header";
import { Links } from "../../components/links/links";
import { Title } from "../../components/title/title";
import Button from "../../components/button/button";

const Main = () => {
  const nameLinks = [
    { name: "Пиццы" },
    { name: "Комбо" },
    { name: "Закузки" },
    { name: "Десерты" },
    { name: "Напитки" },
    { name: "Другие товары" },
  ];
  const newArr = nameLinks.map((el) => <Links name={el.name} />);
  return (
    <div className="App">
      <Header />
      <div className="link + container ">
        {newArr}
        <div className="but">
          <Button name="Корзина" variant={"full"} />
        </div>
      </div>
       
    </div>
  );
};

export default Main;
