import "./NavBar.scss";
import { Link } from "react-router-dom";
export default function NavBar() {
  return (
    <section className="nav">
      <ul className="nav__items">
        <Link className="nav__link" to="/">
          <li className="nav__item">Home</li>
        </Link>
        <Link className="nav__link" to="/blog/3">
          <li className="nav__item">Lebanon</li>
        </Link>
        <Link className="nav__link" to="/blog/1">
          <li className="nav__item">Brazil</li>
        </Link>
        <Link className="nav__link" to="/blog/5">
          <li className="nav__item">Colombia</li>
        </Link>
        <Link className="nav__link" to="/blog/4">
          <li className="nav__item">Taiwan</li>
        </Link>
        <Link className="nav__link" to="/blog/2">
          <li className="nav__item">Japan</li>
        </Link>
        {/* map over locations {locations
        .filter((location) => location.id !== activeLocation.id)
        .map((location) => {
          return (
            <Link
              className="locations__link"
              key={locations.id}
              to={`/blog/${location.id}`}
            >
              <NextVideo location={location} />
            </Link>  */}
      </ul>
    </section>
  );
}
