import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";
import HomePage from "./pages/HomePage/HomePage";
import BlogPage from "./pages/BlogPage/BlogPage";
import AddPost from "./pages/AddPost/AddPost";
import "./App.scss";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/blog/:id" element={<BlogPage />} />
        <Route path="/blog/:id/add" element={<AddPost />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
