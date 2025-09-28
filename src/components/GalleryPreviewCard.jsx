// GalleryPreviewCard.jsx
import { useState, useEffect } from "react";
import { Container, Row, Col, Card } from 'react-bootstrap';
import { useNavigate } from "react-router-dom";

const previewImages = [
  "/images/Gallery/1.jpeg",
  "/images/Gallery/2.jpeg",
];

export default function GalleryPreviewCard({
  bgColor = "#FFF",
  textColor = "#773953",
}) {
  const navigate = useNavigate();
  const [isMobile, setIsMobile] = useState(window.innerWidth < 768);

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth < 768);
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const textContent = (
    <Col md={5} style={{ display: 'flex', flexDirection: 'column', justifyContent: 'flex-start' }}>
      <h2 style={{
        color: textColor,
        fontWeight: '600',
        marginBottom: '1rem',
        fontSize: isMobile ? '1.3rem' : '1.5rem',
        textAlign: 'left'
      }}>
        Gallery
      </h2>
      <p style={{
        color: '#6B4B3A',
        fontSize: isMobile ? '0.9rem' : '1rem',
        lineHeight: 1.5,
        textAlign: 'left',
        marginBottom: 0
      }}>
        A peek at recent designs and bakes.
        Tap to explore the full collection.
      </p>
    </Col>
  );

  const imageContent = (
    <Col md={7}>
      <Row className="g-3">
        {previewImages.map((img, i) => (
          <Col key={i} xs={6} md={6}>
            <Card className="border-0 shadow-sm h-100">
              <Card.Img
                variant="top"
                src={img}
                style={{
                  height: isMobile ? '200px' : '260px', // same as SectionCard
                  objectFit: 'cover',                    // same as SectionCard
                  transition: 'transform 0.3s ease'
                }}
                onMouseEnter={(e) => e.target.style.transform = 'scale(1.05)'}
                onMouseLeave={(e) => e.target.style.transform = 'scale(1)'}
                loading="lazy"
                alt=""
              />
            </Card>
          </Col>
        ))}
      </Row>
    </Col>
  );

  return (
    <Container
      className="pt-4 pb-5"
      style={{
        backgroundColor: bgColor,
        borderRadius: '1rem',
        cursor: 'pointer',
        transition: 'transform 0.2s ease, box-shadow 0.2s ease',
        boxShadow: '0 4px 16px rgba(60,20,50,0.06)',
        marginBottom: '2rem'
      }}
      onClick={() => navigate('/gallery')}
      onMouseEnter={(e) => {
        e.currentTarget.style.transform = 'translateY(-2px)';
        e.currentTarget.style.boxShadow = '0 8px 25px rgba(60,20,50,0.12)';
      }}
      onMouseLeave={(e) => {
        e.currentTarget.style.transform = 'translateY(0)';
        e.currentTarget.style.boxShadow = '0 4px 16px rgba(60,20,50,0.06)';
      }}
    >
      <Row className="align-items-start">
        {isMobile ? (
          <>
            {textContent}
            {imageContent}
          </>
        ) : (
          <>
            {textContent}
            {imageContent}
          </>
        )}
      </Row>
    </Container>
  );
}
