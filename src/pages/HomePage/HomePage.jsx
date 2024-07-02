import "./HomePage.scss";
import Dropdown from "react-bootstrap/Dropdown";
import DropdownButton from "react-bootstrap/DropdownButton";
import { Link } from "react-router-dom";
import { useState } from "react";

export default function HomePage() {
  const [open, setOpen] = useState(false);

  return (
    <>
      <section className="home">
        <h1 className="home__header">LocalLingo</h1>
        <article className="menu__container">
          <div className="menu__trigger">
            <h3
              className="menu__title"
              onClick={() => {
                setOpen(true);
              }}
            >
              Start Learning
            </h3>
            <div className={`dropdown__menu ${open ? "active" : "inactive"}`}>
              <ul className="dropdown__links">
                <li>
                  <Link className="dropdown__link" to="/blog">
                    <h2 className="dropdown__title">Spanish</h2>
                  </Link>
                </li>
                <li>
                  <Link className="dropdown__link" to="">
                    <h2 className="dropdown__title">Arabic</h2>
                  </Link>
                </li>
                <li>
                  <Link className="dropdown__link" to="">
                    <h2 className="dropdown__title">Malay</h2>
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </article>
      </section>
    </>
  );
}
