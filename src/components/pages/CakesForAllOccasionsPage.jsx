import { useState, useEffect } from "react";
import { Container, Row, Col } from 'react-bootstrap';
import MainFooter from "../MainFooter";
import FlavorItem from "../shared/FlavorItem";

const cakesData = {
  sizes: [
    { size: '6"', serves: 'Serves 8-10' },
    { size: '8"', serves: 'Serves 16-20' },
    { size: '10"', serves: 'Serves 24-30' }
  ],
  addOns: [
      { name: 'Happy Birthday Topper', price: 1 },
      { name: 'Happy Anniversary Topper', price: 1 },
      { name: 'Personalized Message', price: 3 }
  ],
  flavors: [
    { name: 'Mango',          price6: 24, price8: 38, price10: 52, description: 'Classic vanilla base paired with rich mango purée and smooth mango fresh cream', label: 'Best-seller' },
    { name: 'Black Forest',   price6: 25, price8: 40, price10: 55, description: 'Moist chocolate base with cherry compote and delicious fresh cream', label: 'Must-try' },
    { name: 'Strawberry',     price6: 24, price8: 38, price10: 52, description: 'Moist vanilla base with homemade strawberry purée and fluffy strawberry fresh cream', label: 'Must-try' },
    { name: 'Rose Pistachio', price6: 29, price8: 48, price10: 67, description: 'Pistachio base, layered with aromatic rose fresh cream and crushed pistachio', label: 'Best-seller' },
    { name: 'Dubai Dream',    price6: 35, price8: 55, price10: 75, description: 'Moist chocolate base with crunchy pistachio kanafeh filling complimented with chocolate ganache', label: 'Must-try' },
    { name: 'Rasmalai',       price6: 35, price8: 55, price10: 75, description: 'Soft vanilla base soaked in rasmalai milk with rasmalai fresh cream and nuts', label: 'Best-seller' },
    { name: 'Pineapple',      price6: 24, price8: 38, price10: 52, description: 'Vanilla base with light pineapple fresh cream and juicy pineapple chunks', label: null },
    { name: 'Vanilla',        price6: 24, price8: 38, price10: 52, description: 'Classic vanilla base with light and fluffy vanilla buttercream', label: null },
    { name: 'White Forest',   price6: 25, price8: 40, price10: 55, description: 'Vanilla base with cherry compote complemented by delicate fresh cream', label: null },
    { name: 'Chocolate',      price6: 25, price8: 40, price10: 55, description: 'Moist chocolate base with rich chocolate buttercream and sprinkle of chocolate chips', label: null },
    { name: 'Caramel',        price6: 27, price8: 44, price10: 62, description: 'Moist chocolate base with salted caramel cream', label: null },
    { name: 'Spiced Carrot',  price6: 27, price8: 44, price10: 62, description: 'Classic spiced carrot base with cream cheese frosting', label: null },
    { name: 'Coffee',         price6: 27, price8: 44, price10: 62, description: 'Aromatic coffee base complemented by cream cheese frosting', label: null },
    { name: 'Red Velvet',     price6: 27, price8: 44, price10: 62, description: 'Classic velvet base with light and fluffy cream cheese frosting', label: null },
    { name: 'Coconut Raspberry', price6: 27, price8: 44, price10: 62, description: 'Vanilla base with homemade raspberry compote and creamy coconut buttercream', label: null },
    { name: 'Nutella',        price6: 27, price8: 44, price10: 62, description: 'Moist chocolate base with rich nutella buttercream topped with hazelnuts', label: null },
    { name: 'Biscoff',        price6: 29, price8: 48, price10: 67, description: 'Vanilla base with velvety biscoff buttercream and crunchy biscoff bits', label: null },
    { name: 'Biscoff',        price6: 29, price8: 48, price10: 67, description: 'Vanilla base with velvety biscoff buttercream and crunchy biscoff bits', label: null },
    { name: 'Cookies & Cream', price6: 29, price8: 48,price10: 67, description: 'Moist chocolate base with crunch oreo bits and delicious vanilla buttercream', label: null },
    { name: 'Chocolate Truffle', price6: 25, price8: 40,price10: 55, description: 'Moist chocolate base with rich chocolate ganache', label: null },
  ]
};

export default function CakesForAllOccasionsPage() {
  const [isMobile, setIsMobile] = useState(window.innerWidth < 768);

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth < 768);
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const sortedFlavors = [...cakesData.flavors].sort((a, b) => {
    const aHasLabel = a.label !== null && a.label !== undefined;
    const bHasLabel = b.label !== null && b.label !== undefined;

    if (aHasLabel && !bHasLabel) return -1;
    if (!aHasLabel && bHasLabel) return 1;

    return a.price6 - b.price6;
  });

  const SizesSection = () => (
    <div style={{ marginBottom: '3rem' }}>
      <h2 style={{
        color: '#000',
        fontWeight: "700",
        fontSize: isMobile ? '1.4rem' : '1.8rem',
        textAlign: 'center',
        marginBottom: '2rem',
        letterSpacing: '1px'
      }}>
        SIZES
      </h2>
      <div style={{
        display: 'flex',
        justifyContent: 'center',
        gap: isMobile ? '1rem' : '2rem',
        flexWrap: 'wrap',
        marginBottom: '1rem'
      }}>
        {cakesData.sizes?.map((sizeOption, i) => (
          <div key={i} style={{
            background: 'rgba(255,255,255,0.9)',
            borderRadius: '12px',
            padding: isMobile ? '1rem' : '1.5rem',
            textAlign: 'center',
            boxShadow: '0 2px 8px rgba(0,0,0,0.1)',
            border: '2px solid rgba(107, 75, 58, 0.1)',
            minWidth: '120px'
          }}>
            <h3 style={{
              color: '#000',
              fontWeight: '700',
              fontSize: isMobile ? '1.2rem' : '1.5rem',
              margin: '0 0 0.5rem 0'
            }}>
              {sizeOption.size}
            </h3>
            <p style={{
              color: '#666',
              fontSize: isMobile ? '0.9rem' : '1rem',
              margin: '0 0 0.5rem 0',
              textTransform: 'uppercase',
              letterSpacing: '0.5px'
            }}>
              SERVES {sizeOption.serves}
            </p>
          </div>
        ))}
      </div>
      <p style={{
        textAlign: 'center',
        color: '#666',
        fontSize: isMobile ? '0.85rem' : '0.95rem',
        fontStyle: 'italic',
        margin: 0
      }}>
        For anything beyond that you can custom order them.
      </p>
    </div>
  );

  const AddOnsSection = () => (
    <div style={{ marginBottom: '3rem' }}>
      <h2 style={{
        color: '#000',
        fontWeight: "700",
        fontSize: isMobile ? '1.4rem' : '1.8rem',
        textAlign: 'center',
        marginBottom: '2rem',
        letterSpacing: '1px'
      }}>
        ADD ONS
      </h2>
      <Row className="justify-content-center">
        {cakesData.addOns?.map((addon, i) => (
          <Col key={i} xs={12} sm={6} md={4} className="mb-3">
            <div style={{
              background: 'rgba(255,255,255,0.9)',
              borderRadius: '12px',
              padding: isMobile ? '1rem' : '1.5rem',
              textAlign: 'center',
              boxShadow: '0 2px 8px rgba(0,0,0,0.1)',
              border: '2px solid rgba(107, 75, 58, 0.1)',
              height: '100%',
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'center'
            }}>
              <h4 style={{
                color: '#000',
                fontWeight: '600',
                fontSize: isMobile ? '1rem' : '1.2rem',
                margin: '0 0 0.5rem 0',
                textTransform: 'uppercase',
                letterSpacing: '0.5px'
              }}>
                {addon.name}
              </h4>
              <p style={{
                color: '#000',
                fontWeight: '700',
                fontSize: isMobile ? '1rem' : '1.1rem',
                margin: 0,
                fontStyle: 'italic'
              }}>
                +€{addon.price}
              </p>
            </div>
          </Col>
        ))}
      </Row>
      <p style={{
        textAlign: 'center',
        color: '#666',
        fontSize: isMobile ? '0.85rem' : '0.95rem',
        fontStyle: 'italic',
        margin: 0
      }}>
        Get your personalized message inscribed on your cake!
      </p>
    </div>
  );

  return (
    <div
      style={{
        background: "#E6E6FA",
        minHeight: "100vh",
        paddingBottom: '10vh'
      }}
    >
      <Container style={{ paddingTop: '2rem' }}>
        <div style={{ maxWidth: 800, margin: "0 auto 4rem" }}>
          <SizesSection />
          <AddOnsSection />

          <h2 style={{
            color: '#000',
            fontWeight: "700",
            fontSize: isMobile ? '1.4rem' : '1.8rem',
            textAlign: 'center',
            marginBottom: '2rem',
            letterSpacing: '1px'
          }}>
            FLAVORS
          </h2>

          {sortedFlavors.map((item, i) => (
            <FlavorItem key={i} item={item} sect="cakesForAllOccasions" />
          ))}
        </div>
      </Container>
      <MainFooter />
    </div>
  );
}
