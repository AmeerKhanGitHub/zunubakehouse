export const SITE = {
  brand: "Zunu Bakehouse",
  tagline: "Your Story Sweetly Told",
  meta: {
    title: "Zunu Bakehouse | Your Story Sweetly Told",
    description: "Beautiful custom cakes, party favorites, and cupcake bouquets for all occasions.",
    keywords: "custom cakes, party cakes, cupcake bouquets, themed cakes, celebration cakes",
  },
  sections: {
    cakesForAllOccasions: {
      title: "Cakes for all Occasions",
      subtitle: "From intimate moments to grand celebrations",
      images: [
        `${import.meta.env.BASE_URL}images/occasion-1.jpg`,
        `${import.meta.env.BASE_URL}images/occasion-2.jpg`,
        `${import.meta.env.BASE_URL}images/occasion-3.jpg`,
        `${import.meta.env.BASE_URL}images/occasion-4.jpg`,
      ],
    },
    partyFavorites: {
      title: "Party Favorites",
      items: [
        { name: "Cupcakes", image: `${import.meta.env.BASE_URL}images/cupcakes.jpg` },
        { name: "Milk Tart", image: `${import.meta.env.BASE_URL}images/milktart.jpg` },
        { name: "Koekies", image: `${import.meta.env.BASE_URL}images/koekies.jpg` },
        { name: "Tiramisu", image: `${import.meta.env.BASE_URL}images/tiramisu.jpg` },
      ],
    },
    customThemedCakes: {
      title: "Custom Themed Cakes",
      categories: [
        { name: "Vintage Cars", image: `${import.meta.env.BASE_URL}images/vintage-cars.jpg` },
        { name: "Baby Shower", image: `${import.meta.env.BASE_URL}images/baby-shower.jpg` },
        { name: "Christening Cakes", image: `${import.meta.env.BASE_URL}images/christening.jpg` },
      ],
    },
    bouquets: {
      title: "Bouquets",
      subtitle: "Perfect Gifts",
      description: "Beautifully crafted cupcake bouquets that make the perfect gift for any occasion.",
    },
  },
  contact: {
    email: "hello@zunubakehouse.com",
    phone: "+27 XX XXX XXXX",
  },
};
