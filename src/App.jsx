import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";
import BlogHome from "./pages/BlogHome/BlogHome";
import BlogPage from "./pages/BlogPage/BlogPage";
import AddPost from "./pages/AddPost/AddPost";
import "./App.scss";

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/blog" element={<BlogHome />} />
        <Route path="/blog/:id" element={<BlogPage />} />
        <Route path="Spanish/blog/:id/add" element={<AddPost />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
