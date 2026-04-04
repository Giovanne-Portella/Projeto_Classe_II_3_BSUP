import React from "react";
import { Link } from "react-router-dom";
import "./index.scss";
import HeaderMenu from "../HeaderMenu/HeaderMenu";


const FormGF = () => {
  return (
    <div className="product-detail__description">
      <HeaderMenu />
      <div className="card">
        <form action="" method="POST">
          <h1>Formulários Classe II</h1><br />
          <h3>Materiais e Guias de Fornecimento</h3><br /><br />
          <div className="inputpd">
            <label htmlFor="odf">Ordem de Fornecimento:</label>
            <input type="text" id="odf" placeholder="N° ODF" required name="ODF" />
          </div>
          <div className="inputpd">
            <label htmlFor="gf">Guia de Fornecimento:</label>
            <input type="text" id="gf" placeholder="N° GF" required name="GF" />
          </div>
          <div className="inputpd">
            <label htmlFor="materiais">Materiais/Quantidade:</label>
            <textarea id="materiais" name="Materiais/Quantidade" placeholder="Relacione os materiais e quantidade aqui" rows="7"></textarea>
          </div>
          <div className="inputpd">
            <label htmlFor="volume">Volume Total:</label>
            <input type="number" id="volume" placeholder="Volume Total" required name="Volume do material" />
          </div>
          <div className="inputpd">
            <label htmlFor="responsavel">Responsável pela Separação do Material:</label>
            <select id="responsavel" name="Responsável pelo Recebimento">
              <option value=""></option>
              <option>3° Sgt Muniz</option>
              <option>3° Sgt Fernanda Luz</option>
              <option>3° Sgt Castro</option>
              <option>3° Sgt César</option>
            </select>
          </div>
          <div className="inputpd">
            <label>O material encontra-se separado...</label>
            <select name="Alteração?">
              <option value=""></option>
              <option>Com alteração</option>
              <option>Sem alteração</option>
            </select>
          </div>
          <div className="inputpd">
            <label htmlFor="termino">Término da Separação:</label>
            <input type="date" id="termino" required name="Data da contagem" />
          </div>
          <div className="inputpd">
            <label>O material está localizado...</label>
            <select name="Localização">
              <option value=""></option>
              <option>Expedição</option>
              <option>Depósito 1</option>
              <option>Depósito 2</option>
              <option>Depósito 3</option>
              <option>Depósito 4</option>
              <option>Depósito Calçados</option>
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

export default FormGF;