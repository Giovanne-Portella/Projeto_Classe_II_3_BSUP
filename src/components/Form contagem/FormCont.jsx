import React from "react";
import { Link } from "react-router-dom";
import "./index.scss";
import HeaderMenu from "../HeaderMenu/HeaderMenu";


const FormCont = () => {
  return (
    <div className="product-detail__description">
      <HeaderMenu />
      <div className="card">
        <form action="https://formspree.io/f/xeqwkljg" method="POST">
          <h1>Formulários Classe II</h1><br />
          <h3>Materiais em Contagem</h3><br /><br />
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
            <label htmlFor="qtdPrevista">Quantidade Prevista:</label>
            <input type="number" id="qtdPrevista" placeholder="Quantidade Total" required name="Quantidade Prevista" />
          </div>
          <div className="inputpd">
            <label htmlFor="qtdRecebida">Quantidade Recebida:</label>
            <input type="number" id="qtdRecebida" placeholder="Quantidade Total na contagem" required name="Quantidade do material contado" />
          </div>
          <div className="inputpd">
            <label htmlFor="volume">Volume:</label>
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
            <label>O material encontra-se com...</label>
            <select name="Alteração?">
              <option value=""></option>
              <option>Com alteração</option>
              <option>Sem alteração</option>
            </select>
          </div>
          <div className="inputpd">
            <label htmlFor="termino">Término da Contagem:</label>
            <input type="date" id="termino" required name="Data da contagem" />
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

export default FormCont;


    <div className="product-detail__description">
      <HeaderMenu />


      <div className="card">

        <form action="https://formspree.io/f/xeqwkljg" method="POST">
          <h1>Formulários Classe II</h1><br />
          <h3>Materiais em Contagem</h3><br /><br />
          <div className="inputpd">
            <label htmlFor="Cto">Contrato:</label>
            <input type="text" className="pdnome" placeholder="000/0000" required="required" name="Contrato"
            />
          </div>
          <div className="inputpd">
            <label htmlFor="NE">Nota de Empenho:</label>
            <input type="text" className="pdnome" placeholder="2023NE000000" required="required" name="Empenho"
            />
          </div>

          <div className="inputpd">
            <label>Material:</label>
            <input type="text" className="pdnome" placeholder="Descrição do Material" required="required" name="Nome do Material"
            />
          </div>
          <div className="inputpd">
            <label>Nota Fiscal:</label>
            <input type="number" className="pdnome" placeholder="Número da Nota Fiscal" required="required"  name="Nota Fiscal"
            />
          </div>

          <div class="inputpd">
            <label> Quantidade Prevista:</label>
            <input type="number" id="pdqtd" placeholder="Quantidade Total" required="required"
              name="Quantidade Prevista" />

          </div>

          <div class="inputpd">
            <label> Quantidade Recebida:</label>
            <input type="number" id="pdqtd" placeholder="Quantidade Total na contagem" required="required"
              name="Quantidade do material contado" />
          </div>

          <div class="inputpd">
            <label> Volume:</label>
            <input type="number" id="pdqtd" placeholder="Volume Total" required="required"
              name="Volume do material" />
          </div>

          <div class="inputpd">
            <label>Lote:</label>
            <select name="Lote">
              <option></option>
              <option>1° lote</option>
              <option>2° lote</option>
              <option>3° lote</option>
              <option>4° lote</option>

            </select>
          </div>
          <div class="inputpd">
            <label> Empresa: </label>
            <input type="text" id="pdempresa" placeholder="Nome da Empresa" required="required"
              name="Empresa" />
          </div>

          <div class="inputpd">
            <label>Responsável pelo Recebimento do Material:</label>
            <select name="Responsável pelo Recebimento">
              <option></option>
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

          <div class="inputpd">
          <label> O material encontra-se com...</label>
          <select name="Alteração?">
                        <option></option>
                        <option>Com alteração</option>
                        <option>Sem alteração</option>
                    </select>
          </div>
          <div class="inputpd">
          <label> Término da Contagem: </label>
            <input type="date" id="pdcont" placeholder="00/00/0000" required="required"
                        name="Data da contagem" />
          </div>

          <div class="form inputpd">
          <label for="mensagem">Observações Gerais:</label>
          <textarea name="mensagem" placeholder="Caso houver alteração, descreva aqui!" id="mensagem" cols="30"
                        rows="10"></textarea>
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

export default FormCont;