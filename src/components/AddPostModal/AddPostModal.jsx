import React from "react";
import ReactDOM from "react-dom";
import "./AddPostModal.scss";
import { useState } from "react";
import axios from "axios";
import closeIcon from "../../assets/icons/close.png";
import { useParams } from "react-router";

const API_URL = import.meta.env.VITE_BACKEND_URL;

export default function AddPostModel({ open, onClose, fetchPosts, posts }) {
  const [error, setError] = useState(null);
  const { id } = useParams();
  const [formSubmitted, setFormSubmitted] = useState(false);

  if (!open) {
    return null;
  }

  const handleAddPost = async (event) => {
    event.preventDefault();

    const location_id = id;
    const title = event.target.title.value;
    const content = event.target.content.value;

    const result = {
      location_id,
      title,
      content,
    };

    if (!title || !content) {
      return;
    }

    try {
      await axios.post(`${API_URL}/locations/${id}/posts`, result);
      setFormSubmitted(true);
      onClose();
      fetchPosts(id);
    } catch (error) {
      console.error(error);
    }
  };

  return ReactDOM.createPortal(
    <>
      <div className="overlay" />
      <article className="modal">
        <div>
          <button className="modal__close" onClick={onClose}>
            <img className="modal__close-image" src={closeIcon} alt="" />
          </button>
        </div>
        <form
          className="modal__form"
          onSubmit={(event) => {
            handleAddPost(event);
          }}
        >
          <div className="modal__form__box">
            <label className="modal__form__label" htmlFor="title">
              Name
            </label>
            <input
              className="modal__input modal__input--title"
              type="text"
              name="title"
            />
          </div>
          <div className="modal__form__box">
            <label className="modal__form__label" htmlFor="title">
              Description
            </label>
            <input
              className="modal__input modal__input--content"
              type="text"
              name="content"
            />
          </div>
          <div className="modal__button-wrapper">
            <button
              className="modal__button modal__button--cancel"
              onClick={onClose}
            >
              Cancel
            </button>
            <button type="submit" className="modal__button  modal__button--add">
              Add post
            </button>
          </div>
        </form>
      </article>
    </>,
    document.getElementById("portal")
  );
}
