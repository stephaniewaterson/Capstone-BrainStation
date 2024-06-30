import "./NavBar.scss";
import { NavLink } from "react-router-dom";

export default function NavBar() {
  return (
    <section className="nav">
      <ul className="nav__items">
        <li>
          <NavLink className="nav__link" to="/">
            Home
          </NavLink>
        </li>
        <li>
          <NavLink className="nav__link" to="/translate">
            Translate
          </NavLink>
        </li>
        <li>
          <NavLink className="nav__link" to="/blog">
            Choose Country
          </NavLink>
        </li>
        <li>
          <NavLink className="nav__link" to="">
            Help
          </NavLink>
        </li>
      </ul>
    </section>
  );
}
