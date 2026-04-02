import React from "react";
import { useParams } from "react-router-dom";
import HeaderMenu from "../../components/HeaderMenu/HeaderMenu";
import ProductDetail from "../../components/Recebimento/Recebimento";
import "./index.scss";

const Products = ({ data }) => {
  const { productId } = useParams();
  const selectedProduct = data.find((product) => product.id == productId);

  return (
    <section className="product">
      <HeaderMenu />
      <ProductDetail data={selectedProduct} />

    </section>
  );
};

export default Products;
