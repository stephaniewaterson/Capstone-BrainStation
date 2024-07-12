import { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import axios from "axios";
import Header from "../../components/Header/Header";
import BlogPosts from "../../components/BlogPosts/BlogPosts";
import fetchLocations from "../../utils/FetchLocations.jsx";
import addIcon from "../../assets/icons/add.png";
import "./BlogPage.scss";
import AddPostModal from "../../components/AddPostModal/AddPostModal";

const API_URL = import.meta.env.VITE_BACKEND_URL;

export default function BlogPage({ user }) {
  const [isOpen, setIsOpen] = useState(false);
  const { locations, error, fetchData } = fetchLocations();

  const { id } = useParams();
  const [posts, setPosts] = useState(null);

  const fetchPosts = async (id) => {
    try {
      const { data } = await axios.get(`${API_URL}/locations/${id}/posts`);
      setPosts(data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchPosts(id);
  }, [id]);

  if (!posts) {
    return <> Loading blog posts...</>;
  }

  function handleClick() {
    setIsOpen(true);
  }

  function showError() {
    return <p>Please log in to post</p>;
  }

  return (
    <>
      <div id="portal">
        <AddPostModal
          open={isOpen}
          posts={posts}
          onClose={() => setIsOpen(false)}
          fetchPosts={fetchPosts}
        />
      </div>
      <section className="overlap-posts">
        <Header />
        {locations
          .filter((location) => location.id === parseInt(id))
          .map((location) => {
            return (
              <h2 key={location.id} className="blog-page__header">
                {location.name}
              </h2>
            );
          })}
        {!user && (
          <Link className="blog-page__dummyadd" to="/login">
            <h3 className="blog-page___dummtadd-header">
              Log in to add a post
            </h3>
            <img className="blog-page__dummyadd-icon" src={addIcon} alt="" />
          </Link>
        )}
        {user && (
          <Link className="blog-page__link" onClick={handleClick}>
            <article className="blog-page__add">
              <h3 className="blog-page___add-header">Add post</h3>
              <img className="blog-page__add-icon" src={addIcon} alt="" />
            </article>
          </Link>
        )}

        <BlogPosts posts={posts} fetchPosts={fetchPosts} user={user} />
      </section>
    </>
  );
}
