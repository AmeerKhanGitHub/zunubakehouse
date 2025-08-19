import { useState, useEffect } from "react";
import { BsWhatsapp, BsArrowUp } from "react-icons/bs";

const whatsappLink = "https://wa.me/+353892058875";

export default function Footer() {
  const [isMobile, setIsMobile] = useState(window.innerWidth < 768);

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth < 768);
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  return (
    <footer
      style={{
        position: 'fixed',
        bottom: 0,
        left: 0,
        right: 0,
        height: '10vh',
        backgroundColor: '#FFDFE9',
        borderTop: '2px solid #CD5C8A',
        zIndex: 1000,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        padding: isMobile ? '0 15px' : '0 20px'
      }}
    >
      {/* Left: Spacer for visual balance */}
      <div style={{ width: isMobile ? '35px' : '40px' }} />

      {/* Center: Order Now & WhatsApp */}
      <div style={{
        display: 'flex',
        alignItems: 'center',
        gap: isMobile ? '10px' : '15px'
      }}>
        <span
          style={{
            color: '#773953',
            fontWeight: '600',
            fontSize: isMobile ? '0.9rem' : '1.1rem'
          }}
        >
          ORDER NOW
        </span>
        <a
          href={whatsappLink}
          target="_blank"
          rel="noopener noreferrer"
          style={{
            background: "#25D366",
            borderRadius: "50%",
            width: isMobile ? 38 : 45,
            height: isMobile ? 38 : 45,
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            color: "#fff",
            fontSize: isMobile ? 20 : 24,
            boxShadow: "0 3px 10px #25D36644",
            textDecoration: 'none',
            transition: 'transform 0.2s ease'
          }}
          title="Contact us on WhatsApp"
          onMouseEnter={(e) => e.target.style.transform = 'scale(1.05)'}
          onMouseLeave={(e) => e.target.style.transform = 'scale(1)'}
        >
          <BsWhatsapp />
        </a>
      </div>

      {/* Right: Scroll to Top Button */}
      <button
        onClick={scrollToTop}
        style={{
          background: "rgba(255, 255, 255, 0.9)",
          border: "2px solid #CD5C8A",
          borderRadius: "50%",
          width: isMobile ? 35 : 40,
          height: isMobile ? 35 : 40,
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          color: "#CD5C8A",
          fontSize: isMobile ? 16 : 18,
          cursor: "pointer",
          transition: 'all 0.2s ease',
          boxShadow: '0 2px 8px rgba(205, 92, 138, 0.2)'
        }}
        title="Scroll to top"
        onMouseEnter={(e) => {
          e.target.style.transform = 'translateY(-2px)';
          e.target.style.boxShadow = '0 4px 12px rgba(205, 92, 138, 0.3)';
          e.target.style.background = '#fff';
        }}
        onMouseLeave={(e) => {
          e.target.style.transform = 'translateY(0)';
          e.target.style.boxShadow = '0 2px 8px rgba(205, 92, 138, 0.2)';
          e.target.style.background = 'rgba(255, 255, 255, 0.9)';
        }}
      >
        <BsArrowUp />
      </button>
    </footer>
  );
}
