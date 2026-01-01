// SectionCard.jsx
import { useState, useEffect } from "react";
import { Container, Row, Col, Card } from 'react-bootstrap';
import { useNavigate } from "react-router-dom";
import { SITE } from "../constants/values";
import { BsWhatsapp, BsChevronRight } from "react-icons/bs"; // Added BsChevronRight

export default function SectionCard({
  sectionKey,
  bgColor,
  textColor,
  description,
  index,
  disableNavigation = false,
  whatsappLink
}) {
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

  const isReversed = index % 2 === 1;

  const textContent = (
    <Col md={5} style={{ display: 'flex', flexDirection: 'column', justifyContent: 'flex-start' }}>
      <h2 style={{
        color: textColor,
        fontWeight: '600',
        marginBottom: '1rem',
        fontSize: isMobile ? '1.3rem' : '1.5rem',
        textAlign: 'left'
      }}>
        {section.title}
      </h2>

      <p style={{
        color: '#6B4B3A',
        fontSize: isMobile ? '0.9rem' : '1rem',
        lineHeight: 1.5,
        textAlign: 'left',
        marginBottom: disableNavigation ? '0.5rem' : '1rem' // Changed: always add margin if not disabled
      }}>
        {description}
      </p>

      {/* Explore Options Button - only for navigable sections */}
      {!disableNavigation && (
        <button
          onClick={(e) => {
            e.stopPropagation();
            navigate(`/section/${sectionKey}`);
          }}
          style={{
            background: textColor,
            color: '#fff',
            border: 'none',
            borderRadius: '20px',
            padding: isMobile ? '8px 18px' : '10px 24px',
            fontSize: isMobile ? '0.85rem' : '0.95rem',
            fontWeight: '600',
            cursor: 'pointer',
            display: 'inline-flex',
            alignItems: 'center',
            gap: '8px',
            alignSelf: 'flex-start',
            transition: 'all 0.2s ease',
            boxShadow: '0 2px 8px rgba(0,0,0,0.15)'
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.transform = 'translateY(-2px)';
            e.currentTarget.style.boxShadow = '0 4px 12px rgba(0,0,0,0.2)';
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.transform = 'translateY(0)';
            e.currentTarget.style.boxShadow = '0 2px 8px rgba(0,0,0,0.15)';
          }}
        >
          Explore Options
          <BsChevronRight style={{ fontSize: '1rem' }} />
        </button>
      )}

      {/* WhatsApp section for custom cakes */}
      {disableNavigation && whatsappLink && (
        <div
          onClick={(e) => e.stopPropagation()}
          style={{
            display: 'flex',
            alignItems: 'center',
            gap: isMobile ? '10px' : '15px',
            marginTop: '1rem',
            marginBottom: '1rem'
          }}
        >
          <span
            style={{
              color: '#773953',
              fontWeight: '600',
              fontSize: isMobile ? '0.9rem' : '1.1rem'
            }}
          >
            ORDER NOW
          </span>
          <a
            href={whatsappLink}
            target="_blank"
            rel="noopener noreferrer"
            style={{
              background: "#25D366",
              borderRadius: "50%",
              width: isMobile ? 38 : 45,
              height: isMobile ? 38 : 45,
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              color: "#fff",
              fontSize: isMobile ? 20 : 24,
              boxShadow: "0 3px 10px #25D36644",
              textDecoration: 'none',
              transition: 'transform 0.2s ease'
            }}
            title="Contact us on WhatsApp"
            onMouseEnter={(e) => e.currentTarget.style.transform = 'scale(1.05)'}
            onMouseLeave={(e) => e.currentTarget.style.transform = 'scale(1)'}
          >
            <BsWhatsapp />
          </a>
        </div>
      )}
    </Col>
  );

  const imageContent = (
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
        cursor: 'default',
        transition: 'transform 0.2s ease, box-shadow 0.2s ease',
        boxShadow: '0 4px 16px rgba(60,20,50,0.06)',
        marginBottom: '2rem'
      }}
    >
      <Row className="align-items-start">
        {isMobile ? (
          <>
            {textContent}
            {imageContent}
          </>
        ) : (
          (index % 2 === 1) ? (
            <>
              {imageContent}
              {textContent}
            </>
          ) : (
            <>
              {textContent}
              {imageContent}
            </>
          )
        )}
      </Row>
    </Container>
  );
}
