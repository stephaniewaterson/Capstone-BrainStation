import Header from "../../components/Header/Header";
import fetchLocations from "../../utils/FetchLocations.jsx";
import "./BlogHome.scss";
import { Link, useParams } from "react-router-dom";
import { useState } from "react";
import { BeatLoader } from "react-spinners";

export default function BlogHome() {
  const { id } = useParams();
  const [location, setLocation] = useState(null);

  const { locations, error } = fetchLocations();

  if (!locations) {
    return <BeatLoader color="#2e66e5" />;
  }

  if (error) {
    return <p>Error fetching data: {error.message}</p>;
  }

  return (
    <section className="home">
      <h2 className="home__header">Spanish</h2>
      {locations.map((location) => (
        <Link>
          <article className="locationfinder">
            <h3 className="locationfinder__header">{location.name}</h3>
          </article>
        </Link>
      ))}

      <div className="home__section"></div>
    </section>
  );
}
