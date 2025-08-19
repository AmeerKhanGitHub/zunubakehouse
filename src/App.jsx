import { useEffect, useState } from "react";
import { Container, Row, Col, Card } from 'react-bootstrap';
import { SITE } from "./constants/values";
import { Routes, Route, useNavigate, useParams, useLocation } from "react-router-dom";
import { BsWhatsapp, BsArrowLeft } from "react-icons/bs";

const whatsappLink = "https://wa.me/+353892058875";

const sectionDetails = {
  cakesForAllOccasions: [
    "Indulge in cakes perfect for birthdays, weddings, anniversaries, and every special event.",
    "Baked fresh and designed to your exact tastes.",
    "Enjoy timeless classics and creative showstoppers, all made with premium ingredients.",
    "Order in advance to make your celebration truly memorable."
  ],
  partyFavorites: [
    "Our party favorites are a hit at every gathering.",
    "A curated selection including cupcakes, tres leches, tea cakes, and tiramisu.",
    "Ideal for birthdays, get-togethers, office events and more.",
    "Each treat is baked for maximum freshness and flavor."
  ],
  customThemedCakes: [
    "Bring your vision to life with our custom themed cakes.",
    "From intricate vintage car cakes to playful baby showers and chic christening designs.",
    "Every cake is tailored to match the occasion and your preferences.",
    "Contact us to discuss your dream design!"
  ],
  bouquets: [
    "Our  bouqcakes are a unique, visually stunning gift.",
    "Perfect for birthdays, anniversaries, thank-yous, or just because.",
    "Beautifully piped flowers look almost too pretty to eat—almost!",
    "Ready for pickup with a little notice—order yours today."
  ]
};

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
      <StickyHeader />
      <div style={{ paddingTop: '10vh', paddingBottom: '10vh' }}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/section/:sect" element={<SectionPage />} />
          <Route path="*" element={<Home />} />
        </Routes>
      </div>
      <StickyFooter />
    </>
  );
}

function StickyHeader() {
  const navigate = useNavigate();
  const location = useLocation();
  const [isMobile, setIsMobile] = useState(window.innerWidth < 768);

  // Check if we're on a child page (section page)
  const isChildPage = location.pathname.startsWith('/section/');

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth < 768);
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <header
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        right: 0,
        height: '10vh',
        backgroundColor: '#FFF0F5',
        borderBottom: '2px solid #E6D6E6',
        zIndex: 1000,
        display: 'flex',
        alignItems: 'center',
        padding: isMobile ? '0 12px' : '0 20px',
        boxSizing: 'border-box'
      }}
    >
      {/* Left: Bigger Logo */}
      <div style={{
        flex: '0 0 auto',
        marginRight: isMobile ? '8px' : '15px'
      }}>
        <img
          src={`${import.meta.env.BASE_URL}images/logo.png`}
          alt={SITE.brand}
          height={isMobile ? "55" : "70"}
          width={isMobile ? "55" : "70"}
          className="rounded-circle"
          style={{ objectFit: 'cover' }}
        />
      </div>

      {/* Center: Larger Title & shifted punch line */}
      <div
        style={{
          flex: '1 1 auto',
          textAlign: 'center',
          cursor: isChildPage ? 'default' : 'pointer',
          minWidth: 0,
          paddingLeft: isMobile ? '5px' : '10px',
          paddingRight: isMobile ? '5px' : '10px'
        }}
        onClick={!isChildPage ? () => navigate('/') : undefined}
      >
        <h1 style={{
          margin: 0,
          fontWeight: '700',
          fontSize: isMobile ? '1.5rem' : '1.9rem',
          color: '#6B4B3A',
          lineHeight: 1.2,
          overflow: 'hidden',
          textOverflow: 'ellipsis',
          whiteSpace: 'nowrap'
        }}>
          Zunu Bakehouse
        </h1>
        <p style={{
          fontStyle: 'italic',
          fontWeight: '400',
          margin: 0,
          fontSize: isMobile ? '0.75rem' : '0.95rem',
          color: '#b2868a',
          lineHeight: 1,
          overflow: 'hidden',
          textOverflow: 'ellipsis',
          whiteSpace: 'nowrap',
          marginTop: '2px',
          marginLeft: isMobile ? '0' : '2rem'
        }}>
          {SITE.tagline}
        </p>
      </div>

      {/* Right: Back Button (only on child pages) */}
      <div style={{
        flex: '0 0 auto',
        marginLeft: isMobile ? '8px' : '15px',
        width: isMobile ? '40px' : '50px',
        display: 'flex',
        justifyContent: 'flex-end'
      }}>
        {isChildPage && (
          <button
            onClick={() => navigate('/')}
            style={{
              background: 'none',
              border: 'none',
              fontSize: isMobile ? 20 : 24,
              cursor: 'pointer',
              color: '#b2868a',
              padding: 0,
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              transition: 'color 0.2s ease'
            }}
            aria-label="Back to Home"
            onMouseEnter={(e) => e.target.style.color = '#8a6b6f'}
            onMouseLeave={(e) => e.target.style.color = '#b2868a'}
          >
            <BsArrowLeft />
          </button>
        )}
      </div>
    </header>
  );
}

function StickyFooter() {
  const [isMobile, setIsMobile] = useState(window.innerWidth < 768);

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth < 768);
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <footer
      style={{
        position: 'fixed',
        bottom: 0,
        left: 0,
        right: 0,
        height: '10vh',
        backgroundColor: '#FFDFE9',
        borderTop: '2px solid #CD5C8A',
        zIndex: 1000,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        padding: isMobile ? '0 15px' : '0 20px'
      }}
    >
      <div style={{
        display: 'flex',
        alignItems: 'center',
        gap: isMobile ? '10px' : '15px'
      }}>
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
          onMouseEnter={(e) => e.target.style.transform = 'scale(1.05)'}
          onMouseLeave={(e) => e.target.style.transform = 'scale(1)'}
        >
          <BsWhatsapp />
        </a>
      </div>
    </footer>
  );
}

function Home() {
  return (
    <>
      <CakesForAllOccasions />
      <PartyFavorites />
      <CustomThemedCakes />
      <BouquetsSection />
    </>
  );
}

function SectionCard({ sectionKey, bgColor, textColor, description }) {
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
                      height: isMobile ? '200px' : '260px',  // Taller height
                      objectFit: 'cover',  // Back to cover for better fill
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

function CakesForAllOccasions() {
  return (
    <SectionCard
      sectionKey="cakesForAllOccasions"
      bgColor="#E6E6FA"
      textColor="#6B5B7B"
      description="Our cakes are thoughtfully crafted to suit every occasion, from birthdays and weddings to family gatherings and special celebrations. With a wide range of flavors and elegant designs, we ensure each cake is a memorable centerpiece that adds sweetness to your special moments."
    />
  );
}

function PartyFavorites() {
  return (
    <SectionCard
      sectionKey="partyFavorites"
      bgColor="#FFDDEE"
      textColor="#B84C73"
      description="Our Party Favourites collection features an assortment of indulgent multi-pack desserts, from delicate cupcakes and artisanal tea cakes to velvety tiramisu and luscious tres leches. Available in a variety of sophisticated flavours, each piece is beautifully portioned to offer both elegance and ease when serving guests, making them the perfect addition to refined gatherings and celebrations."
    />
  );
}

function CustomThemedCakes() {
  return (
    <SectionCard
      sectionKey="customThemedCakes"
      bgColor="#DDEEFF"
      textColor="#5C7DB1"
      description="Our custom cakes are thoughtfully designed to reflect your vision and crafted with the finest ingredients. Whether it’s an elegant wedding, a milestone celebration, or a personal treat, each cake is tailored in flavour, design, and detail to create a one-of-a-kind centerpiece that’s as unforgettable as the occasion itself."
    />
  );
}

function BouquetsSection() {
  return (
    <SectionCard
      sectionKey="bouquets"
      bgColor="#FFE0F2"
      textColor="#CC5E8B"
      description="Why settle for ordinary flowers when you can surprise your loved ones with Bouqcakes — stunning cupcake bouquets that are as delightful to eat as they are to admire. Handcrafted with artistry and available in a variety of flavours, these edible arrangements combine the beauty of flowers with the indulgence of cake, making them a truly memorable gift for any occasion."
    />
  );
}

function SectionPage() {
  const { sect } = useParams();
  const section = SITE.sections[sect];
  const navigate = useNavigate();
  const [isMobile, setIsMobile] = useState(window.innerWidth < 768);

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth < 768);
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  if (!section) {
    navigate('/');
    return null;
  }

  let imgs = [];
  if (section.images) imgs = section.images;
  if (section.items) imgs = section.items.map(i => i.image);
  if (section.categories) imgs = section.categories.map(c => c.image);
  if (section.image) imgs = [section.image];

  const colors = {
    cakesForAllOccasions: "#E6E6FA",
    partyFavorites: "#FFDDEE",
    customThemedCakes: "#DDEEFF",
    bouquets: "#FFE0F2"
  };

  const textColors = {
    cakesForAllOccasions: "#6B5B7B",
    partyFavorites: "#B84C73",
    customThemedCakes: "#5C7DB1",
    bouquets: "#CC5E8B"
  };

  return (
    <div
      style={{
        background: colors[sect] || "#fff",
        minHeight: "80vh"
      }}
    >
      <Container className="pt-4">
        <div className="text-center mb-5">
          <h2 style={{
            color: textColors[sect],
            fontWeight: "700",
            marginBottom: "1rem",
            fontSize: isMobile ? '1.5rem' : '2rem'
          }}>
            {section.title}
          </h2>
        </div>
        <div style={{
          maxWidth: 680,
          margin: "0 auto 36px",
          color: "#6B4B3A",
          fontSize: isMobile ? "1rem" : "1.15rem",
          padding: isMobile ? '0 15px' : '0'
        }}>
          {(sectionDetails[sect] || []).map((line, i) => (
            <p key={i} style={{
              marginBottom: 16,
              lineHeight: 1.6,
              textAlign: 'justify'
            }}>
              {line}
            </p>
          ))}
        </div>
        <Row className="justify-content-center">
          {imgs.map((img, i) => (
            <Col key={i} md={8} lg={6} className="mb-4">
              <Card className="border-0 shadow-sm h-100">
                <Card.Img
                  variant="top"
                  src={img}
                  style={{
                    width: "100%",
                    height: isMobile ? 320 : 480,
                    objectFit: "cover",
                    borderRadius: 16,
                    transition: 'transform 0.3s ease'
                  }}
                  loading="lazy"
                  onMouseEnter={(e) => e.target.style.transform = 'scale(1.02)'}
                  onMouseLeave={(e) => e.target.style.transform = 'scale(1)'}
                />
              </Card>
            </Col>
          ))}
        </Row>
      </Container>
    </div>
  );
}
