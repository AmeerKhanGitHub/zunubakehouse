import { useEffect } from "react";
import { useLocation } from "react-router-dom";

export default function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    // Reset both documentElement and body for cross-browser consistency
    if (typeof window !== "undefined") {
      document.documentElement.scrollTo({ top: 0, left: 0, behavior: "instant" });
      document.body.scrollTop = 0; // fallback
      window.scrollTo(0, 0);       // fallback
    }
  }, [pathname]);

  return null;
}
