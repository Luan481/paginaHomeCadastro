import { useEffect, useState } from "react";
import "./App.css";
import Home from "./pages/Home";
import Login from "./pages/Login";

function App() {
  const [page, setPage] = useState(<Home />);
  return (
    <>
      <header className="header">
        <div className="logo">
          <img src="/icones/Poké_Ball_icon.svg" alt="" onClick={() => setPage(<Home />)}/>
          <h1>Pokédex G2L</h1>
        </div>
        <div className="search">
          <input placeholder="Buscar Pokémon..." />
        </div>

        <div className="menu">
          <button>MEUS TIMES</button>
          <div className="profile"><img title="Cadastrar/Logar" src="/icones/mingcute--user-4-fill.svg" alt="" onClick={() => setPage(<Login />)}/></div>
        </div>
      </header>
      <main className="cont-main">{page}</main>
    </>
  );
}

export default App;
