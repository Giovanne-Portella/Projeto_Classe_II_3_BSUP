import dncLogo from "../../assets/logo-cl2.png";
import "./index.scss";


const Header = () => {
  return (
    // Block
    <div className="header">
      <img className="header__img" src={dncLogo} alt="dnc logo" />
      <h1 className="header_title">Web APP <br /> Seção Sup <br /> Classe II</h1>
    </div>

      );
};

export default Header;
