import { useEffect } from "react";
import { SITE } from "./constants/values";

function SimpleCarousel() {
  // Use single image for now - sample.jpg
  return (
    <div className="carousel-container">
      <img
        src={`${import.meta.env.BASE_URL}images/sample.jpg`}
        alt="Sample bakery image"
        className="carousel-image"
        loading="lazy"
        decoding="async"
      />
    </div>
  );
}

export default function App() {
  useEffect(() => {
    document.title = SITE.meta.title;
    const desc = document.querySelector('meta[name="description"]');
    if (desc) desc.setAttribute("content", SITE.meta.description);
    const keys = document.querySelector('meta[name="keywords"]');
    if (keys) keys.setAttribute("content", SITE.meta.keywords);
  }, []);

  return (
    <>
      <Header />
      <Punchline />
      <SimpleCarousel />
      <QuoteSection />
      <CakesForAllOccasions />
      <PartyFavorites />
      <CustomThemedCakes />
      <BouquetsSection />
      <Footer />
    </>
  );
}

function Header() {
  return (
    <header className="header">
      <div className="container">
        <img
          src={`${import.meta.env.BASE_URL}images/logo.png`}
          alt={SITE.brand}
          className="logo"
        />
      </div>
    </header>
  );
}

function Punchline() {
  return (
    <div className="punchline">
      <div className="container">
        "{SITE.tagline}"
      </div>
    </div>
  );
}

function QuoteSection() {
  return (
    <div className="container">
      <section className="quote-section">
        <p className="quote">"{SITE.tagline}"</p>
      </section>
    </div>
  );
}

function CakesForAllOccasions() {
  return (
    <div className="container">
      <section className="section">
        <h2 className="section-title">{SITE.sections.cakesForAllOccasions.title}</h2>
        <p className="section-subtitle">{SITE.sections.cakesForAllOccasions.subtitle}</p>
        <div className="grid">
          {SITE.sections.cakesForAllOccasions.images.map((image, index) => (
            <div key={index} className="card">
              <img src={image} alt={`Occasion cake ${index + 1}`} className="card-image" />
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}

function PartyFavorites() {
  return (
    <div className="container">
      <section className="section">
        <h2 className="section-title">{SITE.sections.partyFavorites.title}</h2>
        <div className="grid grid-small">
          {SITE.sections.partyFavorites.items.map((item, index) => (
            <div key={index} className="card">
              <img src={item.image} alt={item.name} className="card-image" />
              <div className="card-content">
                <h3 className="card-title">{item.name}</h3>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}

function CustomThemedCakes() {
  return (
    <div className="container">
      <section className="section">
        <h2 className="section-title">{SITE.sections.customThemedCakes.title}</h2>
        <div className="grid">
          {SITE.sections.customThemedCakes.categories.map((category, index) => (
            <div key={index} className="card">
              <img src={category.image} alt={category.name} className="card-image" />
              <div className="card-content">
                <h3 className="card-title">{category.name}</h3>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}

function BouquetsSection() {
  return (
    <div className="container">
      <section className="bouquets-section">
        <h2 className="bouquets-title">{SITE.sections.bouquets.title}</h2>
        <p className="bouquets-subtitle">{SITE.sections.bouquets.subtitle}</p>
        <p className="bouquets-description">{SITE.sections.bouquets.description}</p>
      </section>
    </div>
  );
}

function Footer() {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-content">
          <h3 className="footer-brand">{SITE.brand}</h3>
          <div className="footer-contact">
            <a href={`mailto:${SITE.contact.email}`}>{SITE.contact.email}</a>
            <a href={`tel:${SITE.contact.phone}`}>{SITE.contact.phone}</a>
          </div>
          <p className="footer-copyright">&copy; 2025 {SITE.brand}. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
