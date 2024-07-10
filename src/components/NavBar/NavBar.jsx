import "./NavBar.scss";
import { NavLink } from "react-router-dom";

export default function NavBar() {
  return (
    <section className="nav">
      <ul className="nav__items">
        <div className="nav__left">
          <li>
            <NavLink className="nav__link" to="/">
              Home
            </NavLink>
          </li>
          <li>
            <NavLink className="nav__link" to="/chat">
              Chat
            </NavLink>
          </li>
          <li>
            <NavLink className="nav__link" to="/blog">
              Choose Country
            </NavLink>
          </li>
          <li>
            <NavLink className="nav__link" to="/help">
              Help
            </NavLink>
          </li>
        </div>
        <div className="nav__right">
          <li>
            <NavLink className="nav__link" to="/login">
              Login
            </NavLink>
          </li>
          <li>
            <NavLink className="nav__link" to="/signup">
              Register
            </NavLink>
          </li>
        </div>
      </ul>
    </section>
  );
}
