import { Route } from "react-router-dom";
import "./App.css";
import Header from "./components/header/header";
import Login from "./pages/LoginPage/login";
import Main from "./pages/HomePage/main";
import { Links } from "./components/links/links";
import Button from "./components/button/button";
import { Title } from "./components/title/title";

const nameLinks = [
  { name: "Пиццы" },
  { name: "Комбо" },
  { name: "Закузки" },
  { name: "Десерты" },
  { name: "Напитки" },
  { name: "Другие товары" },
  { name: "Акции" },
  { name: "Контакты" },
  { name: "О нас" },
];

const newArr = nameLinks.map((el) => <Links name={el.name} />);

function App() {
  return (
    <div className="App">
      <Header />
      <div className="link + container ">
        {newArr}
        <div className="but">
          <Button name="Корзина" variant={"full"} />
        </div>
      </div>
      <Title name='Пиццы' position='center' />
      {/* <Route>
        <Route path="/" element={<Main/>}/>
        <Route path="/login"element={<Login/>} />
        <Route path="/product:/id" element={<div>fafa</div>} />
      </Route> */}

    </div>
  );
}

export default App;
