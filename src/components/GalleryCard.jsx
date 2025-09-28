// GalleryCard.jsx
import { useState } from "react";
import { Container, Row, Col, Card, Modal } from 'react-bootstrap';

// Put files in: public/images/1.jpg, 2.jpg, 3.jpg
const images = [
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
];


export default function GalleryCard({ bgColor = "#FFF", textColor = "#773953" }) {
  const [open, setOpen] = useState(false);
  const [current, setCurrent] = useState(0);

  const showImage = idx => { setCurrent(idx); setOpen(true); };
  const prev = () => setCurrent(i => (i > 0 ? i - 1 : images.length - 1));
  const next = () => setCurrent(i => (i < images.length - 1 ? i + 1 : 0));

  return (
    <Container
      className="pt-4 pb-5"
      style={{
        backgroundColor: bgColor,
        borderRadius: '1rem',
        boxShadow: '0 4px 16px rgba(60,20,50,0.06)',
        marginBottom: '2rem'
      }}
    >
      <h2 style={{
        color: textColor,
        fontWeight: '600',
        marginBottom: '1rem',
        fontSize: '1.5rem',
        textAlign: 'left'
      }}>
        Gallery
      </h2>
      <Row xs={2} md={4} className="g-2">
        {images.map((img, i) => (
          <Col key={i}>
            <Card className="border-0 shadow-sm h-100" style={{ cursor: 'pointer', height: '140px', overflow: 'hidden' }}
              onClick={() => showImage(i)}
            >
              <Card.Img
                src={img}
                alt=""
                loading="lazy"
                style={{
                  height: '100%', width: '100%',
                  objectFit: 'cover', transition: 'transform 0.25s'
                }}
                onMouseEnter={e => e.target.style.transform = 'scale(1.05)'}
                onMouseLeave={e => e.target.style.transform = 'scale(1)'}
              />
            </Card>
          </Col>
        ))}
      </Row>

      <Modal show={open} onHide={() => setOpen(false)} centered size="lg">
        <div style={{ position: "relative", background: "#222", textAlign: "center" }}>
          <img src={images[current]} alt=""
            style={{ maxWidth: '100%', maxHeight: '75vh', margin: "auto", display: 'block' }}
          />
          <button onClick={prev} style={{
            position: "absolute", left: 10, top: "50%",
            transform: "translateY(-50%)", background: "#fff7", border: 0, borderRadius: "50%",
            fontSize: 28, padding: "10px", cursor: "pointer"
          }}>{"<"}</button>
          <button onClick={next} style={{
            position: "absolute", right: 10, top: "50%",
            transform: "translateY(-50%)", background: "#fff7", border: 0, borderRadius: "50%",
            fontSize: 28, padding: "10px", cursor: "pointer"
          }}>{">"}</button>
        </div>
      </Modal>
    </Container>
  );
}
