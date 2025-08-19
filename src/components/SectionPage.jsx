import { useState, useEffect } from "react";
import { Container, Row, Col } from 'react-bootstrap';
import { useParams, useNavigate } from "react-router-dom";
import { SITE } from "../constants/values";

const sectionFlavors = {
  cakesForAllOccasions: {
    title: "CREAM CHEESE CAKES",
    flavors: [
      {
        name: 'RED VELVET',
        price: 27,
        description: 'Classic velvet base with light and fluffy vanilla cream cheese frosting'
      },
      {
        name: 'CARROT',
        price: 27,
        description: 'Spiced carrot base complemented by tangy vanilla cream'
      },
      {
        name: 'COFFEE',
        price: 27,
        description: 'Aromatic coffee base complemented by vanilla cream cheese frosting'
      },
      {
        name: 'OREO',
        price: 29,
        description: 'Moist chocolate base with crunch oreo bits and delicious vanilla cream cheese frosting'
      },
      {
        name: 'BISCOFF',
        price: 29,
        description: 'Vanilla base with velvety biscoff cream cheese and crunchy biscoff bits'
      },
      {
        name: 'NUTELLA',
        price: 27,
        description: 'Moist chocolate base with rich nutella cream cheese'
      }
    ],
    title2: "BUTTERCREAM CAKES",
    flavors2: [
      {
        name: 'VANILLA',
        price: 24,
        description: 'Classic vanilla base with light and fluffy vanilla cream'
      },
      {
        name: 'CHOCOLATE',
        price: 25,
        description: 'Moist chocolate base with rich chocolate buttercream and sprinkle of chocolate chips'
      },
      {
        name: 'COFFEE',
        price: 24,
        description: 'Aromatic coffee base complemented by vanilla frosting'
      },
      {
        name: 'COCONUT RASPBERRY',
        price: 25,
        description: 'Vanilla base with homemade raspberry purée and coconut buttercream'
      },
      {
        name: 'OREO',
        price: 29,
        description: 'Moist chocolate base with crunch oreo bits and delicious vanilla cream'
      },
      {
        name: 'BISCOFF',
        price: 29,
        description: 'Vanilla base with velvety biscoff buttercream and crunchy biscoff bits'
      },
      {
        name: 'NUTELLA',
        price: 27,
        description: 'Moist chocolate base with rich chocolate cream and luscious nutella spread'
      }
    ],
    title3: "FRESH CREAM CAKES",
    flavors3: [
      {
        name: 'STRAWBERRY',
        price: 26,
        description: 'Moist vanilla base with homemade strawberry purée and fluffy strawberry cream'
      },
      {
        name: 'MANGO',
        price: 24,
        description: 'Classic vanilla base paired with rich mango purée and smooth mango cream'
      },
      {
        name: 'PINEAPPLE',
        price: 24,
        description: 'Vanilla base with light pineapple cream and juicy pineapple chunks'
      },
      {
        name: 'WHITE FOREST',
        price: 25,
        description: 'Vanilla base with cherry compote complemented by delicate white chocolate fresh cream'
      },
      {
        name: 'BLACK FOREST',
        price: 25,
        description: 'Moist chocolate base with cherry compote and delicious chocolate cream'
      },
      {
        name: 'ROSE PISTACHIO',
        price: 29,
        description: 'Pistachio base, layered with aromatic rose cream and crushed pistachio'
      },
      {
        name: 'COCONUT RASPBERRY',
        price: 27,
        description: 'Vanilla base with tangy raspberry jam and creamy coconut fresh cream'
      }
    ],
    basePrice: 'From €24.00'
  },
  partyFavorites: {
    flavors: [
      { name: 'Cupcakes (6 pack)', price: 15, description: 'Assorted flavors in elegant packaging' },
      { name: 'Tres Leches Slice', price: 6, description: 'Traditional milk-soaked sponge cake' },
      { name: 'Tea Cake Slice', price: 5, description: 'Perfect afternoon treat with tea' },
      { name: 'Tiramisu Cup', price: 7, description: 'Classic Italian coffee-flavored dessert' },
      { name: 'Mixed Selection Box', price: 25, description: 'Variety of our best treats' },
      { name: 'Party Pack (12 pieces)', price: 35, description: 'Perfect for gatherings' }
    ],
    basePrice: 'From €5.00'
  },
  customThemedCakes: {
    flavors: [
      { name: 'Simple Custom Design', price: 45, description: 'Basic themed decoration on any flavor base' },
      { name: 'Detailed Theme Cake', price: 65, description: 'Intricate designs with custom elements' },
      { name: 'Premium Decorated', price: 85, description: 'Advanced decorations with fondant work' },
      { name: 'Multi-Tier Custom', price: 120, description: '2-3 tier custom designed celebration cake' },
      { name: '3D Sculpted Cake', price: 150, description: 'Fully sculpted themed masterpiece' }
    ],
    basePrice: 'From €45.00'
  },
  bouquets: {
    flavors: [
      { name: 'Mini Bouqcake (6 cupcakes)', price: 25, description: 'Perfect small gift arrangement' },
      { name: 'Classic Bouqcake (9 cupcakes)', price: 35, description: 'Beautiful floral cupcake arrangement' },
      { name: 'Deluxe Bouqcake (12 cupcakes)', price: 45, description: 'Elegant large bouquet design' },
      { name: 'Premium Bouqcake (15 cupcakes)', price: 55, description: 'Stunning premium gift bouquet' }
    ],
    basePrice: 'From €25.00'
  }
};

export default function SectionPage() {
  const { sect } = useParams();
  const section = SITE.sections[sect];
  const navigate = useNavigate();
  const [isMobile, setIsMobile] = useState(window.innerWidth < 768);

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth < 768);
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  // Scroll to top when component mounts
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  if (!section) {
    navigate('/');
    return null;
  }

  const sectionData = sectionFlavors[sect] || { flavors: [], basePrice: '€0.00' };

  const colors = {
    cakesForAllOccasions: "#E6E6FA",
    partyFavorites: "#FFDDEE",
    customThemedCakes: "#DDEEFF",
    bouquets: "#FFE0F2"
  };

  const textColors = {
    cakesForAllOccasions: "#6B5B7B",
    partyFavorites: "#B84C73",
    customThemedCakes: "#5C7DB1",
    bouquets: "#CC5E8B"
  };

  return (
    <div
      style={{
        background: colors[sect] || "#fff",
        minHeight: "80vh",
        paddingTop: '2rem'
      }}
    >
      <Container>
        <div className="text-center mb-5">
          <h1 style={{
            color: '#000',
            fontWeight: "700",
            marginBottom: "1rem",
            fontSize: isMobile ? '1.8rem' : '2.5rem',
            letterSpacing: '2px'
          }}>
            ZUNU BAKEHOUSE
          </h1>
          <p style={{
            fontSize: isMobile ? '1.1rem' : '1.3rem',
            fontWeight: '600',
            color: '#6B4B3A',
            margin: '0 auto 2rem',
            maxWidth: '600px'
          }}>
            {sectionData.basePrice}
          </p>
        </div>

        {/* For Cakes for All Occasions - Multiple Categories */}
        {sect === 'cakesForAllOccasions' && (
          <>
            {/* Cream Cheese Cakes */}
            <div style={{ maxWidth: 800, margin: "0 auto 4rem" }}>
              <h2 style={{
                color: '#000',
                fontWeight: "600",
                fontSize: isMobile ? '1.3rem' : '1.8rem',
                textAlign: 'center',
                marginBottom: '3rem',
                letterSpacing: '1px'
              }}>
                {sectionData.title}
              </h2>

              {sectionData.flavors.map((item, i) => (
                <div key={i} style={{
                  marginBottom: '2rem',
                  textAlign: 'center'
                }}>
                  <h3 style={{
                    color: '#000',
                    fontWeight: '700',
                    fontSize: isMobile ? '1.1rem' : '1.4rem',
                    marginBottom: '0.5rem',
                    letterSpacing: '1px'
                  }}>
                    {item.name}
                    <span style={{
                      float: 'right',
                      color: '#000',
                      fontWeight: '700'
                    }}>
                      FROM €{item.price}.99
                    </span>
                  </h3>
                  <p style={{
                    color: '#666',
                    fontSize: isMobile ? '0.9rem' : '1rem',
                    margin: '0.5rem auto',
                    maxWidth: '600px',
                    textTransform: 'uppercase',
                    letterSpacing: '0.5px',
                    fontWeight: '400'
                  }}>
                    {item.description}
                  </p>
                </div>
              ))}
            </div>

            {/* Buttercream Cakes */}
            <div style={{ maxWidth: 800, margin: "0 auto 4rem" }}>
              <h2 style={{
                color: '#000',
                fontWeight: "600",
                fontSize: isMobile ? '1.3rem' : '1.8rem',
                textAlign: 'center',
                marginBottom: '3rem',
                letterSpacing: '1px'
              }}>
                {sectionData.title2}
              </h2>

              {sectionData.flavors2.map((item, i) => (
                <div key={i} style={{
                  marginBottom: '2rem',
                  textAlign: 'center'
                }}>
                  <h3 style={{
                    color: '#000',
                    fontWeight: '700',
                    fontSize: isMobile ? '1.1rem' : '1.4rem',
                    marginBottom: '0.5rem',
                    letterSpacing: '1px'
                  }}>
                    {item.name}
                    <span style={{
                      float: 'right',
                      color: '#000',
                      fontWeight: '700'
                    }}>
                      FROM €{item.price}.99
                    </span>
                  </h3>
                  <p style={{
                    color: '#666',
                    fontSize: isMobile ? '0.9rem' : '1rem',
                    margin: '0.5rem auto',
                    maxWidth: '600px',
                    textTransform: 'uppercase',
                    letterSpacing: '0.5px',
                    fontWeight: '400'
                  }}>
                    {item.description}
                  </p>
                </div>
              ))}
            </div>

            {/* Fresh Cream Cakes */}
            <div style={{ maxWidth: 800, margin: "0 auto 4rem" }}>
              <h2 style={{
                color: '#000',
                fontWeight: "600",
                fontSize: isMobile ? '1.3rem' : '1.8rem',
                textAlign: 'center',
                marginBottom: '3rem',
                letterSpacing: '1px'
              }}>
                {sectionData.title3}
              </h2>

              {sectionData.flavors3.map((item, i) => (
                <div key={i} style={{
                  marginBottom: '2rem',
                  textAlign: 'center'
                }}>
                  <h3 style={{
                    color: '#000',
                    fontWeight: '700',
                    fontSize: isMobile ? '1.1rem' : '1.4rem',
                    marginBottom: '0.5rem',
                    letterSpacing: '1px'
                  }}>
                    {item.name}
                    <span style={{
                      float: 'right',
                      color: '#000',
                      fontWeight: '700'
                    }}>
                      FROM €{item.price}.99
                    </span>
                  </h3>
                  <p style={{
                    color: '#666',
                    fontSize: isMobile ? '0.9rem' : '1rem',
                    margin: '0.5rem auto',
                    maxWidth: '600px',
                    textTransform: 'uppercase',
                    letterSpacing: '0.5px',
                    fontWeight: '400'
                  }}>
                    {item.description}
                  </p>
                </div>
              ))}
            </div>
          </>
        )}

        {/* For Other Sections */}
        {sect !== 'cakesForAllOccasions' && (
          <div style={{ maxWidth: 800, margin: "0 auto 4rem" }}>
            {sectionData.flavors.map((item, i) => (
              <div key={i} style={{
                marginBottom: '2rem',
                textAlign: 'center'
              }}>
                <h3 style={{
                  color: '#000',
                  fontWeight: '700',
                  fontSize: isMobile ? '1.1rem' : '1.4rem',
                  marginBottom: '0.5rem',
                  letterSpacing: '1px'
                }}>
                  {item.name}
                  <span style={{
                    float: 'right',
                    color: '#000',
                    fontWeight: '700'
                  }}>
                    FROM €{item.price}.99
                  </span>
                </h3>
                <p style={{
                  color: '#666',
                  fontSize: isMobile ? '0.9rem' : '1rem',
                  margin: '0.5rem auto',
                  maxWidth: '600px',
                  textTransform: 'uppercase',
                  letterSpacing: '0.5px',
                  fontWeight: '400'
                }}>
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        )}
      </Container>
    </div>
  );
}
