import React from "react";
import { Link } from "react-router-dom";
import "./index.scss";
import HeaderMenu from "../../components/HeaderMenu/HeaderMenu";


const Expedicao = () => {
  return (
    
    <div className="product-detail__description">
    <HeaderMenu />
<br />
      <h1>Expedição</h1><br />

      <h3>Formulários</h3><br />
      <h3>Separação de Materiais</h3><br />
      <button  className="bExp"><Link to={"/FormGF"}> Acessar Guias </Link></button><br /><br />
      <h3>Fechamento</h3><br />
      <button className="bExp"><Link to={"/FormFechamento"}> Acessar Fechamento </Link></button><br /><br />

        <h3>Atualizações Diárias</h3><br />
        <button className="bExp"> <a href="https://trello.com/invite/b/6gIIpx8d/ATTI84991aa63aaf6df7890a7ddf09be6442BFDC8A04/agendamentos-expedicao" target="_blank" rel="noreferrer">Acessar Trello</a> </button>

      <button className="button1" type="button">
        <Link to={"/home"}>Voltar ao Início</Link>
      </button><br />

    </div>


  );
};

export default Expedicao;