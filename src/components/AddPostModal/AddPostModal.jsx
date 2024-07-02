import React from "react";
import ReactDOM from "react-dom";
import "./AddPostModal.scss";
import { useState } from "react";
import axios from "axios";
import closeIcon from "../../assets/icons/close.png";

const API_URL = import.meta.env.VITE_BACKEND_URL;

export default function AddPostModel({
  open,
  onClose,
  posts,
  locationId,
  fetchPosts,
}) {
  const [post, setPost] = useState(null);

  if (!open) {
    return null;
  }

  const handleAddPost = async () => {
    try {
      const { data } = await axios.post(
        `${API_URL}/api/locations/${locationId}/posts`
      );
      fetchPosts();
      setPost(data);
    } catch (error) {
      console.error(error);
    }
  };

  const findPost = posts.find((post) => post.id === locationId);

  return ReactDOM.createPortal(
    <>
      <div className="overlay" />
      <article className="modal">
        <div className="modal__container">
          <button className="modal__close" onClick={onClose}>
            <img className="modal__close-image" src={closeIcon} alt="" />
          </button>
        </div>
        <div className="modal__button-wrapper">
          <button
            className="modal__button modal__button--cancel"
            onClick={onClose}
          >
            Cancel
          </button>
          <button
            className="modal__button  modal__button--delete"
            onClick={() => {
              handleDelete();
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
