import React from "react";
import { Link } from "react-router-dom";
import "./index.scss";
import HeaderMenu from "../HeaderMenu/HeaderMenu";

const ITEMS_FORMULARIOS = [
  {
    icon: "📋",
    title: "Materiais em Contagem",
    desc: "Registre a contagem e divergências de materiais recebidos",
    to: "/formCont",
    external: false,
  },
  {
    icon: "📦",
    title: "Recebimento de Materiais",
    desc: "Nota fiscal, contrato, empresa e responsável pelo recebimento",
    to: "/formReceb",
    external: false,
  },
  {
    icon: "🗂️",
    title: "Solicitações",
    desc: "Solicite dados sobre contratos, materiais e documentos",
    to: "/FormSolicitacao",
    external: false,
  },
];

const ITEMS_PLANILHAS = [
  {
    icon: "📊",
    title: "Controle de Entrada",
    desc: "Planilha de controle de entrada de materiais",
    href: "https://docs.google.com/spreadsheets/d/1Y4JQyY2_sbrn1zXsOXOVzYRMPKO2OqSlkwLF-QtZXUg/edit?usp=sharing",
  },
  {
    icon: "📌",
    title: "Trello Controle",
    desc: "Quadro de tarefas semanais da Entrada Classe II",
    href: "https://trello.com/invite/b/Qwjy9Dhv/ATTI800e9a7f4ea83553e84f4da0c281c339D0BE5C45/tarefas-semanais-entrada-classe-ii",
  },
];

const Recebimento = () => {
  return (
    <div className="sec-page">
      <HeaderMenu />

      <div className="sec-hero">
        <span className="sec-badge">Seção · Escritório de Entrada</span>
        <h1>Recebimento</h1>
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
        <h2 className="sec-group__title">Planilhas</h2>
        <div className="sec-cards">
          {ITEMS_PLANILHAS.map((item) => (
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

export default Recebimento;
