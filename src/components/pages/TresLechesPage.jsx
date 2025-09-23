import { useState, useEffect } from "react";
import { Container } from 'react-bootstrap';
import MainFooter from "../MainFooter";
import FlavorItem from "../shared/FlavorItem";

const tresLechesData = {
  // Only packs now
  packsNote: 'Available in packs of 10 or 20. Mixed boxes on request subject to availability.',
  flavors: [
    {
      name: 'Classic Tres Leches',
      price10: 35,
      price20: 60,
      description: 'Traditional milk-soaked sponge with vanilla cream',
      label: 'Best-seller'
    },
    {
      name: 'Mango Tres Leches',
      price10: 40,
      price20: 70,
      description: 'Alphonso mango purée folded into silky cream',
      label: 'Seasonal'
    },
    {
      name: 'Coffee Tres Leches',
      price10: 35,
      price20: 60,
      description: 'Espresso-kissed sponge with coffee-infused leches',
      label: 'Popular'
    },
    {
      name: 'Rasmalai Tres Leches',
      price10: 45,
      price20: 80,
      description: 'Cardamom-saffron milk with pistachio notes',
      label: 'Premium'
    },
    {
      name: 'Rose Tres Leches',
      price10: 35,
      price20: 60,
      description: 'Fragrant rose milk with a delicate floral finish',
      label: null
    },
  ]
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
