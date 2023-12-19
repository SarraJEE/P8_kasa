import logo from "../../assets/images/logo/LOGO.svg";
import { Link } from "react-router-dom";

export default function Header() {
  return (
    <header className="header">
     <figure className="header_fig">
        <img className="logo" src={logo} alt="logo de l'agence kasa" />
      </figure>
      <nav className="header_nav">
        <ul >
          <Link className="header_nav_item" to="/">Accueil</Link>
          <Link className="header_nav_item" to="/about">A Propos</Link>
        </ul>
      </nav>

    </header>
  );
}
