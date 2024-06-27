import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import NavBar from "../../components/NavBar/NavBar";
import BlogPosts from "../../components/BlogPosts/BlogPosts";

const API_URL = import.meta.env.VITE_BACKEND_URL;

export default function BlogPage() {
  const { id } = useParams();
  const [posts, setPosts] = useState(null);
  const fetchPosts = async (id) => {
    try {
      const { data } = await axios.get(`${API_URL}}/api/posts/${id}`);
      setPosts(data);
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    fetchPosts(id);
  }, [id]);

  if (!posts) {
    return <> Loading...</>;
  }
  return (
    <>
      <NavBar />;
      <BlogPosts />;
    </>
  );
}
