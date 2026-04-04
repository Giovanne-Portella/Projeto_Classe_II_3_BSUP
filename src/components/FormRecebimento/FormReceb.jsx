import React from "react";
import { Link } from "react-router-dom";
import "./index.scss";
import HeaderMenu from "../HeaderMenu/HeaderMenu";


const FormReceb = () => {
  return (
    <div className="product-detail__description">
      <HeaderMenu />
      <div className="card">
        <form action="https://formspree.io/f/mzbqgvne" method="POST">
          <h1>Formulários Classe II</h1><br />
          <h3>Recebimento de Materiais</h3><br /><br />
          <div className="inputpd">
            <label htmlFor="contrato">Contrato:</label>
            <input type="text" id="contrato" placeholder="000/0000" required name="Contrato" />
          </div>
          <div className="inputpd">
            <label htmlFor="empenho">Nota de Empenho:</label>
            <input type="text" id="empenho" placeholder="2023NE000000" required name="Empenho" />
          </div>
          <div className="inputpd">
            <label htmlFor="material">Material:</label>
            <input type="text" id="material" placeholder="Descrição do Material" required name="Nome do Material" />
          </div>
          <div className="inputpd">
            <label htmlFor="nf">Nota Fiscal:</label>
            <input type="number" id="nf" placeholder="Número da Nota Fiscal" required name="Nota Fiscal" />
          </div>
          <div className="inputpd">
            <label htmlFor="natureza">Natureza da Nota:</label>
            <select id="natureza" name="Natureza NF">
              <option value=""></option>
              <option>Venda</option>
              <option>Remessa</option>
              <option>Outras naturezas</option>
            </select>
          </div>
          <div className="inputpd">
            <label htmlFor="quantidade">Quantidade:</label>
            <input type="number" id="quantidade" placeholder="Quantidade Total" required name="Quantidade do Material" />
          </div>
          <div className="inputpd">
            <label htmlFor="volume">Volume do Material:</label>
            <input type="number" id="volume" placeholder="Volume Total" required name="Volume do material" />
          </div>
          <div className="inputpd">
            <label htmlFor="lote">Lote:</label>
            <select id="lote" name="Lote">
              <option value=""></option>
              <option>1° lote</option>
              <option>2° lote</option>
              <option>3° lote</option>
              <option>4° lote</option>
            </select>
          </div>
          <div className="inputpd">
            <label htmlFor="empresa">Empresa:</label>
            <input type="text" id="empresa" placeholder="Nome da Empresa" required name="Empresa" />
          </div>
          <div className="inputpd">
            <label htmlFor="responsavel">Responsável pelo Recebimento do Material:</label>
            <select id="responsavel" name="Responsável pelo Recebimento">
              <option value=""></option>
              <option>1° Ten Cezimbra</option>
              <option>2° Ten De Mello</option>
              <option>3° Sgt Muniz</option>
              <option>3° Sgt Cunha</option>
              <option>3° Sgt Fernanda Luz</option>
              <option>3° Sgt Castro</option>
              <option>3° Sgt Lopes Júnior</option>
              <option>3° Sgt Gabriel Silva</option>
            </select>
          </div>
          <div className="inputpd">
            <label htmlFor="dataReceb">Data do Recebimento:</label>
            <input type="date" id="dataReceb" required name="Data da contagem" />
          </div>
          <div className="inputpd">
            <label htmlFor="obs">Observações Gerais:</label>
            <textarea id="obs" name="mensagem" placeholder="Caso houver alteração, descreva aqui!" rows="10"></textarea>
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

export default FormReceb;