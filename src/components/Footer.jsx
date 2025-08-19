import { useState, useEffect } from "react";
import { BsWhatsapp } from "react-icons/bs";

const whatsappLink = "https://wa.me/+353892058875";

export default function Footer() {
  const [isMobile, setIsMobile] = useState(window.innerWidth < 768);

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth < 768);
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

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
        justifyContent: 'center',
        padding: isMobile ? '0 15px' : '0 20px'
      }}
    >
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
    </footer>
  );
}
