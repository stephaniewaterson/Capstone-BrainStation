import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import NavBar from "../../components/NavBar/NavBar";
import Header from "../../components/Header/Header";
import BlogPosts from "../../components/BlogPosts/BlogPosts";
import fetchLocations from "../../utils/FetchLocations.jsx";
import "./BlogPage.scss";

const API_URL = import.meta.env.VITE_BACKEND_URL;

export default function BlogPage() {
  const { locations, error } = fetchLocations();

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

  return (
    <>
      <NavBar />
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
      <BlogPosts posts={posts} />
    </>
  );
}
