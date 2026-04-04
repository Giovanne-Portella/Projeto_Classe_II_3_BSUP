import React from "react";
import { Link } from "react-router-dom";
import "./index.scss";
import HeaderMenu from "../HeaderMenu/HeaderMenu";


const FormFechamento = () => {
  return (
    <div className="product-detail__description">
      <HeaderMenu />
      <div className="card">
        <form action="https://formspree.io/f/mbjezqwd" method="POST">
          <h1>Formulários Classe II</h1><br />
          <h3>Fechamento Patrimonial</h3><br /><br />
          <div className="inputpd">
            <label htmlFor="emissor">Emissor do Relatório:</label>
            <select id="emissor" name="Emissão Relatório">
              <option value=""></option>
              <option>Escritório de Entrada</option>
              <option>Escritório de Expedição</option>
            </select>
          </div>
          <div className="inputpd">
            <label htmlFor="diex">DIEx de Entrada de Material:</label>
            <textarea id="diex" name="DIEx de Entrada" placeholder="Relacione aqui os DIEx relacionados às entradas de material do mês atual." rows="7"></textarea>
          </div>
          <div className="inputpd">
            <label htmlFor="empresa">Nome da Empresa:</label>
            <textarea id="empresa" name="Nome da Empresa" placeholder="Relacione aqui os nomes das empresas relacionados às entradas de material." rows="7"></textarea>
          </div>
          <div className="inputpd">
            <label htmlFor="valorCC">Valor total por CC/Data de Entrada:</label>
            <textarea id="valorCC" name="Valor Total por CC e data da Entrada de Material" placeholder="Relacione aqui os valores totais por CC." rows="7"></textarea>
          </div>
          <div className="inputpd">
            <label htmlFor="responsavel">Responsável pelo Relatório:</label>
            <select id="responsavel" name="Responsável pelo Relatório">
              <option value=""></option>
              <option>3° Sgt Lopes Júnior</option>
              <option>3° Sgt Cunha</option>
              <option>Sd EP Dalton</option>
              <option>Sd EP Strassburger</option>
              <option>Sd EP Cauduro</option>
            </select>
          </div>
          <div className="inputpd">
            <label htmlFor="obs">Observações Gerais:</label>
            <textarea id="obs" name="mensagem" placeholder="Caso houver alteração, descreva aqui!" rows="8"></textarea>
          </div>
          <div className="botoes">
            <button className="submit" type="submit">Enviar dados</button>
            <button className="voltar" type="button">
              <Link to={"/home"}>Voltar ao início</Link>
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default FormFechamento;