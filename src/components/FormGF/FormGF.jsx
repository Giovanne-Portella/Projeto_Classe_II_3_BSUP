import React from "react";
import { Link } from "react-router-dom";
import "./index.scss";
import HeaderMenu from "../HeaderMenu/HeaderMenu";


const FormGF = ({ data }) => {
  console.log(data);
  return (


    <div className="product-detail__description">
      <HeaderMenu />


      <div className="card">

        <form action="" method="POST">
          <h1>Formulários Classe II</h1><br />
          <h3>Materiais e Guias de Fornecimento</h3><br /><br />
          <div className="inputpd">
            <label htmlFor="ODF">Ordem de Fornecimento:</label>
            <input type="text" className="pdnome" placeholder="N° ODF" required="required" name="ODF"
            />
          </div>
          <div className="inputpd">
            <label htmlFor="GF">Guia de Fornecimento:</label>
            <input type="text" className="pdnome" placeholder="N° GF" required="required" name="GF"
            />
          </div>

          <div class="form inputpd">
          <label for="Materiais">Materiais/Quantidade:</label>
          <textarea name="Materiais/Quantidade" placeholder="Relacione os materiais e quantidade aqui" id="mensagem" cols="30"
                        rows="7"></textarea>
          </div>

          <div class="inputpd">
            <label> Volume Total:</label>
            <input type="number" id="pdqtd" placeholder="Volume Total" required="required"
              name="Volume do material" />
          </div>



          <div class="inputpd">
            <label>Responsável pela Separação do Material:</label>
            <select name="Responsável pelo Recebimento">
              <option></option>

              <option>3° Sgt Muniz</option>
              <option>3° Sgt Fernanda Luz</option>
              <option>3° Sgt Castro</option>
              <option>3° Sgt César</option>

            </select>
          </div>

          <div class="inputpd">
          <label> O material encontra-se separado...</label>
          <select name="Alteração?">
                        <option></option>
                        <option>Com alteração</option>
                        <option>Sem alteração</option>
                    </select>
          </div>
          <div class="inputpd">
          <label> Término da Separação: </label>
            <input type="date" id="pdcont" placeholder="00/00/0000" required="required"
                        name="Data da contagem" />
          </div>

          <div class="inputpd">
          <label> O material está localizado...</label>
          <select name="Alteração?">
                        <option></option>
                        <option>Expedição</option>
                        <option>Depósito 1</option>
                        <option>Depósito 2</option>
                        <option>Depósito 3</option>
                        <option>Depósito 4</option>
                        <option>Depósito Calçados</option>
                    </select>
          </div>

          <div class="form inputpd">
          <label for="mensagem">Observações Gerais:</label>
          <textarea name="mensagem" placeholder="Caso houver alteração, descreva aqui!" id="mensagem" cols="30"
                        rows="8"></textarea>
          </div>
          <div className="botoes">
          <button className="submit" type="submit">Enviar dados</button>
          <button className="voltar" type="submit">
        <Link className="a" to={"/home"}>Voltar ao início</Link>
      </button>
          </div>

        </form>

      </div>


    </div>





  );
};

export default FormGF;