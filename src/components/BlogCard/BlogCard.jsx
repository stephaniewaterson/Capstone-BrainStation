import { useEffect, useState } from "react";
import "./BlogCard.scss";
import axios from "axios";

export default function BlogCard({ post }) {
  const API_URL = import.meta.env.VITE_BACKEND_URL;

  const date = new Date(post.timestamp);
  const [comments, setComments] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  const fetchComments = async () => {
    try {
      const { data } = await axios.get(`${API_URL}/posts/${post.id}/comments`);
      setComments(data);
      setIsLoading(false);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchComments();
  }, []);

  if (isLoading) {
    return <p>is loading...</p>;
  }

  return (
    <>
      <article className="post">
        <img src="" alt="" className="post__icon" />
        <div className="post__content">
          <div className="post__info">
            <h3 className="post__name">{post.title}</h3>
          </div>
          <p className="post__text">{post.content}</p>
        </div>
      </article>
      {comments.map((comment) => {
        return (
          <article key={comment.id} className="comment">
            <p>{comment.name}</p>
            <p>{comment.comment}</p>
          </article>
        );
      })}
    </>
  );
}
