import React from "react";
import "./index.scss";
import { Link } from "react-router-dom";
import HeaderMenu from "../../components/HeaderMenu/HeaderMenu";
import ProductsCard from "../../components/Seções/ProductsCard";

const Home = ({ data }) => {

  return (
    <div className="home">
      <HeaderMenu />
   
      <div className="home__products">
        <h1>Bem vindo(a) ao <br />Web App  Classe II!</h1> 
        <div>
        {data.map((product) => (
          <ProductsCard key={product.id} data={product} />
          
        ))}

<div className="home__products">

        <h4>Seção de Expedição</h4>
        <button className="button" type="submit">
          <Link to={"/Expedicao"}>Acessar Conteúdo</Link>
        </button>

        </div>

        <div className="home__products">

        <h4>Depósitos</h4>
        <button className="button" type="submit">
          <Link to={"/Depositos"}>Acessar Conteúdo</Link>
        </button>

        </div>
        

        </div>

      </div>

    </div>
  );
};

export default Home;