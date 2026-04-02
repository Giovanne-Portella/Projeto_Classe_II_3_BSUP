import "./index.scss";
import logo from "../../assets/logo-cl2.png";

const HeaderMenu = () => {
  return (
    <header className="header-menu">
      <div className="div1">     <a href="/home"><img src={logo} alt="logo" className="header-menu__logo" /></a> 
      <h1>Seção Sup <br /> Classe II</h1></div>
        <section>
        <div>

      <ul className="ul1">
        <li> <a href="https://classe2-3bsup-web-app.netlify.app/" target={"_blank"}>Intranet Classe II</a></li>
        <li> <a href="https://docs.google.com/spreadsheets/d/17yzC5JV6akW6o0ywUPd1SwSZCLk6rDb7zE7_GfFczOo/edit?usp=sharing" target={"_blank"}>Relatório Semanal</a></li>
      </ul>
      </div>
      <div><br />
      <ul className="ul1">

        <li className="li"> <a href="/">Trocar Usuário</a></li>
      </ul>
      </div>
      </section>
    </header>
  );
};

export default HeaderMenu;
