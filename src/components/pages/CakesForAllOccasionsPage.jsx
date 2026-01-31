// components/pages/CakesForAllOccasionsPage.jsx
import { useState, useEffect } from "react";
import { Container } from 'react-bootstrap';
import MainFooter from "../MainFooter";
import FlavorItem from "../shared/FlavorItem";

const cakesData = {
  sizes: [
    { size: '6"', serves: '8-10' },
    { size: '8"', serves: '16-20' },
    { size: '10"', serves: '25-30' }
  ],
  flavors: [
    { name: 'Mango',          price6: 30, price8: 55, price10: 80, description: 'Classic vanilla base paired with rich mango purée and smooth mango fresh cream', label: 'Best-seller' },
    { name: 'Black Forest',   price6: 30, price8: 55, price10: 80, description: 'Moist chocolate base with cherry compote and delicious fresh cream', label: 'Must-try' },
    { name: 'Strawberry',     price6: 30, price8: 55, price10: 80, description: 'Moist vanilla base with homemade strawberry purée and fluffy strawberry fresh cream', label: 'Must-try' },
    { name: 'Rose Pistachio', price6: 35, price8: 55, price10: 90, description: 'Pistachio base, layered with aromatic rose fresh cream and crushed pistachio', label: 'Best-seller' },
    { name: 'Dubai Dream',    price6: 40, price8: 65, price10: 100, description: 'Moist chocolate base with crunchy pistachio kanafeh filling complimented with chocolate ganache', label: 'Must-try' },
    { name: 'Rasmalai',       price6: 40, price8: 65, price10: 100, description: 'Soft vanilla base soaked in rasmalai milk with rasmalai fresh cream and nuts', label: 'Best-seller' },
    { name: 'Gulab Jamun',       price6: 40, price8: 65, price10: 100, description: 'Soft vanilla base soaked in rose syrup with cardamom fresh cream and gulab jamun bits and nuts', label: null },
    { name: 'Pineapple',      price6: 30, price8: 50, price10: 80, description: 'Vanilla base with light pineapple fresh cream and juicy pineapple chunks', label: null },
    { name: 'Vanilla',        price6: 30, price8: 50, price10: 80, description: 'Classic vanilla base with light and fluffy vanilla buttercream', label: null },
    { name: 'White Forest',   price6: 30, price8: 50, price10: 80, description: 'Vanilla base with cherry compote complemented by delicate fresh cream', label: null },
    { name: 'Chocolate',      price6: 30, price8: 50, price10: 80, description: 'Moist chocolate base with rich chocolate buttercream and sprinkle of chocolate chips', label: null },
    { name: 'Caramel',        price6: 35, price8: 55, price10: 90, description: 'Moist chocolate base with salted caramel cream', label: null },
    { name: 'Spiced Carrot',  price6: 35, price8: 55, price10: 90, description: 'Classic spiced carrot base with cream cheese frosting', label: null },
    { name: 'Coffee',         price6: 35, price8: 55, price10: 90, description: 'Aromatic coffee base complemented by cream cheese frosting', label: null },
    { name: 'Red Velvet',     price6: 35, price8: 55, price10: 90, description: 'Classic velvet base with light and fluffy cream cheese frosting', label: null },
    { name: 'Coconut Raspberry', price6: 35, price8: 55, price10: 90, description: 'Vanilla base with homemade raspberry compote and creamy coconut buttercream', label: null },
    { name: 'Nutella',        price6: 35, price8: 55, price10: 90, description: 'Moist chocolate base with rich nutella buttercream topped with hazelnuts', label: null },
    { name: 'Biscoff',        price6: 35, price8: 55, price10: 90, description: 'Vanilla base with velvety biscoff buttercream and crunchy biscoff bits', label: null },
    { name: 'Cookies & Cream', price6: 35, price8: 55, price10: 90, description: 'Moist chocolate base with crunch oreo bits and delicious vanilla buttercream', label: null },
    { name: 'Chocolate Truffle', price6: 35, price8: 50, price10: 80, description: 'Moist chocolate base with rich chocolate ganache', label: null },
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
        fontWeight: "800",
        fontSize: isMobile ? '1.4rem' : '1.8rem',
        textAlign: 'center',
        marginBottom: '1.5rem',
        letterSpacing: '1px'
      }}>
        SIZES
      </h2>

      {/* Compact table */}
      <div style={{
        maxWidth: isMobile ? '100%' : '650px',
        margin: '0 auto 1rem',
        background: 'rgba(265,265,265,0.9)',
        borderRadius: '12px',
        padding: isMobile ? '1rem' : '1.5rem',
        boxShadow: '0 2px 8px rgba(0,0,0,0.1)',
        border: '2px solid rgba(107, 75, 58, 0.1)'
      }}>
        <table style={{
          width: '100%',
          borderCollapse: 'collapse',
          textAlign: 'center'
        }}>
          <thead>
            <tr>
              <th style={{
                padding: isMobile ? '0.5rem' : '0.75rem',
                borderBottom: '2px solid rgba(107, 75, 58, 0.2)',
                color: '#000',
                fontWeight: '800',
                fontSize: isMobile ? '0.95rem' : '1.1rem',
                letterSpacing: '0.5px'
              }}>
                SIZE
              </th>
              {cakesData.sizes.map((s, i) => (
                <th key={i} style={{
                  padding: isMobile ? '0.5rem' : '0.75rem',
                  borderBottom: '2px solid rgba(107, 75, 58, 0.2)',
                  color: '#000',
                  fontWeight: '800',
                  fontSize: isMobile ? '1rem' : '1.2rem'
                }}>
                  {s.size}
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            <tr>
              <td style={{
                padding: isMobile ? '0.75rem 0.5rem' : '1rem 0.75rem',
                color: '#666',
                fontWeight: '600',
                fontSize: isMobile ? '0.85rem' : '0.95rem',
                textTransform: 'uppercase',
                letterSpacing: '0.5px'
              }}>
                Serves
              </td>
              {cakesData.sizes.map((s, i) => (
                <td key={i} style={{
                  padding: isMobile ? '0.75rem 0.5rem' : '1rem 0.75rem',
                  color: '#333',
                  fontWeight: '600',
                  fontSize: isMobile ? '0.9rem' : '1rem'
                }}>
                  {s.serves}
                </td>
              ))}
            </tr>
          </tbody>
        </table>
      </div>

      <p style={{
        textAlign: 'center',
        color: '#666',
        fontSize: isMobile ? '0.85rem' : '0.95rem',
        fontStyle: 'italic',
        margin: 0
      }}>
        For larger sizes, please contact us for a custom order.
      </p>
    </div>
  );

  return (
    <div
      style={{
        background: "#E6E6FA",
        minHeight: "100vh",
        paddingBottom: '12vh'
      }}
    >
      <Container style={{ paddingTop: '2rem' }}>
        <div style={{ maxWidth: 800, margin: "0 auto 4rem" }}>
          <SizesSection />

          <h2 style={{
            color: '#000',
            fontWeight: "800",
            fontSize: isMobile ? '1.4rem' : '1.8rem',
            textAlign: 'center',
            marginBottom: '2rem',
            letterSpacing: '1px'
          }}>
            FLAVOURS
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
