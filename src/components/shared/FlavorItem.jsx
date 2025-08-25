import { useState, useEffect } from "react";

export default function FlavorItem({ item, sect }) {
  const [isMobile, setIsMobile] = useState(window.innerWidth < 768);

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth < 768);
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const getLabelColor = (label) => {
    switch(label) {
      case 'Best-seller': return '#FF6B6B';
      case 'Must-try': return '#4ECDC4';
      case 'Popular': return '#45B7D1';
      default: return '#4ECDC4';
    }
  };

  return (
    <div style={{
      marginBottom: '2rem',
      borderBottom: '1px solid rgba(107, 75, 58, 0.1)',
      paddingBottom: '1rem'
    }}>
      {/* Desktop Layout */}
      {!isMobile && (
        <div style={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'flex-start',
          marginBottom: '0.5rem'
        }}>
          <div style={{ flex: 1, display: 'flex', alignItems: 'center', gap: '1rem' }}>
            <h3 style={{
              color: '#000',
              fontWeight: '700',
              fontSize: '1.4rem',
              letterSpacing: '1px',
              textAlign: 'left',
              margin: 0
            }}>
              {item.name}
            </h3>
            {item.label && (
              <span style={{
                background: getLabelColor(item.label),
                color: '#fff',
                padding: '4px 8px',
                borderRadius: '12px',
                fontSize: '0.8rem',
                fontWeight: '600',
                textTransform: 'uppercase',
                letterSpacing: '0.5px'
              }}>
                {item.label}
              </span>
            )}
          </div>

          {/* Price Section - Desktop */}
          {sect === 'cakesForAllOccasions' ? (
            <div style={{
              textAlign: 'right',
              marginLeft: '1rem'
            }}>
              <span style={{
                color: '#000',
                fontWeight: '700',
                fontSize: '1rem',
                fontStyle: 'italic'
              }}>
                6" - €{item.price6} / 8" - €{item.price8}
              </span>
            </div>
          ) : (
            <span style={{
              color: '#000',
              fontWeight: '700',
              fontSize: '1.2rem',
              fontStyle: 'italic',
              marginLeft: '1rem'
            }}>
              FROM €{item.price}
            </span>
          )}
        </div>
      )}

      {/* Mobile Layout */}
      {isMobile && (
        <>
          <div style={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'flex-start',
            marginBottom: '0.5rem'
          }}>
            <h3 style={{
              color: '#000',
              fontWeight: '700',
              fontSize: '1.1rem',
              letterSpacing: '1px',
              textAlign: 'left',
              margin: 0,
              flex: 1,
              lineHeight: '1.3'
            }}>
              {item.name}
            </h3>

            {/* Price Section - Mobile */}
            {sect === 'cakesForAllOccasions' ? (
              <div style={{
                textAlign: 'right',
                marginLeft: '1rem'
              }}>
                <span style={{
                  color: '#000',
                  fontWeight: '700',
                  fontSize: '0.9rem',
                  fontStyle: 'italic'
                }}>
                  6" - €{item.price6} / 8" - €{item.price8}
                </span>
              </div>
            ) : (
              <span style={{
                color: '#000',
                fontWeight: '700',
                fontSize: '1rem',
                fontStyle: 'italic',
                marginLeft: '1rem'
              }}>
                FROM €{item.price}
              </span>
            )}
          </div>

          {/* Label below flavor name on mobile */}
          {item.label && (
            <div style={{
              marginBottom: '0.5rem'
            }}>
              <span style={{
                background: getLabelColor(item.label),
                color: '#fff',
                padding: '3px 6px',
                borderRadius: '8px',
                fontSize: '0.7rem',
                fontWeight: '600',
                textTransform: 'uppercase',
                letterSpacing: '0.5px'
              }}>
                {item.label}
              </span>
            </div>
          )}
        </>
      )}

      {/* Description - Same for both layouts */}
      <p style={{
        color: '#666',
        fontSize: isMobile ? '0.9rem' : '1rem',
        margin: 0,
        textTransform: 'uppercase',
        letterSpacing: '0.5px',
        fontWeight: '400',
        textAlign: 'left',
        lineHeight: '1.4'
      }}>
        {item.description}
      </p>
    </div>
  );
}
