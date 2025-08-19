import { useState, useEffect } from "react";
import { Container, Row, Col, Card } from 'react-bootstrap';
import { useNavigate } from "react-router-dom";
import { SITE } from "../constants/values";

export default function SectionCard({ sectionKey, bgColor, textColor, description }) {
  const section = SITE.sections[sectionKey];
  const navigate = useNavigate();
  const [isMobile, setIsMobile] = useState(window.innerWidth < 768);

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth < 768);
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  let imgs = [];
  if (section.images) imgs = section.images;
  if (section.items) imgs = section.items.map(i => i.image);
  if (section.categories) imgs = section.categories.map(c => c.image);
  if (section.image) imgs = [section.image];
  imgs = imgs.slice(0, 4);

  return (
    <Container
      className="my-5 py-5"
      style={{
        backgroundColor: bgColor,
        borderRadius: '1rem',
        cursor: 'pointer',
        transition: 'transform 0.2s ease, box-shadow 0.2s ease',
        boxShadow: '0 4px 16px rgba(60,20,50,0.06)'
      }}
      onClick={() => navigate(`/section/${sectionKey}`)}
      onMouseEnter={(e) => {
        e.currentTarget.style.transform = 'translateY(-2px)';
        e.currentTarget.style.boxShadow = '0 8px 25px rgba(60,20,50,0.12)';
      }}
      onMouseLeave={(e) => {
        e.currentTarget.style.transform = 'translateY(0)';
        e.currentTarget.style.boxShadow = '0 4px 16px rgba(60,20,50,0.06)';
      }}
    >
      <Row className="align-items-center">
        <Col md={5}>
          <h2 style={{
            color: textColor,
            fontWeight: '600',
            marginBottom: '1rem',
            fontSize: isMobile ? '1.3rem' : '1.5rem'
          }}>
            {section.title}
          </h2>
          <p style={{
            color: '#6B4B3A',
            fontSize: isMobile ? '0.9rem' : '1rem',
            lineHeight: 1.5
          }}>
            {description}
          </p>
        </Col>
        <Col md={7}>
          <Row className="g-3">
            {imgs.map((img, i) => (
              <Col key={i} xs={6} md={6}>
                <Card className="border-0 shadow-sm h-100">
                  <Card.Img
                    variant="top"
                    src={img}
                    style={{
                      height: isMobile ? '200px' : '260px',
                      objectFit: 'cover',
                      transition: 'transform 0.3s ease'
                    }}
                    onMouseEnter={(e) => e.target.style.transform = 'scale(1.05)'}
                    onMouseLeave={(e) => e.target.style.transform = 'scale(1)'}
                  />
                  {section.items && (
                    <Card.Body className="text-center p-2">
                      <Card.Title style={{
                        color: '#6B4B3A',
                        fontWeight: '500',
                        fontSize: isMobile ? '0.8rem' : '0.9rem',
                        margin: 0
                      }}>
                        {section.items[i]?.name}
                      </Card.Title>
                    </Card.Body>
                  )}
                  {section.categories && (
                    <Card.Body className="text-center p-2">
                      <Card.Title style={{
                        color: '#6B4B3A',
                        fontWeight: '500',
                        fontSize: isMobile ? '0.8rem' : '0.9rem',
                        margin: 0
                      }}>
                        {section.categories[i]?.name}
                      </Card.Title>
                    </Card.Body>
                  )}
                </Card>
              </Col>
            ))}
          </Row>
        </Col>
      </Row>
    </Container>
  );
}
