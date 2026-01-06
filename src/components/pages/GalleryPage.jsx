// GalleryPage.jsx (new child page)
import { useState } from "react";
import { Container, Row, Col, Card, Modal } from 'react-bootstrap';
import MainFooter from "../MainFooter";

// Master list (can move to a shared file)
let ALL_IMAGES = [
  "/images/Gallery/1.jpeg",
  "/images/Gallery/2.jpeg",
  "/images/Gallery/3.jpeg",
  "/images/Gallery/4.jpeg",
  "/images/Gallery/5.jpeg",
  "/images/Gallery/6.jpeg",
  "/images/Gallery/7.jpeg",
  "/images/Gallery/8.jpeg",
  "/images/Gallery/9.jpeg",
  "/images/Gallery/13.jpg",
  "/images/Gallery/14.jpg",
  "/images/Gallery/15.jpg",
  "/images/Gallery/16.jpg",
  "/images/Gallery/17.jpg",
  "/images/Gallery/18.jpg",
  "/images/Gallery/19.jpg",
  "/images/Gallery/20.jpg",
  "/images/Gallery/21.jpg",
  "/images/Gallery/22.jpg",
  "/images/Gallery/23.jpg",
  "/images/Gallery/24.jpg",
  "/images/Gallery/25.jpg",
  "/images/Gallery/26.jpg",
  "/images/Gallery/27.jpg",
  "/images/Gallery/28.jpg",
  "/images/Gallery/29.jpg",
  "/images/Gallery/30.jpg",
  "/images/Gallery/31.jpg",
  "/images/Gallery/32.jpg",
  "/images/Gallery/33.jpg",
  "/images/Gallery/34.jpg",
  "/images/Gallery/35.jpg",
  "/images/Gallery/36.jpg",
  "/images/Gallery/37.jpg",
];
ALL_IMAGES = [...ALL_IMAGES].reverse();

// Optional: filenames to hide
const HIDE = new Set([
  // "draft.jpg",
]);

const images = ALL_IMAGES.filter(u => !HIDE.has(u.split("/").pop() || ""));

export default function GalleryPage() {
  const [open, setOpen] = useState(false);
  const [current, setCurrent] = useState(0);

  const showImage = (idx) => { setCurrent(idx); setOpen(true); };
  const prev = () => setCurrent(i => (i > 0 ? i - 1 : images.length - 1));
  const next = () => setCurrent(i => (i < images.length - 1 ? i + 1 : 0));

  return (
    <div style={{ background: "#FFF3E0", minHeight: "100vh", paddingBottom: '15vh' }}>
      <Container style={{ paddingTop: '2rem' }}>
        <div style={{ maxWidth: 1080, margin: "0 auto 1.25rem" }}>
          <h1 style={{ color: '#773953', fontWeight: 700, fontSize: '1.8rem', letterSpacing: '0.5px', marginBottom: '0.5rem' }}>
            Gallery
          </h1>
          <p style={{ color: '#6B4B3A', fontSize: '1rem', margin: 0 }}>
            Browse all photos in one place; tap any image to view and swipe or use arrows to navigate.
          </p>
        </div>

        <Row xs={2} md={4} lg={5} className="g-2">
          {images.map((img, i) => (
            <Col key={i}>
              <Card className="border-0 shadow-sm h-100" style={{ cursor: 'pointer', height: '160px', overflow: 'hidden' }} onClick={() => showImage(i)}>
                <Card.Img
                  src={img}
                  alt=""
                  loading="lazy"
                  style={{ height: '100%', width: '100%', objectFit: 'cover', transition: 'transform 0.25s' }}
                  onMouseEnter={e => e.currentTarget.style.transform = 'scale(1.05)'}
                  onMouseLeave={e => e.currentTarget.style.transform = 'scale(1)'}
                />
              </Card>
            </Col>
          ))}
        </Row>

        <Modal show={open} onHide={() => setOpen(false)} centered size="lg">
          <div style={{ position: "relative", background: "#222", textAlign: "center" }}>
            <img src={images[current]} alt="" style={{ maxWidth: '100%', maxHeight: '75vh', margin: "auto", display: 'block' }} />
            <button onClick={prev} style={{ position: "absolute", left: 10, top: "50%", transform: "translateY(-50%)", background: "#fff7", border: 0, borderRadius: "50%", fontSize: 28, padding: "10px", cursor: "pointer" }}>{"<"}</button>
            <button onClick={next} style={{ position: "absolute", right: 10, top: "50%", transform: "translateY(-50%)", background: "#fff7", border: 0, borderRadius: "50%", fontSize: 28, padding: "10px", cursor: "pointer" }}>{">"}</button>
          </div>
        </Modal>
      </Container>
      <MainFooter />
    </div>
  );
}
