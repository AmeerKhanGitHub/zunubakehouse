import { useEffect } from "react";
import { Container, Row, Col, Card } from 'react-bootstrap';
import { SITE } from "./constants/values";

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
  return (
    <Container className="my-5 py-5" style={{ backgroundColor: '#E6E6FA', borderRadius: '1rem' }}>
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
  return (
    <Container className="my-5 py-5" style={{ backgroundColor: '#FFDDEE', borderRadius: '1rem' }}>
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
  return (
    <Container className="my-5 py-5" style={{ backgroundColor: '#DDEEFF', borderRadius: '1rem' }}>
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
  return (
    <Container className="my-5 py-5" style={{ backgroundColor: '#FFE0F2', borderRadius: '1rem' }}>
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
