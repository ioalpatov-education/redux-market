import "./App.css";
import MarketForm from "./components/MarketForm";
import MarketList from "./components/MarketList";
import { Button } from "@mui/material";
import { useState } from "react";

function App() {
  const [showList, setShowList] = useState(true);

  const changeShow = () => {
    setShowList(!showList);
  };

  return (
    <div className="app">
      <header>
        <Button onClick={changeShow} variant="outlined">
          {showList ? "Добавить" : "Список товаров"}
        </Button>
      </header>
      {showList ? <MarketList /> : <MarketForm />}
    </div>
  );
}

export default App;
