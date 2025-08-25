import { useState, useEffect } from "react";
import { Container } from 'react-bootstrap';
import MainFooter from "../MainFooter";
import FlavorItem from "../shared/FlavorItem";

const bouquetsData = {
  flavors: [
    { name: 'Mini Bouqcake (6 cupcakes)', price: 25, description: 'Perfect small gift arrangement', label: null },
    { name: 'Classic Bouqcake (9 cupcakes)', price: 35, description: 'Beautiful floral cupcake arrangement', label: 'Best-seller' },
    { name: 'Deluxe Bouqcake (12 cupcakes)', price: 45, description: 'Elegant large bouquet design', label: 'Must-try' },
    { name: 'Premium Bouqcake (15 cupcakes)', price: 55, description: 'Stunning premium gift bouquet', label: null }
  ]
};

export default function BouquetsPage() {
  const [isMobile, setIsMobile] = useState(window.innerWidth < 768);

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth < 768);
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const sortedFlavors = [...bouquetsData.flavors].sort((a, b) => {
    const aHasLabel = a.label !== null && a.label !== undefined;
    const bHasLabel = b.label !== null && b.label !== undefined;

    if (aHasLabel && !bHasLabel) return -1;
    if (!aHasLabel && bHasLabel) return 1;

    return a.price - b.price;
  });

  return (
    <div
      style={{
        background: "#FFE0F2",
        minHeight: "100vh",
        paddingBottom: '10vh'
      }}
    >
      <Container style={{ paddingTop: '2rem' }}>
        <div style={{ maxWidth: 800, margin: "0 auto 4rem" }}>
          {sortedFlavors.map((item, i) => (
            <FlavorItem key={i} item={item} sect="bouquets" />
          ))}
        </div>
      </Container>
      <MainFooter />
    </div>
  );
}
