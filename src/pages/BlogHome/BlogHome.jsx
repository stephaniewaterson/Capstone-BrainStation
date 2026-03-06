import Header from "../../components/Header/Header";
import fetchLocations from "../../utils/FetchLocations.jsx";
import "./BlogHome.scss";
import { Link } from "react-router-dom";
import { BeatLoader } from "react-spinners";

export default function BlogHome() {
  const { locations, error } = fetchLocations();

  if (!locations) {
    return <BeatLoader color="#b32a33" />;
  }

  if (error) {
    return <p>Error fetching data: {error.message}</p>;
  }

  return (
    <>
      <Header />
      <section className="blog-home">
        <h2 className="blog-home__header">Spanish</h2>
        <article className="locationfinder">
          {locations.map((location) => (
            <Link
              key={location.id}
              to={`/blog/${location.id}`}
              className="locationfinder__link"
            >
              <h3 className="locationfinder__header">{location.name}</h3>
              <img
                src={location.img}
                alt=""
                className="locationfinder__image"
              />
            </Link>
          ))}
        </article>
      </section>
    </>
  );
}
