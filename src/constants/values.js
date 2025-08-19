export const SITE = {
  brand: "Zunu Bakehouse",
  tagline: "FROM OVEN TO SOUL",
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
        `${import.meta.env.BASE_URL}images/1.jpg`,
        `${import.meta.env.BASE_URL}images/2.jpg`,
        `${import.meta.env.BASE_URL}images/3.jpg`,
        `${import.meta.env.BASE_URL}images/4.jpg`,
      ],
    },
    partyFavorites: {
      title: "Party Favorites",
      items: [
        {
          name: "Cupcakes",
          image: `${import.meta.env.BASE_URL}images/5.jpg`
        },
        {
          name: "Tres Leches",
          image: `${import.meta.env.BASE_URL}images/6.jpg`
        },
        {
          name: "Tea Cake",
          image: `${import.meta.env.BASE_URL}images/7.jpg`
        },
        {
          name: "Tiramisu",
          image: `${import.meta.env.BASE_URL}images/8.jpg`
        },
      ],
    },
    customThemedCakes: {
      title: "Custom Themed Cakes",
      categories: [
        {
          name: "Custom cake 1",
          image: `${import.meta.env.BASE_URL}images/9.jpg`
        },
        {
          name: "Custom cake 2",
          image: `${import.meta.env.BASE_URL}images/10.jpg`
        },
        {
          name: "Custom cake 3",
          image: `${import.meta.env.BASE_URL}images/11.jpg`
        },
        {
          name: "Custom cake 4",
          image: `${import.meta.env.BASE_URL}images/12.jpg`
        },      ],
    },
    bouquets: {
      title: "Bouqcakes",
      subtitle: "Perfect Gifts",
      description: "Beautifully crafted cupcake bouquets that make the perfect gift for any occasion.",
          image: `${import.meta.env.BASE_URL}images/13.jpg`
    },
  },
  contact: {
    email: "hello@zunubakehouse.com",
    phone: "+27 XX XXX XXXX",
  },
};
