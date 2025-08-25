import { useState, useEffect } from "react";
import { Container } from 'react-bootstrap';
import MainFooter from "../MainFooter";
import FlavorItem from "../shared/FlavorItem";

const partyFavoritesData = {
  flavors: [
    { name: 'Cupcakes (6 pack)', price: 15, description: 'Assorted flavors in elegant packaging', label: 'Best-seller' },
    { name: 'Tres Leches Slice', price: 6, description: 'Traditional milk-soaked sponge cake', label: 'Must-try' },
    { name: 'Tea Cake Slice', price: 5, description: 'Perfect afternoon treat with tea', label: null },
    { name: 'Tiramisu Cup', price: 7, description: 'Classic Italian coffee-flavored dessert', label: null },
    { name: 'Mixed Selection Box', price: 25, description: 'Variety of our best treats', label: 'Best-seller' },
    { name: 'Party Pack (12 pieces)', price: 35, description: 'Perfect for gatherings', label: null }
  ]
};

export default function PartyFavoritesPage() {
  const [isMobile, setIsMobile] = useState(window.innerWidth < 768);

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth < 768);
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const sortedFlavors = [...partyFavoritesData.flavors].sort((a, b) => {
    const aHasLabel = a.label !== null && a.label !== undefined;
    const bHasLabel = b.label !== null && b.label !== undefined;

    if (aHasLabel && !bHasLabel) return -1;
    if (!aHasLabel && bHasLabel) return 1;

    return a.price - b.price;
  });

  return (
    <div
      style={{
        background: "#FFDDEE",
        minHeight: "100vh",
        paddingBottom: '10vh'
      }}
    >
      <Container style={{ paddingTop: '2rem' }}>
        <div style={{ maxWidth: 800, margin: "0 auto 4rem" }}>
          {sortedFlavors.map((item, i) => (
            <FlavorItem key={i} item={item} sect="partyFavorites" />
          ))}
        </div>
      </Container>
      <MainFooter />
    </div>
  );
}
