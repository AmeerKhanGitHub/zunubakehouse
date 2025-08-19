import { useState, useEffect } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { BsArrowLeft } from "react-icons/bs";
import { SITE } from "../constants/values";

export default function Header() {
  const navigate = useNavigate();
  const location = useLocation();
  const [isMobile, setIsMobile] = useState(window.innerWidth < 768);

  const isChildPage = location.pathname.startsWith('/section/');

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth < 768);
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <header
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        right: 0,
        height: '10vh',
        backgroundColor: '#FFF0F5',
        borderBottom: '2px solid #E6D6E6',
        zIndex: 1000,
        display: 'flex',
        alignItems: 'center',
        padding: isMobile ? '0 12px' : '0 20px',
        boxSizing: 'border-box'
      }}
    >
      {/* Left: Logo */}
      <div style={{
        flex: '0 0 auto',
        marginRight: isMobile ? '8px' : '15px'
      }}>
        <img
          src={`${import.meta.env.BASE_URL}images/logo.png`}
          alt={SITE.brand}
          height={isMobile ? "55" : "70"}
          width={isMobile ? "55" : "70"}
          className="rounded-circle"
          style={{ objectFit: 'cover' }}
        />
      </div>

      {/* Center: Title & Tagline */}
      <div
        style={{
          flex: '1 1 auto',
          textAlign: 'center',
          cursor: isChildPage ? 'default' : 'pointer',
          minWidth: 0,
          paddingLeft: isMobile ? '5px' : '10px',
          paddingRight: isMobile ? '5px' : '10px'
        }}
        onClick={!isChildPage ? () => navigate('/') : undefined}
      >
        <h1 style={{
          margin: 0,
          fontWeight: '700',
          fontSize: isMobile ? '1.5rem' : '1.9rem',
          color: '#6B4B3A',
          lineHeight: 1.2,
          overflow: 'hidden',
          textOverflow: 'ellipsis',
          whiteSpace: 'nowrap'
        }}>
          Zunu Bakehouse
        </h1>
        <p style={{
          fontStyle: 'italic',
          fontWeight: '400',
          margin: 0,
          fontSize: isMobile ? '0.75rem' : '0.95rem',
          color: '#b2868a',
          lineHeight: 1,
          overflow: 'hidden',
          textOverflow: 'ellipsis',
          whiteSpace: 'nowrap',
          marginTop: '2px',
          marginLeft: isMobile ? '0' : '2rem'
        }}>
          {SITE.tagline}
        </p>
      </div>

      {/* Right: Back Button */}
      <div style={{
        flex: '0 0 auto',
        marginLeft: isMobile ? '8px' : '15px',
        width: isMobile ? '40px' : '50px',
        display: 'flex',
        justifyContent: 'flex-end'
      }}>
        {isChildPage && (
          <button
            onClick={() => navigate('/')}
            style={{
              background: 'none',
              border: 'none',
              fontSize: isMobile ? 20 : 24,
              cursor: 'pointer',
              color: '#b2868a',
              padding: 0,
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              transition: 'color 0.2s ease'
            }}
            aria-label="Back to Home"
            onMouseEnter={(e) => e.target.style.color = '#8a6b6f'}
            onMouseLeave={(e) => e.target.style.color = '#b2868a'}
          >
            <BsArrowLeft />
          </button>
        )}
      </div>
    </header>
  );
}
