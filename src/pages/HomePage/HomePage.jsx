import Header from "../../components/Header/Header";
import "./HomePage.scss";
import Brazil from "../../assets/images/Brazil.jpg";
import Lebanon from "../../assets/images/Lebanon.jpg";
import Taiwan from "../../assets/images/Taiwan.jpg";
import Japan from "../../assets/images/Japan-2.jpg";
import Colombia from "../../assets/images/Colombia.jpg";
import line from "../../assets/images/line.svg";
import { Link } from "react-router-dom";

export default function HomePage() {
  return (
    <section className="home">
      <Header />
      <img className="home__graphic" src={line} alt="" />
      <h2 className="home__header">Pick a country</h2>
      <div className="home__section">
        <Link>
          <article className="home__country">
            <img src={Brazil} alt="" className="home__image" />
            <h3 className="home__subheader">Brazil - Portuguese</h3>
          </article>
        </Link>
        <Link>
          <article className="home__country">
            <img src={Lebanon} alt="" className="home__image" />
            <h3 className="home__subheader"> Lebanon -Arabic</h3>
          </article>
        </Link>
        <Link>
          <article className="home__country">
            <img src={Taiwan} alt="" className="home__image" />
            <h3 className="home__subheader">Taiwan - Mandarin</h3>
          </article>
        </Link>
        <Link>
          <article className="home__country">
            <img src={Japan} alt="" className="home__image" />
            <h3 className="home__subheader">Japan - Japanese</h3>
          </article>
        </Link>
        <Link>
          <article className="home__country">
            <img src={Colombia} alt="" className="home__image" />
            <h3 className="home__subheader">Colombia - Spanish</h3>
          </article>
        </Link>
      </div>
    </section>
  );
}
