import "./BlogPosts.scss";
import BlogCard from "../BlogCard/BlogCard";
import { BeatLoader } from "react-spinners";
import { useParams } from "react-router";
import BlogComments from "../../components/BlogComments/BlogComments.jsx";

export default function BlogPosts({ posts }) {
  return (
    <section className="blog">
      <article className="blog__article">
        <h2 className="blog__title">{posts.title}</h2>
        {posts.map((post) => {
          return <BlogCard key={post.id} post={post} />;
        })}
      </article>
      <BlogComments />
    </section>
  );
}
