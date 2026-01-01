// components/Home.jsx
import MainFooter from "./MainFooter";
import GalleryCarousel from "./GalleryCarousel";
import ReviewsCarousel from "./ReviewsCarousel";

export default function Home() {
  return (
    <div style={{ paddingTop: '1rem', paddingBottom: '12vh' }}>
      <GalleryCarousel />
      <ReviewsCarousel />
      <MainFooter />
    </div>
  );
}
