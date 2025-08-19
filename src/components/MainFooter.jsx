import { Container, Row, Col } from 'react-bootstrap';
import { BsInstagram, BsEnvelope, BsGeoAlt, BsFacebook } from "react-icons/bs";

export default function MainFooter() {
  return (
    <section style={{
      background: 'linear-gradient(135deg, #F8F4F6 0%, #F0E6F2 50%, #E8D8EA 100%)',
      color: '#6B4B3A',
      padding: '4rem 0 2rem 0',
      marginTop: '4rem',
      borderTop: '3px solid #E6D6E6',
      position: 'relative'
    }}>
      <Container>
        <Row className="justify-content-center align-items-start">
          {/* Contact Section */}
          <Col lg={4} md={6} className="mb-4">
            <div style={{ textAlign: 'center', padding: '0 1rem' }}>
              <h4 style={{
                color: '#6B4B3A',
                fontWeight: '700',
                fontSize: '1.4rem',
                marginBottom: '2rem',
                letterSpacing: '2px',
                textTransform: 'uppercase'
              }}>
                CONTACT
              </h4>

              <div style={{ marginBottom: '1.5rem' }}>
                <p style={{
                  color: '#6B4B3A',
                  fontSize: '1.1rem',
                  fontWeight: '600',
                  margin: '0 0 0.5rem 0'
                }}>
                  +353 89 205 8875
                </p>
                <a
                  href="mailto:hello@zunubakehouse.com"
                  style={{
                    color: '#8B7355',
                    textDecoration: 'none',
                    fontSize: '1rem',
                    fontWeight: '400',
                    transition: 'color 0.2s ease'
                  }}
                  onMouseEnter={(e) => e.target.style.color = '#6B4B3A'}
                  onMouseLeave={(e) => e.target.style.color = '#8B7355'}
                >
                  hello@zunubakehouse.com
                </a>
              </div>

              <div style={{
                color: '#8B7355',
                fontSize: '0.95rem',
                lineHeight: '1.6'
              }}>
                <p style={{ margin: '0 0 0.5rem 0', fontWeight: '600', color: '#6B4B3A' }}>
                  Athlone/Monksland Area
                </p>
                <p style={{ margin: 0, fontSize: '0.9rem' }}>
                  Delivery available anywhere closer to Athlone area for a fee
                </p>
              </div>
            </div>
          </Col>

          {/* About Section */}
          <Col lg={4} md={6} className="mb-4">
            <div style={{ textAlign: 'center', padding: '0 1rem' }}>
              <h4 style={{
                color: '#6B4B3A',
                fontWeight: '700',
                fontSize: '1.4rem',
                marginBottom: '2rem',
                letterSpacing: '2px',
                textTransform: 'uppercase'
              }}>
                ABOUT ZUNU
              </h4>

              <p style={{
                color: '#8B7355',
                fontSize: '1rem',
                lineHeight: '1.7',
                marginBottom: '2rem',
                maxWidth: '300px',
                margin: '0 auto 2rem auto'
              }}>
                Artisanal Bakehouse, Certified Passion.
                We create bespoke cakes and treats for life's sweetest moments.
              </p>

              <p style={{
                color: '#8B7355',
                fontSize: '0.9rem',
                fontStyle: 'italic'
              }}>
                Fresh baked daily. Made with love, delivered with care.
              </p>
            </div>
          </Col>

          {/* Social Section */}
          <Col lg={4} md={6} className="mb-4">
            <div style={{ textAlign: 'center', padding: '0 1rem' }}>
              <h4 style={{
                color: '#6B4B3A',
                fontWeight: '700',
                fontSize: '1.4rem',
                marginBottom: '2rem',
                letterSpacing: '2px',
                textTransform: 'uppercase'
              }}>
                SOCIAL
              </h4>

              <p style={{
                color: '#8B7355',
                fontSize: '1rem',
                marginBottom: '1.5rem'
              }}>
                Follow Us
              </p>

              <div style={{
                display: 'flex',
                justifyContent: 'center',
                gap: '1.5rem',
                marginBottom: '2rem'
              }}>
                <a
                  href="https://facebook.com/zunubakehouse"
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{
                    color: '#8B7355',
                    fontSize: '1.8rem',
                    transition: 'transform 0.2s ease, color 0.2s ease',
                    textDecoration: 'none'
                  }}
                  onMouseEnter={(e) => {
                    e.target.style.transform = 'translateY(-3px)';
                    e.target.style.color = '#4267B2';
                  }}
                  onMouseLeave={(e) => {
                    e.target.style.transform = 'translateY(0)';
                    e.target.style.color = '#8B7355';
                  }}
                >
                  <BsFacebook />
                </a>

                <a
                  href="https://instagram.com/zunubakehouse"
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{
                    color: '#8B7355',
                    fontSize: '1.8rem',
                    transition: 'transform 0.2s ease, color 0.2s ease',
                    textDecoration: 'none'
                  }}
                  onMouseEnter={(e) => {
                    e.target.style.transform = 'translateY(-3px)';
                    e.target.style.color = '#E1306C';
                  }}
                  onMouseLeave={(e) => {
                    e.target.style.transform = 'translateY(0)';
                    e.target.style.color = '#8B7355';
                  }}
                >
                  <BsInstagram />
                </a>
              </div>
            </div>
          </Col>
        </Row>

        {/* Bottom Section */}
        <div style={{
          borderTop: '1px solid rgba(107, 75, 58, 0.2)',
          paddingTop: '2rem',
          marginTop: '3rem',
          textAlign: 'center'
        }}>
          <p style={{
            color: '#8B7355',
            fontSize: '0.9rem',
            margin: 0,
            fontStyle: 'italic'
          }}>
            © 2025 Zunu Bakehouse | Made with 💝 for sweet moments
          </p>
        </div>
      </Container>
    </section>
  );
}
