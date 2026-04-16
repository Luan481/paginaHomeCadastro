import { useEffect, useState } from "react";
import "./App.css";
import Home from "./pages/Home";
import Cadastro from "./pages/Cadastro"; 

function App() {
  const [page, setPage] = useState(<Home />);
  
  const [isDarkMode, setIsDarkMode] = useState(false); //lógica do modo escuro...

  useEffect(() => {
    if (isDarkMode) {
      document.body.classList.add("dark-mode");
    } else {
      document.body.classList.remove("dark-mode");
    }
  }, [isDarkMode]); //Se true, adiciona o darkmode no html

  const toggleTheme = () => {
    setIsDarkMode(!isDarkMode);  //'Interruptpr'
  };

  return (
    <>
      <header className="header">
        <div className="logo">
          <img 
            src="/icones/Poké_Ball_icon.svg" 
            alt="Pokébola" 
            onClick={() => setPage(<Home />)}
          />
          <h1>Pokédex G2L</h1>
        </div>
        
        <div className="search">
          <input placeholder="Buscar Pokémon..." />
        </div>

        <div className="menu">
          <button 
            onClick={toggleTheme} 
            style={{ 
              background: 'transparent', 
              border: 'none', 
              fontSize: '24px', 
              cursor: 'pointer',
              marginRight: '10px'
            }}
            title="Mudar Tema"
          >
            {isDarkMode ? '🌞' : '🌚'}
          </button>

          <button>MEUS TIMES</button>
          
          <div className="profile">
            <img 
              title="Cadastrar" 
              src="/icones/mingcute--user-4-fill.svg" 
              alt="Ícone de Usuário" 
              onClick={() => setPage(<Cadastro />)}
            />
          </div>
        </div>
      </header>
      
      <main className="cont-main">{page}</main>
    </>
  );
}

export default App;