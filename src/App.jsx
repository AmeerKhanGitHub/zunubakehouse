import { useEffect } from "react";
import { Container, Row, Col, Card } from 'react-bootstrap';
import { SITE } from "./constants/values";
import { Routes, Route, useNavigate, useParams, useLocation } from "react-router-dom";
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

  // Check if we're on a child page (section page)
  const isChildPage = location.pathname.startsWith('/section/');

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
        justifyContent: 'center',
        padding: '0 20px'
      }}
    >
      <div
        style={{
          display: 'flex',
          alignItems: 'center',
          gap: '15px',
          cursor: isChildPage ? 'default' : 'pointer',
          position: 'relative',
          width: '100%',
          justifyContent: 'center'
        }}
        onClick={!isChildPage ? () => navigate('/') : undefined}
      >
        <img
          src={`${import.meta.env.BASE_URL}images/logo.png`}
          alt={SITE.brand}
          height="50"
          width="50"
          className="rounded-circle"
          style={{ objectFit: 'cover' }}
        />
        <p
          style={{
            color: '#b2868a',
            fontWeight: '600',
            fontStyle: 'italic',
            fontSize: '1.2rem',
            margin: 0
          }}
        >
          "{SITE.tagline}"
        </p>

        {/* Back button - only visible on child pages */}
        {isChildPage && (
          <button
            onClick={() => navigate('/')}
            style={{
              position: 'absolute',
              right: 0,
              background: '#fff',
              border: '2px solid #b2868a',
              borderRadius: '50%',
              width: 40,
              height: 40,
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              fontSize: 18,
              color: '#b2868a',
              cursor: 'pointer',
              boxShadow: '0 2px 8px rgba(178, 134, 138, 0.2)'
            }}
            aria-label="Back to Home"
          >
            <BsArrowLeft />
          </button>
        )}
      </div>
    </header>
  );
}

function StickyFooter() {
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
        justifyContent: 'center'
      }}
    >
      <div style={{ display: 'flex', alignItems: 'center', gap: '15px' }}>
        <span
          style={{
            color: '#773953',
            fontWeight: '600',
            fontSize: '1.1rem'
          }}
        >
          WhatsApp to order
        </span>
        <a
          href={whatsappLink}
          target="_blank"
          rel="noopener noreferrer"
          style={{
            background: "#25D366",
            borderRadius: "50%",
            width: 45,
            height: 45,
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            color: "#fff",
            fontSize: 24,
            boxShadow: "0 3px 10px #25D36644",
            textDecoration: 'none'
          }}
          title="Contact us on WhatsApp"
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
        minHeight: "80vh"
      }}
    >
      <Container className="pt-4">
        <div className="text-center mb-5">
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
