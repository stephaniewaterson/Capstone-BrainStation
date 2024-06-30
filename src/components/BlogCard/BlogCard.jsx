export default function BlogCard({ post }) {
  const date = new Date(post.timestamp);

  return (
    <article className="post">
      <img src="" alt="" className="post__icon" />
      <div className="post__content">
        <div className="post__info">
          <h3 className="post__name">{post.title}</h3>
        </div>
        <p className="post__text">{post.content}</p>
      </div>
    </article>
  );
}
