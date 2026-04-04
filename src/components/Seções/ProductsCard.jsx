import { Link } from "react-router-dom";
import "./index.scss";

const ProductsCard = ({ data }) => {
  return (
    <div className="home__card">
      <div className="home__card-description">
        <h4>Seção de Recebimento</h4><br />
        <button>
          <Link to={`/products/${data.id}`}>Acessar Conteúdo</Link>
        </button> <br />
      </div>

    </div>
  );
};

export default ProductsCard;
