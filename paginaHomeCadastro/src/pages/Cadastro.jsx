import React from "react";

function Cadastro() {
  return (
    <div className="cont-main">
      <div className="login_box">
        <h1>Cadastro</h1>
        
        <input type="text" placeholder="Nome de Treinador" />
        <input type="email" placeholder="E-mail" />
        <input type="password" placeholder="Senha" />
        <input type="password" placeholder="Confirmar Senha" />
        
        <p>
          Já possui uma conta? <a href="#">Fazer Login</a>
        </p>
        <button>Registrar</button>
      </div>
    </div>
  );
}

export default Cadastro;