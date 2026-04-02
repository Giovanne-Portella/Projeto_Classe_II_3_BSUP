import React from "react";
import { Link } from "react-router-dom";
import "./index.scss";
import Header from "../Header/Header";


const FormCadastro = ({ data }) => {
  console.log(data);
  return (


    <div className="product-detail__description">
      <Header />


      <div className="card">

        <form action="https://formspree.io/f/xyyanbra" method="POST">
          <h1>Formulários Classe II</h1><br />
          <h3>Cadastro Pessoal</h3><br /><br />
          <div className="inputpd">
            <label htmlFor="Nome">Nome Completo:</label>
            <input type="text" className="pdnome" placeholder="Insira seu nome aqui." required="required" name="Nome Completo"
            />
          </div>
          <div className="inputpd">
            <label htmlFor="E-mail">E-mail:</label>
            <input type="e-mail" className="pdnome" placeholder="insira seu e-mail aqui." required="required" name="E-mail"
            />
          </div>

          <div className="inputpd">
            <label>CPF:</label>
            <input type="number" className="pdnome" placeholder="Insira seu CPF aqui." required="required" name="CPF"
            />
          </div>
          <div className="inputpd">
            <label>Senha:</label>
            <input type="password" className="pdnome" placeholder="Insira sua senha aqui." required="required"  name="Senha"
            />
          </div>

          <div class="inputpd">
            <label>Repita sua senha:</label>
            <input type="password" id="pdqtd" placeholder="Repita sua senha novamente." required="required"
              name="Repetir Senha" />

          </div>

          <div className="botoes">
          <button className="submit" type="submit">Enviar Cadastro</button>
          <button className="voltar" type="submit">
        <Link className="a" to={"/"}>Voltar ao início</Link>
      </button>
          </div>

        </form>

      </div>


    </div>





  );
};

export default FormCadastro;