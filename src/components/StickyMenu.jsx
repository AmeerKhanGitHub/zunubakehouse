// components/StickyMenu.jsx
import { useState, useEffect } from "react";
import { useNavigate, useLocation } from "react-router-dom";

const MENU_ITEMS = [
  { label: "Cakes", path: "/section/cakesForAllOccasions" },
  { label: "Tres Leches", path: "/section/tresLeches" },
  { label: "Add Ons", path: "/addons" }
];

export default function StickyMenu() {
  const navigate = useNavigate();
  const location = useLocation();
  const [isMobile, setIsMobile] = useState(window.innerWidth < 768);

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth < 768);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const isActive = (path) => location.pathname === path;

  return (
    <nav
      style={{
        position: "sticky",
        top: "10vh",
        left: 0,
        right: 0,
        backgroundColor: "#F3E5F5",
        borderBottom: "2px solid #E0E0E0",
        boxShadow: "0 2px 8px rgba(0,0,0,0.08)",
        zIndex: 999,
        padding: isMobile ? "0.75rem 1rem" : "1rem 2rem"
      }}
    >
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          gap: isMobile ? "1rem" : "3rem",
          maxWidth: "1200px",
          margin: "0 auto"
        }}
      >
        {MENU_ITEMS.map((item) => (
          <button
            key={item.path}
            onClick={() => navigate(item.path)}
            style={{
              background: "transparent",
              border: "none",
              color: isActive(item.path) ? "#CD5C8A" : "#333",
              fontSize: isMobile ? "0.95rem" : "1.1rem",
              fontWeight: isActive(item.path) ? "700" : "600",
              cursor: "pointer",
              padding: isMobile ? "0.5rem 0.75rem" : "0.75rem 1.5rem",
              borderRadius: "8px",
              transition: "all 0.2s ease",
              position: "relative",
              textTransform: "uppercase",
              letterSpacing: "0.5px"
            }}
            onMouseEnter={(e) => {
              if (!isActive(item.path)) {
                e.currentTarget.style.color = "#CD5C8A";
                e.currentTarget.style.backgroundColor = "rgba(205, 92, 138, 0.08)";
              }
            }}
            onMouseLeave={(e) => {
              if (!isActive(item.path)) {
                e.currentTarget.style.color = "#333";
                e.currentTarget.style.backgroundColor = "transparent";
              }
            }}
          >
            {item.label}
            {isActive(item.path) && (
              <span
                style={{
                  position: "absolute",
                  bottom: "-2px",
                  left: "50%",
                  transform: "translateX(-50%)",
                  width: "60%",
                  height: "3px",
                  backgroundColor: "#CD5C8A",
                  borderRadius: "2px 2px 0 0"
                }}
              />
            )}
          </button>
        ))}
      </div>
    </nav>
  );
}
