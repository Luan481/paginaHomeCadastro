import React from "react";

function Login() {
  return (
    <div className="cont-main">
      <div className="login_box">
        <h1>Login</h1>
        <input type="text" placeholder="Usuário" />
        <input type="text" placeholder="Senha" />
        <p>
          Não possui uma conta? <a href="">Cadastrar-se</a>
        </p>
        <button>Confirmar</button>
      </div>
    </div>
  );
}
export default Login;
