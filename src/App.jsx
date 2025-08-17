import { useEffect } from "react";
import { Container, Row, Col, Card, Button } from 'react-bootstrap';
import { SITE } from "./constants/values";
import { Routes, Route, useNavigate, useParams } from "react-router-dom";
import { BsWhatsapp, BsArrowLeft } from "react-icons/bs";

const whatsappLink = "https://wa.me/0000000000"; // Replace with your number

const sectionDetails = {
  cakesForAllOccasions: [
    "Indulge in cakes perfect for birthdays, weddings, anniversaries, and every special event.",
    "Baked fresh and designed to your exact tastes.",
    "Enjoy timeless classics and creative showstoppers, all made with premium ingredients.",
    "Order in advance to make your celebration truly memorable."
  ],
  partyFavorites: [
    "Our party favorites are a hit at every gathering.",
    "A curated selection including cupcakes, milk tarts, cookies, and tiramisu.",
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
    "Our cupcake bouquets are a unique, visually stunning gift.",
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
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/section/:sect" element={<SectionPage />} />
      <Route path="*" element={<Home />} />
    </Routes>
  );
}

function Home() {
  return (
    <>
      <HeaderWithPunchline />
      <CakesForAllOccasions />
      <PartyFavorites />
      <CustomThemedCakes />
      <BouquetsSection />
      <Footer />
    </>
  );
}

function HeaderWithPunchline() {
  return (
    <Container className="text-center my-5">
      <img
        src={`${import.meta.env.BASE_URL}images/logo.png`}
        alt={SITE.brand}
        height="140"
        width="140"
        className="rounded-circle"
        style={{ objectFit: 'cover' }}
      />
      <p className="mt-3" style={{ color: '#b2868a', fontWeight: '600', fontStyle: 'italic', fontSize: '1.6rem' }}>
        "{SITE.tagline}"
      </p>
    </Container>
  );
}

function CakesForAllOccasions() {
  const navigate = useNavigate();

  return (
    <Container
      className="my-5 py-5"
      style={{
        backgroundColor: '#E6E6FA',
        borderRadius: '1rem',
        cursor: 'pointer'
      }}
      onClick={() => navigate('/section/cakesForAllOccasions')}
    >
      <Row className="align-items-center">
        <Col md={5}>
          <h2 style={{ color: '#6B5B7B', fontWeight: '600', marginBottom: '1rem' }}>
            {SITE.sections.cakesForAllOccasions.title}
          </h2>
          <p style={{ color: '#8E7CA1', fontSize: '1.1rem' }}>
            {SITE.sections.cakesForAllOccasions.subtitle}
          </p>
        </Col>
        <Col md={7}>
          <Row className="g-3">
            {SITE.sections.cakesForAllOccasions.images.map((image, index) => (
              <Col key={index} xs={6} md={6}>
                <Card className="border-0 shadow-sm h-100">
                  <Card.Img variant="top" src={image} style={{ height: '180px', objectFit: 'cover' }} />
                </Card>
              </Col>
            ))}
          </Row>
        </Col>
      </Row>
    </Container>
  );
}

function PartyFavorites() {
  const navigate = useNavigate();

  return (
    <Container
      className="my-5 py-5"
      style={{
        backgroundColor: '#FFDDEE',
        borderRadius: '1rem',
        cursor: 'pointer'
      }}
      onClick={() => navigate('/section/partyFavorites')}
    >
      <Row className="align-items-center">
        <Col md={5}>
          <h2 style={{ color: '#B84C73', fontWeight: '600', marginBottom: '1rem' }}>
            {SITE.sections.partyFavorites.title}
          </h2>
          <p style={{ color: '#944866', fontSize: '1rem' }}>
            Our most popular treats perfect for any celebration
          </p>
        </Col>
        <Col md={7}>
          <Row className="g-3">
            {SITE.sections.partyFavorites.items.map((item, index) => (
              <Col key={index} xs={6} md={6}>
                <Card className="border-0 shadow-sm h-100 text-center">
                  <Card.Img variant="top" src={item.image} style={{ height: '180px', objectFit: 'cover' }} />
                  <Card.Body>
                    <Card.Title style={{ color: '#844059', fontWeight: '500', fontSize: '1rem' }}>
                      {item.name}
                    </Card.Title>
                  </Card.Body>
                </Card>
              </Col>
            ))}
          </Row>
        </Col>
      </Row>
    </Container>
  );
}

function CustomThemedCakes() {
  const navigate = useNavigate();

  return (
    <Container
      className="my-5 py-5"
      style={{
        backgroundColor: '#DDEEFF',
        borderRadius: '1rem',
        cursor: 'pointer'
      }}
      onClick={() => navigate('/section/customThemedCakes')}
    >
      <Row className="align-items-center">
        <Col md={5}>
          <h2 style={{ color: '#5C7DB1', fontWeight: '600', marginBottom: '1rem' }}>
            {SITE.sections.customThemedCakes.title}
          </h2>
          <p style={{ color: '#4A6B8F', fontSize: '1rem' }}>
            Bring your vision to life with our custom cake designs
          </p>
        </Col>
        <Col md={7}>
          <Row className="g-3">
            {SITE.sections.customThemedCakes.categories.map((category, index) => (
              <Col key={index} xs={6} md={4}>
                <Card className="border-0 shadow-sm h-100 text-center">
                  <Card.Img variant="top" src={category.image} style={{ height: '180px', objectFit: 'cover' }} />
                  <Card.Body>
                    <Card.Title style={{ color: '#446592', fontWeight: '500', fontSize: '0.95rem' }}>
                      {category.name}
                    </Card.Title>
                  </Card.Body>
                </Card>
              </Col>
            ))}
          </Row>
        </Col>
      </Row>
    </Container>
  );
}

function BouquetsSection() {
  const navigate = useNavigate();

  return (
    <Container
      className="my-5 py-5"
      style={{
        backgroundColor: '#FFE0F2',
        borderRadius: '1rem',
        cursor: 'pointer'
      }}
      onClick={() => navigate('/section/bouquets')}
    >
      <Row className="align-items-center">
        <Col md={5}>
          <h2 style={{ color: '#CC5E8B', fontWeight: '700', marginBottom: '1rem' }}>
            {SITE.sections.bouquets.title}
          </h2>
          <p style={{ color: '#773953', fontWeight: '500', fontSize: '1.2rem' }}>
            {SITE.sections.bouquets.subtitle}
          </p>
          <p style={{ color: '#773953', fontSize: '1rem', marginTop: '1rem' }}>
            {SITE.sections.bouquets.description}
          </p>
        </Col>
        <Col md={7}>
          <img
            src={SITE.sections.bouquets.image}
            alt="Bouquets"
            className="img-fluid rounded-3 shadow-sm"
            style={{ height: '300px', width: '100%', objectFit: 'cover' }}
          />
        </Col>
      </Row>
    </Container>
  );
}

function SectionPage() {
  const { sect } = useParams();
  const section = SITE.sections[sect];
  const navigate = useNavigate();

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
        minHeight: "100vh",
        paddingBottom: 40,
        position: "relative"
      }}
    >
      {/* WhatsApp and Back buttons */}
      <div
        style={{
          position: "fixed",
          top: 14,
          right: 16,
          zIndex: 1000,
          display: "flex",
          flexDirection: "column",
          alignItems: "flex-end",
          gap: 15
        }}
      >
        <a
          href={whatsappLink}
          target="_blank"
          rel="noopener noreferrer"
          style={{
            background: "#25D366",
            borderRadius: "50%",
            width: 38,
            height: 38,
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            color: "#fff",
            fontSize: 22,
            boxShadow: "0 2px 8px #25D36644"
          }}
          title="Contact us on WhatsApp"
        >
          <BsWhatsapp />
        </a>
        <Button
          variant="outline-secondary"
          onClick={() => navigate("/")}
          className="rounded-circle d-flex align-items-center justify-content-center p-0"
          style={{
            width: 38,
            height: 38,
            fontSize: 18,
            border: "2px solid #b2868a"
          }}
          aria-label="Back to Home"
        >
          <BsArrowLeft style={{ margin: "auto", color: "#b2868a" }} />
        </Button>
      </div>

      <Container className="pt-5">
        <div className="text-center mb-5 mt-4">
          <h2 style={{ color: textColors[sect], fontWeight: "700", marginBottom: "1rem" }}>
            {section.title}
          </h2>
        </div>
        <div style={{ maxWidth: 680, margin: "0 auto 36px", color: "#773953", fontSize: "1.15rem" }}>
          {(sectionDetails[sect] || []).map((line, i) => (
            <p key={i} style={{ marginBottom: 14 }}>{line}</p>
          ))}
        </div>
        <Row className="justify-content-center">
          {imgs.map((img, i) => (
            <Col key={i} md={8} className="mb-4">
              <Card className="border-0 shadow-sm h-100">
                <Card.Img
                  variant="top"
                  src={img}
                  style={{
                    width: "100%",
                    height: 280,
                    objectFit: "cover",
                    borderRadius: 16
                  }}
                  loading="lazy"
                />
              </Card>
            </Col>
          ))}
        </Row>
      </Container>
    </div>
  );
}

function Footer() {
  return (
    <footer className="py-5 mt-5" style={{ backgroundColor: '#FFDFE9', borderTop: '3px solid #CD5C8A' }}>
      <Container>
        <div className="text-center" style={{ color: '#773953', fontWeight: '600' }}>
          <h4>{SITE.brand}</h4>
          <div className="mb-4">
            <a
              href={`mailto:${SITE.contact.email}`}
              className="text-decoration-none me-4"
              style={{ color: '#96506F', fontWeight: '500' }}
            >
              {SITE.contact.email}
            </a>
            <a
              href={`tel:${SITE.contact.phone}`}
              className="text-decoration-none"
              style={{ color: '#96506F', fontWeight: '500' }}
            >
              {SITE.contact.phone}
            </a>
          </div>
          <p style={{ color: '#96506F', marginBottom: 0 }}>
            &copy; 2025 {SITE.brand}. All rights reserved.
          </p>
        </div>
      </Container>
    </footer>
  );
}
