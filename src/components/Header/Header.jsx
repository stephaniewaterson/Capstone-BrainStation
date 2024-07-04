import "./Header.scss";
import { Link } from "react-router-dom";

export default function Header() {
  return (
    <section className="header">
      <Link className="header__link" to="/">
        <h1 className="header__title">LocalLingo</h1>
      </Link>
    </section>
  );
}
