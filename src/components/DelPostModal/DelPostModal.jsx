import React from "react";
import ReactDOM from "react-dom";
import "./DelPostModal.scss";
import { useState } from "react";
import axios from "axios";
import closeIcon from "../../assets/icons/close.png";
import { useParams } from "react-router";

const API_URL = import.meta.env.VITE_BACKEND_URL;
console.log(API_URL);

export default function DelPostModal({ open, onClose, fetchPosts, Post }) {
  const [post, setPost] = useState(null);

  if (!open) {
    return null;
  }

  const handleDelete = async () => {
    console.log(Post.id);

    try {
      const { data } = await axios.delete(
        `${API_URL}/locations/posts/${Post.id}`
      );
      console.log("hello");
      fetchPosts();
      setPost(data);
    } catch (error) {
      console.error(error);
    }
  };

  return ReactDOM.createPortal(
    <>
      <div className="overlay" />
      <article className="delete-modal">
        <div className="delete-modal__container">
          <button className="delete-modal__close" onClick={onClose}>
            <img className="delete-modal__close-image" src={closeIcon} alt="" />
          </button>
          <h1 className="delete-modal__header">Delete Post?</h1>
          <p className="delete-modal__body">
            Please confirm that you’d like to delete post
          </p>
        </div>
        <div className="delete-modal__button-wrapper">
          <button
            className="delete-modal__button delete-modal__button--cancel"
            onClick={onClose}
          >
            Cancel
          </button>
          <button
            className="delete-modal__button  delete-modal__button--delete"
            onClick={() => {
              handleDelete();
              onClose();
            }}
          >
            Delete
          </button>
        </div>
      </article>
    </>,
    document.getElementById("delete-portal")
  );
}
