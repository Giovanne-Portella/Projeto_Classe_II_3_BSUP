import React from "react";
import { Link } from "react-router-dom";
import "./index.scss";
import HeaderMenu from "../../components/HeaderMenu/HeaderMenu";

const ITEMS_FORMULARIOS = [
  {
    icon: "📄",
    title: "Guias de Fornecimento",
    desc: "Separação de materiais, ODF e GF por depósito",
    to: "/FormGF",
    external: false,
  },
  {
    icon: "🗃️",
    title: "Fechamento Patrimonial",
    desc: "Relatório mensal de entradas, DIEx e valores por CC",
    to: "/FormFechamento",
    external: false,
  },
];

const ITEMS_TRELLO = [
  {
    icon: "📌",
    title: "Atualizações Diárias",
    desc: "Quadro de agendamentos e tarefas da Expedição",
    href: "https://trello.com/invite/b/6gIIpx8d/ATTI84991aa63aaf6df7890a7ddf09be6442BFDC8A04/agendamentos-expedicao",
  },
];

const Expedicao = () => {
  return (
    <div className="sec-page">
      <HeaderMenu />

      <div className="sec-hero">
        <span className="sec-badge">Seção · Escritório de Expedição</span>
        <h1>Expedição</h1>
      </div>

      <div className="sec-group">
        <h2 className="sec-group__title">Formulários</h2>
        <div className="sec-cards">
          {ITEMS_FORMULARIOS.map((item) => (
            <div key={item.title} className="sec-card">
              <span className="sec-card__icon">{item.icon}</span>
              <div className="sec-card__body">
                <h4>{item.title}</h4>
                <p>{item.desc}</p>
              </div>
              <Link className="sec-card__btn" to={item.to}>Acessar</Link>
            </div>
          ))}
        </div>
      </div>

      <div className="sec-group">
        <h2 className="sec-group__title">Atualizações</h2>
        <div className="sec-cards">
          {ITEMS_TRELLO.map((item) => (
            <div key={item.title} className="sec-card">
              <span className="sec-card__icon">{item.icon}</span>
              <div className="sec-card__body">
                <h4>{item.title}</h4>
                <p>{item.desc}</p>
              </div>
              <a className="sec-card__btn" href={item.href} target="_blank" rel="noreferrer">Abrir</a>
            </div>
          ))}
        </div>
      </div>

      <div className="sec-back">
        <Link className="sec-back__btn" to="/home">← Início</Link>
      </div>
    </div>
  );
};

export default Expedicao;