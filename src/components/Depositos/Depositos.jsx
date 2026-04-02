import React from "react";
import { Link } from "react-router-dom";
import "./index.scss";
import HeaderMenu from "../../components/HeaderMenu/HeaderMenu";


const Depositos = ({ data }) => {
  console.log(data);
  return (


    <div className="product-detail__description">
    <HeaderMenu />
<br />
      <h1>Em breve!</h1><br />
        <h3>Em desenvolvimento!</h3>
      <button className="button1" type="submit">
        <Link to={"/home"}>Voltar ao Início</Link>
      </button>

    </div>


  );
};

export default Depositos;