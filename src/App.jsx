import { useEffect } from "react";
import { Container, Navbar, Row, Col, Card } from 'react-bootstrap';
import { SITE } from "./constants/values";

// Pastel color palette
const colors = {
  primary: '#E6E6FA',      // Lavender
  secondary: '#FFE4E1',    // Misty Rose
  accent: '#E0F0E9',       // Mint Cream
  peach: '#FFDAB9',        // Peach Puff
  blue: '#E0F6FF',         // Light Cyan
  pink: '#F8C8DC',         // Pink
  text: '#4A4A4A',         // Dark Gray
  textLight: '#6B6B6B',    // Medium Gray
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
    <div style={{ backgroundColor: colors.primary, minHeight: '100vh' }}>
      <HeaderWithPunchline />
      <CakesForAllOccasions />
      <PartyFavorites />
      <CustomThemedCakes />
      <BouquetsSection />
      <Footer />
    </div>
  );
}

function HeaderWithPunchline() {
  return (
    <Navbar
      className="justify-content-center py-5 shadow-sm"
      style={{ backgroundColor: colors.secondary }}
      variant="light"
    >
      <Container className="d-flex flex-column align-items-center">
        <Navbar.Brand href="#">
          <img
            src={`${import.meta.env.BASE_URL}images/logo.png`}
            height="140"
            width="140"
            className="d-inline-block align-top rounded-circle border"
            alt="Zunu Bakehouse Logo"
            style={{
              objectFit: 'cover',
              borderColor: colors.pink,
              borderWidth: '3px'
            }}
          />
        </Navbar.Brand>
        <div
          className="mt-4 text-center"
          style={{
            fontStyle: 'italic',
            color: colors.text,
            fontWeight: '600',
            fontSize: '1.6rem'
          }}
        >
          "{SITE.tagline}"
        </div>
      </Container>
    </Navbar>
  );
}

function CakesForAllOccasions() {
  return (
    <Container className="my-5 py-5">
      <div
        className="p-5 rounded-4 shadow-sm"
        style={{ backgroundColor: colors.accent }}
      >
        <h2
          className="display-5 mb-4 text-center"
          style={{ color: colors.text, fontWeight: '600' }}
        >
          {SITE.sections.cakesForAllOccasions.title}
        </h2>
        <p
          className="text-center mb-5"
          style={{ color: colors.textLight, fontSize: '1.1rem' }}
        >
          {SITE.sections.cakesForAllOccasions.subtitle}
        </p>
        <Row className="g-4">
          {SITE.sections.cakesForAllOccasions.images.map((image, index) => (
            <Col key={index} md={6} lg={3}>
              <Card
                className="border-0 shadow-sm h-100"
                style={{ backgroundColor: 'white' }}
              >
                <Card.Img
                  variant="top"
                  src={image}
                  style={{ height: '200px', objectFit: 'cover' }}
                />
              </Card>
            </Col>
          ))}
        </Row>
      </div>
    </Container>
  );
}

function PartyFavorites() {
  return (
    <Container className="my-5 py-5">
      <div
        className="p-5 rounded-4 shadow-sm"
        style={{ backgroundColor: colors.peach }}
      >
        <h2
          className="display-5 mb-5 text-center"
          style={{ color: colors.text, fontWeight: '600' }}
        >
          {SITE.sections.partyFavorites.title}
        </h2>
        <Row className="g-4">
          {SITE.sections.partyFavorites.items.map((item, index) => (
            <Col key={index} md={6} lg={3}>
              <Card
                className="border-0 shadow-sm h-100 text-center"
                style={{ backgroundColor: 'white' }}
              >
                <Card.Img
                  variant="top"
                  src={item.image}
                  style={{ height: '200px', objectFit: 'cover' }}
                />
                <Card.Body>
                  <Card.Title style={{ color: colors.text, fontWeight: '500' }}>
                    {item.name}
                  </Card.Title>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
      </div>
    </Container>
  );
}

function CustomThemedCakes() {
  return (
    <Container className="my-5 py-5">
      <div
        className="p-5 rounded-4 shadow-sm"
        style={{ backgroundColor: colors.blue }}
      >
        <h2
          className="display-5 mb-5 text-center"
          style={{ color: colors.text, fontWeight: '600' }}
        >
          {SITE.sections.customThemedCakes.title}
        </h2>
        <Row className="g-4">
          {SITE.sections.customThemedCakes.categories.map((category, index) => (
            <Col key={index} md={4}>
              <Card
                className="border-0 shadow-sm h-100 text-center"
                style={{ backgroundColor: 'white' }}
              >
                <Card.Img
                  variant="top"
                  src={category.image}
                  style={{ height: '250px', objectFit: 'cover' }}
                />
                <Card.Body>
                  <Card.Title style={{ color: colors.text, fontWeight: '500' }}>
                    {category.name}
                  </Card.Title>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
      </div>
    </Container>
  );
}

function BouquetsSection() {
  return (
    <Container className="my-5 py-5">
      <div
        className="p-5 rounded-4 shadow-sm"
        style={{ backgroundColor: colors.pink }}
      >
        <Row className="align-items-center">
          <Col md={6}>
            <h2
              className="display-4 mb-4"
              style={{ color: colors.text, fontWeight: '700' }}
            >
              {SITE.sections.bouquets.title}
            </h2>
            <p
              className="lead mb-3"
              style={{ color: colors.text, fontWeight: '500', fontSize: '1.4rem' }}
            >
              {SITE.sections.bouquets.subtitle}
            </p>
            <p
              style={{
                color: colors.textLight,
                fontSize: '1.1rem',
                lineHeight: '1.6'
              }}
            >
              {SITE.sections.bouquets.description}
            </p>
          </Col>
          <Col md={6}>
            <img
              src={SITE.sections.bouquets.image}
              alt="Cupcake Bouquets"
              className="img-fluid rounded-3 shadow-sm"
              style={{ width: '100%', height: '300px', objectFit: 'cover' }}
            />
          </Col>
        </Row>
      </div>
    </Container>
  );
}

function Footer() {
  return (
    <footer
      className="py-5 mt-5"
      style={{
        backgroundColor: colors.secondary,
        borderTop: `3px solid ${colors.pink}`
      }}
    >
      <Container>
        <div className="text-center">
          <h4
            className="mb-4"
            style={{ color: colors.text, fontWeight: '700' }}
          >
            {SITE.brand}
          </h4>
          <div className="mb-4">
            <a
              href={`mailto:${SITE.contact.email}`}
              className="text-decoration-none me-4"
              style={{
                color: colors.textLight,
                fontSize: '1.1rem',
                fontWeight: '500'
              }}
            >
              {SITE.contact.email}
            </a>
            <a
              href={`tel:${SITE.contact.phone}`}
              className="text-decoration-none"
              style={{
                color: colors.textLight,
                fontSize: '1.1rem',
                fontWeight: '500'
              }}
            >
              {SITE.contact.phone}
            </a>
          </div>
          <p
            className="mb-0"
            style={{ color: colors.textLight }}
          >
            &copy; 2025 {SITE.brand}. All rights reserved.
          </p>
        </div>
      </Container>
    </footer>
  );
}
