// components/ReviewsCarousel.jsx
import { useState, useEffect } from "react";
import { Container } from "react-bootstrap";
import { BsStarFill, BsChevronLeft, BsChevronRight } from "react-icons/bs";

// Real reviews from Google - UPDATE THESE MANUALLY as new reviews come in
const REVIEWS = [
  {
    author: "Mohinish Sahai",
    rating: 5,
    text: "Absolutely loved the mango cake from Zunu Bakehouse! 🥭🍰 The flavor was rich, fresh, and perfectly balanced—not overly sweet, with a real mango taste that stood out. The design was truly marvellous, looking as amazing as it tasted. It's hard to believe such great texture and flavor came from an eggless cake—soft, moist, and delicious in every bite. On top of that, it's excellent value for money. Highly recommended for anyone looking for a beautiful, tasty, and high-quality cake. Will definitely be ordering again!",
    category: "Takeaway | Other | €20–30"
  },
  {
    author: "Ardra Santhosh",
    rating: 5,
    text: '', // Empty text - just stars
    category: "Takeaway"
  }
];

// UPDATE THESE as you get more reviews
const OVERALL_RATING = 5.0;
const TOTAL_REVIEWS = 2;

const GOOGLE_REVIEW_LINK = "https://share.google/IHG9kLajFTE3qSDCq";

export default function ReviewsCarousel() {
  const [current, setCurrent] = useState(0);
  const [isMobile, setIsMobile] = useState(window.innerWidth < 768);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth < 768);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // Auto-rotate every 6 seconds
  useEffect(() => {
    if (!isAutoPlaying || REVIEWS.length <= 1) return;
    const interval = setInterval(() => {
      setCurrent(c => (c + 1) % REVIEWS.length);
    }, 6000);
    return () => clearInterval(interval);
  }, [isAutoPlaying]);

  const prev = () => {
    setIsAutoPlaying(false);
    setCurrent(c => (c - 1 + REVIEWS.length) % REVIEWS.length);
  };

  const next = () => {
    setIsAutoPlaying(false);
    setCurrent(c => (c + 1) % REVIEWS.length);
  };

  if (REVIEWS.length === 0) return null;

  const currentReview = REVIEWS[current];
  const hasText = currentReview.text && currentReview.text.trim().length > 0;

  return (
    <Container
      style={{
        backgroundColor: "#FFF9F0",
        borderRadius: "1rem",
        padding: isMobile ? "2rem 1rem" : "3rem 2rem",
        marginBottom: "2rem",
        boxShadow: "0 4px 16px rgba(60,20,50,0.06)",
        position: "relative"
      }}
    >
      <h2 style={{
        color: "#773953",
        fontWeight: "700",
        fontSize: isMobile ? "1.4rem" : "1.8rem",
        textAlign: "center",
        marginBottom: "0.75rem",
        letterSpacing: "1px"
      }}>
        What Our Customers Say
      </h2>

      {/* Overall Rating Display */}
      <div style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        gap: "0.5rem",
        marginBottom: "2rem"
      }}>
        <div style={{
          display: "flex",
          alignItems: "center",
          gap: "0.5rem"
        }}>
          <span style={{
            color: "#000",
            fontWeight: "700",
            fontSize: isMobile ? "1.5rem" : "1.8rem"
          }}>
            {OVERALL_RATING.toFixed(1)}
          </span>
          <div style={{
            display: "flex",
            gap: "4px"
          }}>
            {[...Array(5)].map((_, i) => (
              <BsStarFill key={i} style={{
                color: "#FFD700",
                fontSize: isMobile ? "1.1rem" : "1.3rem"
              }} />
            ))}
          </div>
        </div>
        <span style={{
          color: "#666",
          fontSize: isMobile ? "0.9rem" : "1rem",
          fontWeight: "500"
        }}>
          ({TOTAL_REVIEWS} {TOTAL_REVIEWS === 1 ? 'review' : 'reviews'})
        </span>
      </div>

      {/* Review Card */}
      <div style={{
        background: "#fff",
        borderRadius: "12px",
        padding: isMobile ? "1.5rem" : "2rem",
        boxShadow: "0 2px 12px rgba(0,0,0,0.08)",
        minHeight: hasText ? (isMobile ? "180px" : "200px") : (isMobile ? "100px" : "120px"),
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        margin: "0 auto",
        maxWidth: "800px",
        position: "relative"
      }}>
        <div style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "flex-start",
          marginBottom: hasText ? "0.75rem" : "0",
          flexWrap: "wrap",
          gap: "0.5rem"
        }}>
          <div>
            <h4 style={{
              color: "#000",
              fontWeight: "600",
              fontSize: isMobile ? "1rem" : "1.1rem",
              margin: "0 0 0.25rem 0"
            }}>
              {currentReview.author}
            </h4>
            {currentReview.category && (
              <span style={{
                color: "#999",
                fontSize: isMobile ? "0.75rem" : "0.85rem",
                display: "block"
              }}>
                {currentReview.category}
              </span>
            )}
          </div>
          <div style={{ display: "flex", gap: "2px" }}>
            {[...Array(currentReview.rating)].map((_, i) => (
              <BsStarFill key={i} style={{ color: "#FFD700", fontSize: "1rem" }} />
            ))}
          </div>
        </div>

        {hasText && (
          <p style={{
            color: "#444",
            fontSize: isMobile ? "0.9rem" : "1rem",
            lineHeight: "1.6",
            margin: 0,
            fontStyle: "italic"
          }}>
            "{currentReview.text}"
          </p>
        )}

        {!hasText && (
          <p style={{
            color: "#999",
            fontSize: isMobile ? "0.85rem" : "0.95rem",
            fontStyle: "italic",
            textAlign: "center",
            margin: "1rem 0 0 0"
          }}>
            Left a 5-star rating
          </p>
        )}

        {/* Navigation Arrows - only show if more than 1 review */}
        {REVIEWS.length > 1 && (
          <>
            <button
              onClick={prev}
              style={{
                position: "absolute",
                left: isMobile ? "-10px" : "-15px",
                top: "50%",
                transform: "translateY(-50%)",
                background: "#fff",
                border: "2px solid #CD5C8A",
                borderRadius: "50%",
                width: isMobile ? 32 : 40,
                height: isMobile ? 32 : 40,
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                cursor: "pointer",
                boxShadow: "0 2px 8px rgba(0,0,0,0.1)",
                transition: "all 0.2s",
                color: "#CD5C8A"
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.background = "#CD5C8A";
                e.currentTarget.style.color = "#fff";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.background = "#fff";
                e.currentTarget.style.color = "#CD5C8A";
              }}
            >
              <BsChevronLeft style={{ fontSize: isMobile ? 14 : 16 }} />
            </button>

            <button
              onClick={next}
              style={{
                position: "absolute",
                right: isMobile ? "-10px" : "-15px",
                top: "50%",
                transform: "translateY(-50%)",
                background: "#fff",
                border: "2px solid #CD5C8A",
                borderRadius: "50%",
                width: isMobile ? 32 : 40,
                height: isMobile ? 32 : 40,
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                cursor: "pointer",
                boxShadow: "0 2px 8px rgba(0,0,0,0.1)",
                transition: "all 0.2s",
                color: "#CD5C8A"
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.background = "#CD5C8A";
                e.currentTarget.style.color = "#fff";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.background = "#fff";
                e.currentTarget.style.color = "#CD5C8A";
              }}
            >
              <BsChevronRight style={{ fontSize: isMobile ? 14 : 16 }} />
            </button>
          </>
        )}
      </div>

      {/* Dots indicator with Smart Display - only show if more than 1 review */}
      {REVIEWS.length > 1 && (
        <div style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          gap: "8px",
          marginTop: "1.5rem",
          flexWrap: "wrap"
        }}>
          {REVIEWS.map((_, i) => {
            // On mobile with many reviews, show only dots near current index
            if (isMobile && REVIEWS.length > 7) {
              const isNearCurrent = Math.abs(i - current) <= 2;
              const isFirst = i === 0;
              const isLast = i === REVIEWS.length - 1;

              if (!isNearCurrent && !isFirst && !isLast) {
                // Show ellipsis for gaps
                if (i === current - 3 || i === current + 3) {
                  return (
                    <span
                      key={i}
                      style={{
                        color: "#999",
                        fontSize: "1.2rem",
                        lineHeight: "8px",
                        userSelect: "none"
                      }}
                    >
                      ⋯
                    </span>
                  );
                }
                return null;
              }
            }

            return (
              <button
                key={i}
                onClick={() => {
                  setCurrent(i);
                  setIsAutoPlaying(false);
                }}
                style={{
                  width: current === i ? "24px" : "8px",
                  height: "8px",
                  borderRadius: "4px",
                  border: "none",
                  background: current === i ? "#CD5C8A" : "#ddd",
                  cursor: "pointer",
                  transition: "all 0.3s",
                  flexShrink: 0
                }}
              />
            );
          })}
        </div>
      )}

      {/* CTA */}
      <div style={{
        textAlign: "center",
        marginTop: "2rem"
      }}>
        <a
          href={GOOGLE_REVIEW_LINK}
          target="_blank"
          rel="noopener noreferrer"
          style={{
            display: "inline-block",
            background: "#CD5C8A",
            color: "#fff",
            padding: isMobile ? "10px 20px" : "12px 28px",
            borderRadius: "25px",
            fontWeight: "600",
            fontSize: isMobile ? "0.95rem" : "1.05rem",
            textDecoration: "none",
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
          Leave a Review on Google
        </a>
      </div>
    </Container>
  );
}
