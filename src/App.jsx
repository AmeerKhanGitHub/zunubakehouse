// App.jsx
import { useEffect } from "react";
import { Routes, Route } from "react-router-dom";
import { SITE } from "./constants/values";
import Header from "./components/Header";
import Footer from "./components/Footer";
import StickyMenu from "./components/StickyMenu"; // ADD THIS
import Home from "./components/Home";
import SectionPage from "./components/SectionPage";
import GalleryPage from "./components/pages/GalleryPage";
import AddOnsPage from "./components/pages/AddOnsPage"; // ADD THIS
import ScrollToTop from "./components/ScrollToTop";

export default function App() {
  useEffect(() => {
    document.title = SITE.meta.title;
    const desc = document.querySelector('meta[name="description"]');
    if (desc) desc.setAttribute("content", SITE.meta.description);
    const keys = document.querySelector('meta[name="keywords"]');
    if (keys) keys.setAttribute("content", SITE.meta.keywords);
  }, []);

  return (
    <>
      <Header />
      <StickyMenu /> {/* ADD THIS - sits below header */}
      <div style={{ paddingTop: '10vh', paddingBottom: '0', minHeight: '100vh' }}>
        <ScrollToTop />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/section/:sect" element={<SectionPage />} />
          <Route path="/gallery" element={<GalleryPage />} />
          <Route path="/addons" element={<AddOnsPage />} /> {/* ADD THIS */}
          <Route path="*" element={<Home />} />
        </Routes>
      </div>
      <Footer />
    </>
  );
}
