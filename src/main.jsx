import React from "react";
import ReactDOM from "react-dom/client";
import "./index.scss";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Login from "./views/Login/Login";
import Home from "./views/Home/Home";
import Products from "./views/Products/Products";
import { PRODUCTS_MOCK } from "./mock/products.mock";
import Expedicao from "./components/Expedicao/Expedicao";
import FormCont from "./components/Form contagem/FormCont";
import FormReceb from "./components/FormRecebimento/FormReceb";
import FormCadastro from "./components/FormCadastro/FormCadastro";
import FormSolicitacao from "./components/FormSolicitacao/FormSolicitacao";
import FormGF from "./components/FormGF/FormGF";
import FormFechamento from "./components/FormFechamento/FormFechamento";
import Depositos from "./components/Depositos/Depositos";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Login />,
  },


  {
    path: "/home",
    element: <Home data={PRODUCTS_MOCK} />,
  },



  {
    path: "/products/:productId",
    element: <Products data={PRODUCTS_MOCK} />,
  },

  {
    path: "/expedicao",
    element: <Expedicao />,
  },

  {
    path: "/FormCadastro",
    element: <FormCadastro />,
  },

  {
    path: "/formCont",
    element: <FormCont />,
  },

  {
    path: "/formReceb",
    element: <FormReceb />,
  },

  {
    path: "/FormSolicitacao",
    element: <FormSolicitacao />,
  },

  {
    path: "/FormGF",
    element: <FormGF />,
  },

  {
    path: "/FormFechamento",
    element: <FormFechamento />,
  },

  {
    path: "/Depositos",
    element: <Depositos />,
  },




]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);

