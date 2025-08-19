import { useEffect } from "react";
import { Routes, Route } from "react-router-dom";
import { SITE } from "./constants/values";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Home from "./components/Home";
import SectionPage from "./components/SectionPage";

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
      <div style={{ paddingTop: '10vh', paddingBottom: '0' }}>  {/* Removed bottom padding */}
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/section/:sect" element={<SectionPage />} />
          <Route path="*" element={<Home />} />
        </Routes>
      </div>
      <Footer />
    </>
  );
}
