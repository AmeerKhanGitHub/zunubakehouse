import { useState, useEffect } from "react";
import { Container } from 'react-bootstrap';
import MainFooter from "../MainFooter";
import FlavorItem from "../shared/FlavorItem";

const tresLechesData = {
  packsNote: 'Our melt-in-the-mouth Tres Leches is a true party favourite – soft, fluffy sponge soaked in three kinds of milk and topped with fresh cream. Perfect for celebrations! Available in two tray sizes: Regular (serves 6–8) and Large (serves 12–14).',
  flavors: [
    {
      name: 'Classic Tres Leches',
      sizes: [
          { label: "Regular", price: 35 },
          { label: "Large",   price: 60 }
        ],
      label: null
    },
    {
      name: 'Mango Tres Leches',
      sizes: [
          { label: "Regular", price: 35 },
          { label: "Large",   price: 60 }
        ],
      label: null
    },
    {
      name: 'Rasmalai Tres Leches',
      sizes: [
          { label: "Regular", price: 40 },
          { label: "Large",   price: 70 }
        ],
      label: 'Best-seller'
    },
    {
      name: 'Rose Tres Leches',
      sizes: [
          { label: "Regular", price: 35 },
          { label: "Large",   price: 60 }
        ],
      label: null
    },
    {
      name: 'Coffee Tres Leches',
      sizes: [
          { label: "Regular", price: 40 },
          { label: "Large",   price: 65 }
        ],
      label: null
    },
    {
      name: 'Chocolate Tres Leches',
      sizes: [
          { label: "Regular", price: 40 },
          { label: "Large",   price: 65 }
        ],
      label: null
    },  ]
};

export default function TresLechesPage() {
  const [isMobile, setIsMobile] = useState(typeof window !== 'undefined' ? window.innerWidth < 768 : true);

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth < 768);
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  useEffect(() => { window.scrollTo(0, 0); }, []);

  // Sort: labeled first, then by 10-pack price
  const sortedFlavors = [...tresLechesData.flavors].sort((a, b) => {
    const aHas = a.label != null;
    const bHas = b.label != null;
    if (aHas && !bHas) return -1;
    if (!aHas && bHas) return 1;
    return (a.price10 ?? 0) - (b.price10 ?? 0);
  });

  // Adapter to pass into FlavorItem while preserving your existing component API.
  // Here we map 10/20 pack pricing into the fields FlavorItem expects.
  const adaptForFlavorItem = (f) => ({
    ...f,
    // Reuse price fields so FlavorItem can render two prices if it’s wired for size-based pricing.
    price6: f.price10,
    price8: f.price20,
    // Optional: expose a hint so FlavorItem can label prices correctly if you update it.
    priceLabels: { left: '10 pack', right: '20 pack' }
  });

  return (
    <div style={{ background: "#FFF4E6", minHeight: "100vh", paddingBottom: '10vh' }}>
      <Container style={{ paddingTop: '2rem' }}>
        <div style={{ maxWidth: 800, margin: "0 auto 3rem", textAlign: 'center' }}>
          <h1 style={{
            color: '#000', fontWeight: 800,
            fontSize: isMobile ? '1.6rem' : '2rem',
            letterSpacing: '0.5px', marginBottom: '0.75rem'
          }}>
            Tres Leches
          </h1>
          <p style={{
            color: '#444',
            fontSize: isMobile ? '0.95rem' : '1.05rem',
            margin: 0
          }}>
            {tresLechesData.packsNote}
          </p>
        </div>

        <h2 style={{
          color: '#000', fontWeight: 700,
          fontSize: isMobile ? '1.4rem' : '1.8rem',
          textAlign: 'center', marginBottom: '2rem', letterSpacing: '1px'
        }}>
          Flavours
        </h2>

        <div style={{ maxWidth: 800, margin: "0 auto 4rem" }}>
          {sortedFlavors.map((item, i) => (
            <FlavorItem
              key={i}
              item={adaptForFlavorItem(item)}
              // Reuse the existing layout that shows two prices side-by-side
              sect="cakesForAllOccasions"
            />
          ))}
        </div>
      </Container>
      <MainFooter />
    </div>
  );
}
