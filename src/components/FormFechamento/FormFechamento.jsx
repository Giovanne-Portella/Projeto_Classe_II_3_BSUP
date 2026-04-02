import React from "react";
import { Link } from "react-router-dom";
import "./index.scss";
import HeaderMenu from "../HeaderMenu/HeaderMenu";


const FormFechamento = ({ data }) => {
  console.log(data);
  return (


    <div className="product-detail__description">
      <HeaderMenu />


      <div className="card">

        <form action="https://formspree.io/f/mbjezqwd" method="POST">
          <h1>Formulários Classe II</h1><br />
          <h3>Fechamento Patrimonial</h3><br /><br />

          <div class="inputpd">
            <label>Emissor do Relatório:</label>
            <select name="Emissão Relatório">
              <option></option>

              <option>Escritório de Entrada</option>
              <option>Escritório de Expedição</option>

            </select>
          </div>

          <div class="form inputpd">
          <label for="Materiais">DIEx de Entrada de Material:</label>
          <textarea name="DIEx de Entrada" placeholder="Relacione aqui os DIEx relacionados às entradas de material do mês atual." id="mensagem" cols="30"
                        rows="7"></textarea>
          </div>

          <div class="form inputpd">
          <label for="Materiais">Nome da Empresa:</label>
          <textarea name="Nome da Empresa" placeholder="Relacione aqui os nomes das empresa relacionados às entradas de material." id="mensagem" cols="30"
                        rows="7"></textarea>
          </div>


          <div class="form inputpd">
          <label for="Materiais">Valor total por CC/Data de Entrada:</label>
          <textarea name="Valor Total por CC e data da Entrada de Material" placeholder="Relacione aqui os valores totais por CC." id="mensagem" cols="30"
                        rows="7"></textarea>
          </div>

          <div class="inputpd">
            <label>Responsável pelo Relatório:</label>
            <select name="Responsável pelo Relatório">
              <option></option>

              <option>3° Sgt Lopes Júnior</option>
              <option>3° Sgt Cunha</option>
              <option>Sd EP Dalton</option>
              <option>Sd EP Strassburger</option>
              <option>Sd EP Cauduro</option>


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

export default FormFechamento;