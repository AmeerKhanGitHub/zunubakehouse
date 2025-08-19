import SectionCard from "./SectionCard";

export default function Home() {
  return (
    <>
      <SectionCard
        sectionKey="cakesForAllOccasions"
        bgColor="#E6E6FA"
        textColor="#6B5B7B"
        description="Our cakes are thoughtfully crafted to suit every occasion, from birthdays and weddings to family gatherings and special celebrations."
      />

      <SectionCard
        sectionKey="partyFavorites"
        bgColor="#FFDDEE"
        textColor="#B84C73"
        description="Our Party Favourites collection features an assortment of indulgent multi-pack desserts, perfect for refined gatherings."
      />

      <SectionCard
        sectionKey="customThemedCakes"
        bgColor="#DDEEFF"
        textColor="#5C7DB1"
        description="Our custom cakes are thoughtfully designed to reflect your vision and crafted with the finest ingredients."
      />

      <SectionCard
        sectionKey="bouquets"
        bgColor="#FFE0F2"
        textColor="#CC5E8B"
        description="Stunning cupcake bouquets that combine the beauty of flowers with the indulgence of cake."
      />
    </>
  );
}
