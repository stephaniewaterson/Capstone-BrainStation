import { useEffect, useState } from "react";
import "./BlogCard.scss";
import axios from "axios";
import addIcon from "../../assets/icons/add.png";

export default function BlogCard({ post }) {
  const API_URL = import.meta.env.VITE_BACKEND_URL;

  const date = new Date(post.timestamp);
  const [comments, setComments] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [formSubmitted, setFormSubmitted] = useState(false);

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

  const handleAddPost = async (event) => {
    event.preventDefault();

    const post_id = post.id;
    const name = event.target.name.value;
    const comment = event.target.comment.value;

    const result = {
      post_id,
      name,
      comment,
    };

    if (name === "") {
      name = "anonymous";
    }

    if (!comment) {
      return;
    }

    try {
      await axios.post(`${API_URL}/posts/${post.id}/comments`, result);
      setFormSubmitted(true);
      fetchComments();
    } catch (error) {
      console.log(error);
    }
  };

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
      <section className="post__comment">
        <h3 className="post__comment-number">Comments</h3>
        {comments.map((comment) => {
          return (
            <article key={comment.id} className="comment">
              <p className="comment__name">{comment.name}</p>
              <p className="comment__text">{comment.comment}</p>
            </article>
          );
        })}
        <form
          className="comment-form"
          onSubmit={(event) => {
            handleAddPost(event);
          }}
        >
          <input
            className="comment-form__input-name"
            type="text"
            name="name"
            placeholder="Name"
          />
          <input
            className="comment-form__input"
            type="text"
            name="comment"
            placeholder="Add comment"
          />
          <button alt="" className="comment-form__add-icon"></button>
        </form>
      </section>
    </>
  );
}
