import "./NavBar.scss";
import { Link } from "react-router-dom";
export default function NavBar() {
  return (
    <section className="nav">
      <ul className="nav__items">
        <Link className="nav__link" to="/">
          <li className="nav__item">Home</li>
        </Link>
        <Link className="nav__link" to="/translate">
          <li className="nav__item">Translate</li>
        </Link>

        <Link className="nav__link" to="/blog">
          <li className="nav__item">Choose Country</li>
        </Link>
        <Link className="nav__link" to="">
          <li className="nav__item">Help</li>
        </Link>
      </ul>
    </section>
  );
}
