import "./index.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

// Components
import Navigation from "./Components/Navigation";
import Footer from "./Components/Footer";
import Lenisscroll from "./Components/Lenisscroll";

// Pages
import ContactPage from "./Pages/ContactPage";
import HomePage from "./Pages/HomePage";
import BlogPage from "./Pages/BlogPage";
import ProjectPage from "./Pages/ProjectPage";
import BlogsPage from "./Pages/BlogsPage";
import ProductPage from "./Pages/ProductPage";

import { CartProvider } from "./CartContext.tsx";
export default function App() {
  return (
    <CartProvider>
      <Router>
        <div className="App">
          <Lenisscroll />
          <Navigation />

          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/contactpage" element={<ContactPage />} />
            <Route path="/blogpage" element={<BlogPage />} />
            <Route path="/projectpage" element={<ProjectPage />} />
            <Route path="/blogspage" element={<BlogsPage />} />
            <Route path="/productpage" element={<ProductPage />} />
          </Routes>

          <Footer />
        </div>
      </Router>
    </CartProvider>
  );
}
