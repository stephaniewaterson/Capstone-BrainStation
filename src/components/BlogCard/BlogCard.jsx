import { useEffect, useState } from "react";
import "./BlogCard.scss";
import axios from "axios";

export default function BlogCard({ post }) {
  const API_URL = import.meta.env.VITE_BACKEND_URL;

  const date = new Date(post.timestamp);
  const [comments, setComments] = useState(null);

  const fetchComments = async () => {
    try {
      const { data } = await axios.get(`${API_URL}/posts/${post.id}/comments`);
      setComments(data);
      console.log(data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchComments();
  }, []);

  console.log(comments);

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
      {/* {comments
        .filter((comment) => comment.id === post.id)
        .map((comment) => {
          return (
            <article className="comment">
              <p>{comment.name}</p>
              <p>{comment.comment}</p>
            </article>
          );
        })} */}
    </>
  );
}
