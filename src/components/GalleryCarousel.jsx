// components/GalleryCarousel.jsx
import { useState, useEffect } from "react";
import { Container } from "react-bootstrap";
import { BsChevronLeft, BsChevronRight } from "react-icons/bs";
import { useNavigate } from "react-router-dom";

// Featured gallery images for the carousel
const GALLERY_IMAGES = [
  "/images/Gallery/1.jpeg",
    "/images/Gallery/2.jpeg",
    "/images/Gallery/3.jpeg",
    "/images/Gallery/4.jpeg",
    "/images/Gallery/5.jpeg",
    "/images/Gallery/6.jpeg",
    "/images/Gallery/7.jpeg",
    "/images/Gallery/8.jpeg",
    "/images/Gallery/9.jpeg",
    "/images/Gallery/13.jpg",
    "/images/Gallery/14.jpg",
    "/images/Gallery/15.jpg",
    "/images/Gallery/16.jpg",
    "/images/Gallery/17.jpg",
    "/images/Gallery/18.jpg",
    "/images/Gallery/19.jpg",
    "/images/Gallery/20.jpg",
    "/images/Gallery/21.jpg",
    "/images/Gallery/22.jpg",
    "/images/Gallery/23.jpg",
    "/images/Gallery/24.jpg",
    "/images/Gallery/25.jpg",
    "/images/Gallery/26.jpg",
    "/images/Gallery/27.jpg",
    "/images/Gallery/28.jpg",
    "/images/Gallery/29.jpg",
    "/images/Gallery/30.jpg",
    "/images/Gallery/31.jpg",
    "/images/Gallery/32.jpg",
    "/images/Gallery/33.jpg",
    "/images/Gallery/34.jpg",
    "/images/Gallery/35.jpg",
];

export default function GalleryCarousel() {
  const navigate = useNavigate();
  const [current, setCurrent] = useState(0);
  const [isMobile, setIsMobile] = useState(window.innerWidth < 768);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth < 768);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // Auto-slide every 3 seconds
  useEffect(() => {
    if (!isAutoPlaying || GALLERY_IMAGES.length <= 1) return;
    const interval = setInterval(() => {
      setCurrent(c => (c + 1) % GALLERY_IMAGES.length);
    }, 3000);
    return () => clearInterval(interval);
  }, [isAutoPlaying]);

  const prev = () => {
    setIsAutoPlaying(false);
    setCurrent(c => (c - 1 + GALLERY_IMAGES.length) % GALLERY_IMAGES.length);
  };

  const next = () => {
    setIsAutoPlaying(false);
    setCurrent(c => (c + 1) % GALLERY_IMAGES.length);
  };

  // Get 3 consecutive images (or 1 on mobile)
  const getVisibleImages = () => {
    if (isMobile) {
      return [GALLERY_IMAGES[current]];
    }

    const images = [];
    for (let i = 0; i < 3; i++) {
      const index = (current + i) % GALLERY_IMAGES.length;
      images.push(GALLERY_IMAGES[index]);
    }
    return images;
  };

  const visibleImages = getVisibleImages();

  if (GALLERY_IMAGES.length === 0) return null;

  return (
    <Container
      style={{
        backgroundColor: "#FFF3E0",
        borderRadius: "1rem",
        padding: isMobile ? "2rem 1rem" : "3rem 2rem",
        marginBottom: "2rem",
        boxShadow: "0 4px 16px rgba(60,20,50,0.06)",
        position: "relative"
      }}
    >
      {/* Heading */}
      <h2 style={{
        color: "#773953",
        fontWeight: "700",
        fontSize: isMobile ? "1.4rem" : "1.8rem",
        textAlign: "center",
        marginBottom: "0.75rem",
        letterSpacing: "1px"
      }}>
        Our Creations
      </h2>

      <p style={{
        color: "#666",
        fontSize: isMobile ? "0.95rem" : "1.05rem",
        textAlign: "center",
        marginBottom: "2rem",
        lineHeight: 1.5
      }}>
        Browse through our collection of beautifully crafted cakes,
        from elegant celebrations to fun-filled occasions.
      </p>

      {/* Multi-Image Carousel */}
      <div style={{
        position: "relative",
        maxWidth: "1100px",
        margin: "0 auto 2rem",
        padding: isMobile ? "0" : "0 60px" // Space for arrows on desktop
      }}>
        <div style={{
          display: "flex",
          gap: isMobile ? "0" : "1rem",
          justifyContent: "center",
          alignItems: "center"
        }}>
          {visibleImages.map((img, idx) => (
            <div
              key={idx}
              style={{
                flex: isMobile ? "1" : "0 0 calc(33.333% - 0.67rem)",
                height: isMobile ? "280px" : "320px",
                borderRadius: "12px",
                overflow: "hidden",
                boxShadow: "0 4px 12px rgba(0,0,0,0.1)",
                transition: "transform 0.3s ease"
              }}
            >
              <img
                src={img}
                alt="Zunu Bakehouse creation"
                style={{
                  width: "100%",
                  height: "100%",
                  objectFit: "cover",
                  display: "block"
                }}
              />
            </div>
          ))}
        </div>

        {/* Navigation Arrows */}
        {GALLERY_IMAGES.length > 1 && (
          <>
            <button
              onClick={prev}
              style={{
                position: "absolute",
                left: isMobile ? "10px" : "0",
                top: "50%",
                transform: "translateY(-50%)",
                background: "rgba(255, 255, 255, 0.95)",
                border: "2px solid #CD5C8A",
                borderRadius: "50%",
                width: isMobile ? 40 : 50,
                height: isMobile ? 40 : 50,
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                cursor: "pointer",
                boxShadow: "0 2px 12px rgba(0,0,0,0.2)",
                transition: "all 0.2s",
                color: "#CD5C8A",
                zIndex: 10
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.background = "#CD5C8A";
                e.currentTarget.style.color = "#fff";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.background = "rgba(255, 255, 255, 0.95)";
                e.currentTarget.style.color = "#CD5C8A";
              }}
            >
              <BsChevronLeft style={{ fontSize: isMobile ? 18 : 22 }} />
            </button>

            <button
              onClick={next}
              style={{
                position: "absolute",
                right: isMobile ? "10px" : "0",
                top: "50%",
                transform: "translateY(-50%)",
                background: "rgba(255, 255, 255, 0.95)",
                border: "2px solid #CD5C8A",
                borderRadius: "50%",
                width: isMobile ? 40 : 50,
                height: isMobile ? 40 : 50,
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                cursor: "pointer",
                boxShadow: "0 2px 12px rgba(0,0,0,0.2)",
                transition: "all 0.2s",
                color: "#CD5C8A",
                zIndex: 10
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.background = "#CD5C8A";
                e.currentTarget.style.color = "#fff";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.background = "rgba(255, 255, 255, 0.95)";
                e.currentTarget.style.color = "#CD5C8A";
              }}
            >
              <BsChevronRight style={{ fontSize: isMobile ? 18 : 22 }} />
            </button>
          </>
        )}
      </div>

      {/* Dots Indicator */}
      {GALLERY_IMAGES.length > 1 && (
        <div style={{
          display: "flex",
          justifyContent: "center",
          gap: "8px",
          marginBottom: "2rem"
        }}>
          {GALLERY_IMAGES.map((_, i) => (
            <button
              key={i}
              onClick={() => {
                setCurrent(i);
                setIsAutoPlaying(false);
              }}
              style={{
                width: current === i ? "32px" : "10px",
                height: "10px",
                borderRadius: "5px",
                border: "none",
                background: current === i ? "#CD5C8A" : "#ddd",
                cursor: "pointer",
                transition: "all 0.3s"
              }}
            />
          ))}
        </div>
      )}

      {/* Explore Gallery Button */}
      <div style={{
        textAlign: "center"
      }}>
        <button
          onClick={() => navigate('/gallery')}
          style={{
            display: "inline-block",
            background: "#CD5C8A",
            color: "#fff",
            padding: isMobile ? "12px 28px" : "14px 36px",
            borderRadius: "25px",
            fontWeight: "600",
            fontSize: isMobile ? "0.95rem" : "1.1rem",
            border: "none",
            cursor: "pointer",
            boxShadow: "0 4px 12px rgba(205, 92, 138, 0.3)",
            transition: "transform 0.2s ease, box-shadow 0.2s ease"
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.transform = "translateY(-2px)";
            e.currentTarget.style.boxShadow = "0 6px 16px rgba(205, 92, 138, 0.4)";
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.transform = "translateY(0)";
            e.currentTarget.style.boxShadow = "0 4px 12px rgba(205, 92, 138, 0.3)";
          }}
        >
          Explore Gallery
        </button>
      </div>
    </Container>
  );
}
