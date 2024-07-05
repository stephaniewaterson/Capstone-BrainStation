import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Footer from "./components/Footer/Footer";
import BlogHome from "./pages/BlogHome/BlogHome";
import BlogPage from "./pages/BlogPage/BlogPage";
import HomePage from "./pages/HomePage/HomePage";
import NavBar from "./components/NavBar/NavBar";
import HelpPage from "./pages/HelpPage/HelpPage";
import Chat from "./pages/Chat/Chat";
import "./App.scss";

function App() {
  return (
    <BrowserRouter>
      <NavBar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/blog" element={<BlogHome />} />
        <Route path="/blog/:id" element={<BlogPage />} />
        <Route path="/help" element={<HelpPage />} />
        <Route path="/chat" element={<Chat />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
