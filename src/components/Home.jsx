import SectionCard from "./SectionCard";
import MainFooter from "./MainFooter";
import GalleryPreviewCard from "./GalleryPreviewCard";
const sectionsVisible = {
  cakesForAllOccasions: true,
  customThemedCakes: true,
  bouquets: false,
  partyFavorites: false,
  tresLeches: true,
};

const WHATSAPP_LINK = "https://wa.me/+353892058875";

export default function Home() {
  return (
    <div style={{ paddingTop: '1rem' }}>
      {sectionsVisible.cakesForAllOccasions && (
        <SectionCard
          sectionKey="cakesForAllOccasions"
          bgColor="#E6E6FA"
          textColor="#6B5B7B"
          description="Every celebration deserves a cake as special as the moment itself. At Zunu Bakehouse, we create handcrafted cakes with the finest ingredients for all occasions."
          index={0}
        />
      )}

      {sectionsVisible.tresLeches && (
        <SectionCard
          sectionKey="tresLeches"
          bgColor="#FFF4E6"
          textColor="#A86C3E"
          description="Our soft and fluffy tres leches cakes are soaked in three kinds of milk, creating a melt-in-the-mouth delight that’s light, creamy, and irresistible. Available in a variety of flavours and each bite is a perfect balance of sweetness and freshness."
          index={2}
        />
      )}

      {sectionsVisible.customThemedCakes && (
        <SectionCard
          sectionKey="customThemedCakes"
          bgColor="#DDEEFF"
          textColor="#5C7DB1"
          description="From elegant wedding and christening cakes to fun-filled children’s birthday cakes, baby showers, vintage-inspired creations, and graduation milestones – we craft each cake with care and creativity."
          index={1}
          disableNavigation
          whatsappLink="https://wa.me/+353892058875"
        />
      )}

      {sectionsVisible.bouquets && (
        <SectionCard
          sectionKey="bouquets"
          bgColor="#FFE0F2"
          textColor="#CC5E8B"
          description="Stunning cupcake bouquets that combine the beauty of flowers with the indulgence of cake."
          index={2}
        />
      )}

      {sectionsVisible.partyFavorites && (
        <SectionCard
          sectionKey="partyFavorites"
          bgColor="#FFDDEE"
          textColor="#B84C73"
          description="Our Party Favourites collection features an assortment of indulgent multi-pack desserts, perfect for refined gatherings."
          index={3}
        />
      )}
    <GalleryPreviewCard bgColor="#FFF" textColor="#773953" />
    <MainFooter />
    </div>
  );
}
