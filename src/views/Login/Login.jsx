import React from "react";
import "./index.scss";
import Header from "../../components/Header/Header";
import { Link } from "react-router-dom";

const Login = () => {
  return (
    <section className="login">
      <Header />
      <form className="login__form">
        <h1>Acesse com seu login</h1>
        <h2>Você pode entrar com o seu CPF</h2>
        <div className="login__input-wrapper">
          <label className="label1" htmlFor="CPF">Digite seu CPF:</label>
          <input
            type="number"
            placeholder="000.000.000-00"
            id="name"
            className="login__input-name"
          />
          <label htmlFor="password">Senha:</label>
          <input className="login__input-name" type="password" id="password" placeholder="********" />
        </div>
        <button type="submit">
        <Link to={"/home"}>Entrar</Link>
        </button>

      </form><br />

      <div className="div2">
        <p>Ainda não possui cadastro?</p>
        <button type="submit"  ><Link className="a" to={"/FormCadastro"}> Clique Aqui! </Link></button>

        </div>

      <footer>Desenvolvido por Giovanne Marinho</footer>


    </section>

  );
};

export default Login;
