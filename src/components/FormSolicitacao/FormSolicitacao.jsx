import React from "react";
import { Link } from "react-router-dom";
import "./index.scss";
import HeaderMenu from "../HeaderMenu/HeaderMenu";


const FormSolicitacao = () => {
  return (
    <div className="product-detail__description">
      <HeaderMenu />
      <div className="card">
        <form action="https://formspree.io/f/moqzkyaa" method="POST">
          <h1>Formulários Classe II</h1><br />
          <h3>Solicitação de Dados</h3><br /><br />
          <div className="inputpd">
            <label htmlFor="assunto">A solicitação é sobre...</label>
            <select id="assunto" name="Solicitação">
              <option value=""></option>
              <option>Contrato/Material/Lote/Nota Fiscal</option>
              <option>Material Recebido/em contagem</option>
              <option>Material em carga/fora de carga</option>
              <option>Responsável pelo recebimento</option>
              <option>Documentos sobre entrada de material</option>
              <option>Outras solicitações</option>
            </select>
          </div>
          <div className="inputpd">
            <label htmlFor="responsavel">Responsável pela solicitação:</label>
            <select id="responsavel" name="Responsável pela Solicitação">
              <option value=""></option>
              <option>1° Ten Cezimbra</option>
              <option>2° Ten De Mello</option>
              <option>3° Sgt Muniz</option>
              <option>3° Sgt Cunha</option>
              <option>3° Sgt Castro</option>
              <option>3° Sgt Fernanda Luz</option>
              <option>3° Sgt Gabriel Silva</option>
              <option>3° Sgt Lopes Júnior</option>
            </select>
          </div>
          <div className="inputpd">
            <label htmlFor="dataSolicitação">Data da solicitação:</label>
            <input type="date" id="dataSolicitação" required name="Data da Solicitação" />
          </div>
          <div className="inputpd">
            <label htmlFor="info">Informações sobre a solicitação:</label>
            <textarea id="info" name="mensagem" placeholder="Descreva aqui sobre os dados solicitados." rows="10"></textarea>
          </div>
          <div className="botoes">
            <button className="submit" type="submit">Enviar Solicitação</button>
            <button className="voltar" type="button">
              <Link to={"/home"}>Voltar ao início</Link>
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default FormSolicitacao;
  return (


    <div className="product-detail__description">
      <HeaderMenu />


      <div className="card">

        <form action="https://formspree.io/f/moqzkyaa" method="POST">
          <h1>Formulários Classe II</h1><br />
          <h3>Solicitação de Dados</h3><br /><br />


          <div class="inputpd">
            <label>A solicitação é sobre...</label>
            <select name="Solicitação">
              <option></option>
              <option>Contrato/Material/Lote/Nota Fiscal</option>
              <option>Material Recebido/em contagem</option>
              <option>Material em carga/fora de carga</option>
              <option>Responsável pelo recebimento</option>
              <option>Documentos sobre entrada de material</option>
              <option>Outras solicitações</option>
            </select>
          </div>


          <div class="inputpd">
            <label>Responsável pela solicitação:</label>
            <select name="Responsável pela Solicitação">
              <option></option>
              <option>1° Ten Cezimbra</option>
              <option>2° Ten De Mello</option>
              <option>3° Sgt Muniz</option>
              <option>3° Sgt Cunha</option>
              <option>3° Sgt Castro</option>
              <option>3° Sgt Fernanda Luz</option>
              <option>3° Sgt Gabriel Silva</option>
              <option>3° Sgt Lopes Júnior</option>

            </select>
          </div>

          <div class="inputpd">
            <label>Data da solicitação:</label>
            <input type="date" className="pdnome" placeholder="" required="required" name="Data da Solicitação" />
          </div>


          <div class="form inputpd">
            <label for="mensagem">Informações sobre a solicitação:</label>
            <textarea name="mensagem" placeholder="Descreva aqui sobre os dados solicitados." id="Informações sobre a solicitação" cols="30"
              rows="10"></textarea>
          </div>
          <div className="botoes">
            <button className="submit" type="submit">Enviar Solicitação</button>
            <button className="voltar" type="submit">
              <Link className="a" to={"/home"}>Voltar ao início</Link>
            </button>
          </div>

        </form>

      </div>


    </div>





  );
};

export default FormSolicitacao;