import "./BlogPosts.scss";
import BlogCard from "../BlogCard/BlogCard";
import { BeatLoader } from "react-spinners";
import { useParams } from "react-router";

export default function BlogPosts({ posts, fetchPosts, user }) {
  return (
    <section className="blog">
      <article className="blog__article">
        <h2 className="blog__title">{posts.title}</h2>
        {posts.map((post) => {
          return (
            <BlogCard
              key={post.id}
              post={post}
              fetchPosts={fetchPosts}
              posts={posts}
              user={user}
            />
          );
        })}
      </article>
    </section>
  );
}
