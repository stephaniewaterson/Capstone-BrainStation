import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Footer from "./components/Footer/Footer";
import BlogHome from "./pages/BlogHome/BlogHome";
import BlogPage from "./pages/BlogPage/BlogPage";
import AddPost from "./pages/AddPost/AddPost";
import HomePage from "./pages/HomePage/HomePage";
import NavBar from "./components/NavBar/NavBar";
import HelpPage from "./pages/HelpPage/HelpPage";
import "./App.scss";

function App() {
  return (
    <BrowserRouter>
      <NavBar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/blog" element={<BlogHome />} />
        <Route path="/blog/:id" element={<BlogPage />} />
        <Route path="Spanish/blog/:id/add" element={<AddPost />} />
        <Route path="/help" element={<HelpPage />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
