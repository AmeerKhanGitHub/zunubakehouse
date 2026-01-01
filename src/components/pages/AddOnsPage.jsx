// components/pages/AddOnsPage.jsx
import { useState, useEffect } from "react";
import { Container, Row, Col, Card } from "react-bootstrap";
import MainFooter from "../MainFooter";

const ADD_ONS = [
  {
    name: "Happy Birthday Topper",
    price: 1,
    description: "Designer birthday cake topper",
    image: "/images/Gallery/23.jpg" // Add your image here
  },
  {
    name: "Happy Anniversary Topper",
    price: 1,
    description: "Designer anniversary cake topper",
    label: null,
    image: "/images/Gallery/15.jpg"
  },
  {
    name: "Personalized Message",
    price: 3,
    description: "Custom message written using chocolate",
    image: "/images/Gallery/32.jpg"
  },
  {
    name: "Cake Candle Pack of 6",
    price: 2,
    description: "Set of 6 decorative birthday candles",
    label: null,
    image: "/images/AddOns/candles.jpg"
  }
];

export default function AddOnsPage() {
  const [isMobile, setIsMobile] = useState(window.innerWidth < 768);

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth < 768);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  useEffect(() => { window.scrollTo(0, 0); }, []);

  const getLabelColor = (label) => {
    switch (label) {
      case "Best-seller": return "#FF6B6B";
      case "Popular": return "#4ECDC4";
      default: return "#4ECDC4";
    }
  };

  // Sort: labeled items first, then by price
  const sortedAddOns = [...ADD_ONS].sort((a, b) => {
    const aHas = a.label != null;
    const bHas = b.label != null;
    if (aHas && !bHas) return -1;
    if (!aHas && bHas) return 1;
    return a.price - b.price;
  });

  return (
    <div style={{ background: "#FFF9F0", minHeight: "100vh", paddingBottom: "12vh" }}>
      <Container style={{ paddingTop: "2rem" }}>
        <div style={{ maxWidth: 900, margin: "0 auto 3rem", textAlign: "center" }}>
          <h1
            style={{
              color: "#773953",
              fontWeight: 800,
              fontSize: isMobile ? "1.6rem" : "2rem",
              letterSpacing: "0.5px",
              marginBottom: "0.75rem"
            }}
          >
            Add-Ons
          </h1>
          <p
            style={{
              color: "#444",
              fontSize: isMobile ? "0.95rem" : "1.05rem",
              margin: 0,
              lineHeight: 1.5
            }}
          >
            Personalize your cake with our selection of toppers, messages, and decorations.
            All add-ons can be included with any cake order.
          </p>
        </div>

        <Row xs={1} md={2} className="g-4" style={{ maxWidth: 900, margin: "0 auto 4rem" }}>
          {sortedAddOns.map((addon, i) => (
            <Col key={i}>
              <Card
                style={{
                  borderRadius: "12px",
                  overflow: "hidden",
                  boxShadow: "0 4px 12px rgba(0,0,0,0.08)",
                  border: "none",
                  height: "100%",
                  transition: "transform 0.2s ease, box-shadow 0.2s ease"
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.transform = "translateY(-4px)";
                  e.currentTarget.style.boxShadow = "0 8px 20px rgba(0,0,0,0.12)";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.transform = "translateY(0)";
                  e.currentTarget.style.boxShadow = "0 4px 12px rgba(0,0,0,0.08)";
                }}
              >
                {/* Image */}
                <div style={{
                  position: "relative",
                  height: isMobile ? "200px" : "220px",
                  overflow: "hidden",
                  backgroundColor: "#f5f5f5"
                }}>
                  <Card.Img
                    variant="top"
                    src={addon.image}
                    alt={addon.name}
                    style={{
                      height: "100%",
                      width: "100%",
                      objectFit: "cover"
                    }}
                  />
                  {/* Label badge */}
                  {addon.label && (
                    <span
                      style={{
                        position: "absolute",
                        top: "12px",
                        right: "12px",
                        background: getLabelColor(addon.label),
                        color: "#fff",
                        padding: "4px 10px",
                        borderRadius: "12px",
                        fontSize: "0.75rem",
                        fontWeight: "600",
                        textTransform: "uppercase",
                        letterSpacing: "0.5px",
                        boxShadow: "0 2px 6px rgba(0,0,0,0.2)"
                      }}
                    >
                      {addon.label}
                    </span>
                  )}
                </div>

                {/* Content */}
                <Card.Body style={{ padding: isMobile ? "1.25rem" : "1.5rem" }}>
                  <div style={{
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "flex-start",
                    marginBottom: "0.75rem"
                  }}>
                    <h3
                      style={{
                        color: "#000",
                        fontWeight: "700",
                        fontSize: isMobile ? "1.1rem" : "1.25rem",
                        margin: 0,
                        flex: 1
                      }}
                    >
                      {addon.name}
                    </h3>
                    <span
                      style={{
                        color: "#CD5C8A",
                        fontWeight: "700",
                        fontSize: isMobile ? "1.2rem" : "1.4rem",
                        marginLeft: "1rem",
                        whiteSpace: "nowrap"
                      }}
                    >
                      €{addon.price}
                    </span>
                  </div>

                  <p
                    style={{
                      color: "#666",
                      fontSize: isMobile ? "0.9rem" : "0.95rem",
                      lineHeight: "1.5",
                      margin: 0
                    }}
                  >
                    {addon.description}
                  </p>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>

        {/* Optional: Contact note */}
        <div style={{
          maxWidth: 900,
          margin: "0 auto",
          textAlign: "center",
          padding: isMobile ? "1.5rem" : "2rem",
          background: "rgba(205, 92, 138, 0.08)",
          borderRadius: "12px"
        }}>
          <p style={{
            color: "#773953",
            fontSize: isMobile ? "0.95rem" : "1.05rem",
            fontWeight: "600",
            margin: 0
          }}>
            Need something custom? Contact us on WhatsApp to discuss your specific requirements!
          </p>
        </div>
      </Container>
      <MainFooter />
    </div>
  );
}
