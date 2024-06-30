import "./BlogPosts.scss";
import BlogCard from "../BlogCard/BlogCard";
import fetchLocations from "../../utils/FetchLocations.jsx";
import { BeatLoader } from "react-spinners";
import { useParams } from "react-router";

export default function BlogPosts({ posts }) {
  const { locations, error } = fetchLocations();
  const { id } = useParams();

  if (!locations) {
    return <BeatLoader color="#b32a33" />;
  }

  if (error) {
    return <p>Error fetching data: {error.message}</p>;
  }

  function getBlogHeader() {
    for (const location of location) {
      return <h3 className="blog__header">{location.name}</h3>;
    }
  }

  return (
    <section className="blog">
      <article className="blog__article">
        <h2 className="blog__title">{posts.title}</h2>
        {posts.map((post) => {
          return <BlogCard key={post.id} post={post} />;
        })}
      </article>
    </section>
  );
}

// {locations.map((location) => {
//   <h3 className="blog__header">{location.name}</h3>;
// })}
