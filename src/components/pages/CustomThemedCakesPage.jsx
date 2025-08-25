import { useState, useEffect } from "react";
import { Container } from 'react-bootstrap';
import MainFooter from "../MainFooter";
import FlavorItem from "../shared/FlavorItem";

const customThemedCakesData = {
  flavors: [
    { name: 'Simple Custom Design', price: 45, description: 'Basic themed decoration on any flavor base', label: null },
    { name: 'Detailed Theme Cake', price: 65, description: 'Intricate designs with custom elements', label: 'Best-seller' },
    { name: 'Premium Decorated', price: 85, description: 'Advanced decorations with fondant work', label: 'Must-try' },
    { name: 'Multi-Tier Custom', price: 120, description: '2-3 tier custom designed celebration cake', label: null },
    { name: '3D Sculpted Cake', price: 150, description: 'Fully sculpted themed masterpiece', label: null }
  ]
};

export default function CustomThemedCakesPage() {
  const [isMobile, setIsMobile] = useState(window.innerWidth < 768);

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth < 768);
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const sortedFlavors = [...customThemedCakesData.flavors].sort((a, b) => {
    const aHasLabel = a.label !== null && a.label !== undefined;
    const bHasLabel = b.label !== null && b.label !== undefined;

    if (aHasLabel && !bHasLabel) return -1;
    if (!aHasLabel && bHasLabel) return 1;

    return a.price - b.price;
  });

  return (
    <div
      style={{
        background: "#DDEEFF",
        minHeight: "100vh",
        paddingBottom: '10vh'
      }}
    >
      <Container style={{ paddingTop: '2rem' }}>
        <div style={{ maxWidth: 800, margin: "0 auto 4rem" }}>
          {sortedFlavors.map((item, i) => (
            <FlavorItem key={i} item={item} sect="customThemedCakes" />
          ))}
        </div>
      </Container>
      <MainFooter />
    </div>
  );
}
