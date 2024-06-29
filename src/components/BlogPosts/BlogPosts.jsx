import "./BlogPosts.scss";
import PostCard from "../PostCard/PostCard";

export default function BlogPosts({ posts }) {
  return (
    <section className="blog">
      <h3 className="blog__header">Colombia</h3>
      <article className="blog__article">
        <h2 className="blog__title">{posts.title}</h2>
        {posts.map((post) => {
          return <PostCard key={post.id} post={post} />;
        })}
      </article>
    </section>
  );
}
