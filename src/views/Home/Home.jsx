import React from "react";
import "./index.scss";
import { Link } from "react-router-dom";
import HeaderMenu from "../../components/HeaderMenu/HeaderMenu";

const SECTIONS = [
  {
    id: "recebimento",
    label: "01",
    title: "Seção de Recebimento",
    description: "Formulários de controle, contagem e recebimento de materiais",
    to: "/recebimento",
  },
  {
    id: "expedicao",
    label: "02",
    title: "Seção de Expedição",
    description: "Guias de fornecimento, fechamento patrimonial e agendamentos",
    to: "/expedicao",
  },
  {
    id: "depositos",
    label: "03",
    title: "Depósitos",
    description: "Controle e gestão de materiais armazenados nos depósitos",
    to: "/Depositos",
  },
];

const Home = () => {
  return (
    <div className="home">
      <HeaderMenu />

      <div className="home__hero">
        <span className="home__badge">3º B SUP · EXÉRCITO BRASILEIRO</span>
        <h1>Web App<br />Classe II</h1>
        <p className="home__subtitle">Sistema de Gestão Logística</p>
      </div>

      <div className="home__sections">
        {SECTIONS.map((s) => (
          <div key={s.id} className="home__section-card">
            <span className="home__section-num">{s.label}</span>
            <div className="home__section-body">
              <h4>{s.title}</h4>
              <p>{s.description}</p>
            </div>
            <button type="button">
              <Link to={s.to}>Acessar</Link>
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Home;
