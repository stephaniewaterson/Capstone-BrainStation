import React from "react";
import ReactDOM from "react-dom";
import "./AddPostModal.scss";
import { useState } from "react";
import axios from "axios";
import closeIcon from "../../assets/icons/close.png";
import { useParams } from "react-router";

const API_URL = import.meta.env.VITE_BACKEND_URL;

export default function AddPostModel({ open, onClose, fetchPosts }) {
  const [post, setPost] = useState(null);
  const { id } = useParams();

  if (!open) {
    return null;
  }

  const handleAddPost = async () => {
    try {
      const { data } = await axios.post(`${API_URL}/locations/${id}/posts`);
      fetchPosts();
      setPost(data);
    } catch (error) {
      console.error(error);
    }
  };

  return ReactDOM.createPortal(
    <>
      <div className="overlay" />
      <article className="modal">
        <div>
          <button className="modal__close">
            <img className="modal__close-image" src={closeIcon} alt="" />
          </button>
        </div>
        <form className="modal__form" action="submit">
          <input className="modal__input" type="text" />
        </form>
        <div className="modal__button-wrapper">
          <button
            className="modal__button modal__button--cancel"
            onClick={onClose}
          >
            Cancel
          </button>
          <button
            className="modal__button  modal__button--add"
            onClick={() => {
              handleAddPost();
              onClose();
            }}
          >
            Add post
          </button>
        </div>
      </article>
    </>,
    document.getElementById("portal")
  );
}
