import { BrowserRouter, Routes, Route } from "react-router-dom";
import Footer from "./components/Footer/Footer";
import BlogHome from "./pages/BlogHome/BlogHome";
import BlogPage from "./pages/BlogPage/BlogPage";
import HomePage from "./pages/HomePage/HomePage";
import NavBar from "./components/NavBar/NavBar";
import HelpPage from "./pages/HelpPage/HelpPage";
import Chat from "./pages/Chat/Chat";
import Login from "./pages/Login/Login";
import "./App.scss";
import Signup from "./pages/SignUp/SignUp";
import { useEffect, useState } from "react";
import axios from "axios";
import useNetworkStatus from "./components/NextworkContext/NextworkContext";

function App() {
  const [user, setUser] = useState(null);

  const checkIsLoggedIn = async () => {
    const token = sessionStorage.getItem("token");

    if (!token) {
      setUser(null);
      return;
    }

    try {
      const response = await axios.get(
        import.meta.env.VITE_BACKEND_URL + "/users/me",
        { headers: { Authorization: `Bearer ${token}` } }
      );

      // TODO: Ensure this works upon login without having to refresh the page
      setUser(response.data);
    } catch (error) {
      setUser(null);
    }
  };

  useEffect(() => {
    checkIsLoggedIn();
  }, []);

  return (
    <>
      <BrowserRouter>
        <NavBar
          user={user}
          setUser={setUser}
          checkIsLoggedIn={checkIsLoggedIn}
        />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/blog" element={<BlogHome />} />
          <Route path="/blog/:id" element={<BlogPage user={user} />} />
          <Route path="/help" element={<HelpPage />} />
          <Route path="/chat" element={<Chat user={user} />} />
          <Route
            path="/login"
            element={<Login checkIsLoggedIn={checkIsLoggedIn} />}
          />
          <Route path="/signup" element={<Signup />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </>
  );
}

export default App;
