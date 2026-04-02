import React from "react";
import { Link } from "react-router-dom";
import "./index.scss";

const Recebimento = ({ data }) => {
  console.log(data);
  return (

    <div className="product-detail__description">
          
<h1>Recebimento</h1>
      
      <h3>Formulários</h3><br /><br />
      
      <h3>Materiais em Contagem</h3><br />
      <button className="bExp" type="submit">
        <Link to={"/formCont"}>Acessar Formulário</Link>
      </button><br /><br />

      <h3>Recebimento de Materiais</h3><br />
      <button className="bExp" type="submit">
        <Link to={"/formReceb"}>Acessar Formulário</Link>
      </button><br /><br />
    
      <h3>Solicitações</h3><br />
      <button className="botão" type="submit">
        <Link to={"/FormSolicitacao"}>Acessar Formulário</Link>
      </button>

      <h1>Escritório de Entrada</h1>
      <h3>Planilhas</h3><br /><br />

      <h3>Controle de Entrada de Material</h3><br />
        <button className="bExp"> <a href="https://docs.google.com/spreadsheets/d/1Y4JQyY2_sbrn1zXsOXOVzYRMPKO2OqSlkwLF-QtZXUg/edit?usp=sharing" target={"_blank"}>Acessar Planilha</a> </button><br /><br />

        <h3>Trello Controle</h3><br />
        <button className="bExp"><a href="https://trello.com/invite/b/Qwjy9Dhv/ATTI800e9a7f4ea83553e84f4da0c281c339D0BE5C45/tarefas-semanais-entrada-classe-ii" target={"_blank"}>Acessar Trello</a> </button><br /><br />


      <button  className="bExp" type="submit">
    <Link to={"/home"}>Voltar ao Início</Link>
  </button><br />

    </div>


  );
};

export default Recebimento;
