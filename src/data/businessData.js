export const businessData = {
  name: "Restaurant Lahboul Tafilalet",
  tagline: "Authentic Moroccan rooftop dining in Meknes.",
  subtitle:
    "Traditional Moroccan cuisine, rooftop seating, family-friendly dining, and a 4.9-star guest experience in the heart of Meknes.",
  category: "Moroccan Restaurant",

  location: {
    address: "55 Bis Avenue Lahboul",
    city: "Meknes",
    postalCode: "50000",
    country: "Morocco",
    fullAddress: "55 Bis Avenue Lahboul, Meknes 50000, Morocco",
    lat: 33.8971101,
    lng: -5.562373,
    googleMapsUrl:
      "https://www.google.com/maps/place/Restaurant+Lahboul+Tafilalet+in+Meknes/data=!4m7!3m6!1s0xda05b5375441e87:0xd43e73514b514f95!8m2!3d33.8971101!4d-5.562373!16s%2Fg%2F11ynqmktyb!19sChIJhx5EdVNboA0RlU9RS1FzPtQ?authuser=0&hl=en&rclk=1",
    directionsUrl:
      "https://www.google.com/maps/dir/?api=1&destination=33.8971101,-5.562373",
  },

  contact: {
    phone: "+212 6 68 29 05 95",
    phoneHref: "tel:+212668290595",
    email: "restaurantlahboultafilalet@gmail.com",
    instagram: "https://www.instagram.com/restaurantlahboultafilalet",
    instagramHandle: "@restaurantlahboultafilalet",
    threads: "https://www.threads.com/@restaurantlahboultafilalet",
  },

  reviews: {
    rating: 4.9,
    totalReviews: 188,
    distribution: { 1: 1, 2: 0, 3: 1, 4: 11, 5: 175 },
    testimonials: [
      {
        name: "Ahmed B.",
        text: "Authentic Moroccan food with a warm family atmosphere. The tagine was incredible and the rooftop view made it unforgettable.",
        rating: 5,
      },
      {
        name: "Sophie L.",
        text: "Excellent rooftop seating and a memorable lunch experience. We came as a group and the service was outstanding.",
        rating: 5,
      },
      {
        name: "Youssef M.",
        text: "Highly rated restaurant with great service and traditional flavors. The couscous is the best in Meknes!",
        rating: 5,
      },
      {
        name: "Maria K.",
        text: "A hidden gem in the heart of Meknes. The rooftop dining experience with traditional Moroccan dishes was absolutely perfect.",
        rating: 5,
      },
      {
        name: "Omar T.",
        text: "Brought the whole family here — kids loved it, and the parking was free. Will definitely return for the royal couscous.",
        rating: 5,
      },
      {
        name: "Claire D.",
        text: "As a tourist, this was the highlight of our Meknes visit. Authentic, welcoming, and beautifully located.",
        rating: 5,
      },
    ],
  },

  priceRange: "MAD 100–150",

  hours: [
    { day: "Monday", open: "10 AM", close: "11:30 PM" },
    { day: "Tuesday", open: "10 AM", close: "11:30 PM" },
    { day: "Wednesday", open: "10 AM", close: "11:30 PM" },
    { day: "Thursday", open: "10 AM", close: "11:30 PM" },
    { day: "Friday", open: "10 AM", close: "11:30 PM" },
    { day: "Saturday", open: "10 AM", close: "11 PM" },
    { day: "Sunday", open: "10 AM", close: "11:30 PM" },
  ],

  features: [
    "Rooftop seating",
    "Lunch",
    "Table service",
    "Groups welcome",
    "Good for kids",
    "Toilet",
    "Free multi-storey car park",
    "Free parking lot",
  ],

  menu: [
    {
      category: "Tagines",
      items: [
        { name: "Traditional Beef Tagine", price: 120, description: "Slow-cooked beef with prunes, almonds & aromatic spices", popular: true },
        { name: "Chicken Lemon Tagine", price: 110, description: "Tender chicken with preserved lemons & green olives", popular: true },
        { name: "Lamb & Vegetable Tagine", price: 130, description: "Succulent lamb with seasonal vegetables & saffron", popular: false },
        { name: "Kefta Tagine", price: 100, description: "Spiced meatballs in tomato sauce with eggs", popular: false },
        { name: "Fish Tagine Chermoula", price: 140, description: "Fresh fish marinated in chermoula with peppers & tomatoes", popular: false },
      ],
    },
    {
      category: "Couscous",
      items: [
        { name: "Royal Couscous", price: 140, description: "Seven-vegetable couscous with lamb, chicken & merguez", popular: true, signature: true },
        { name: "Chicken Couscous", price: 110, description: "Traditional steamed couscous with tender chicken & vegetables", popular: false },
        { name: "Vegetable Couscous", price: 90, description: "Seasonal vegetables over fluffy steamed semolina", popular: false },
        { name: "Tfaya Couscous", price: 130, description: "Sweet caramelized onions & raisins with tender lamb", popular: false },
      ],
    },
    {
      category: "Grill",
      items: [
        { name: "Mixed Grill Plate", price: 150, description: "Assortment of grilled lamb, chicken & kefta with sides", popular: true },
        { name: "Grilled Lamb Chops", price: 140, description: "Charcoal-grilled lamb chops with cumin & fresh herbs", popular: false },
        { name: "Chicken Brochettes", price: 100, description: "Marinated chicken skewers with charmoula sauce", popular: false },
        { name: "Kefta Brochettes", price: 90, description: "Spiced minced meat skewers with fresh salad", popular: false },
      ],
    },
    {
      category: "Salads",
      items: [
        { name: "Moroccan Salad Selection", price: 60, description: "Assortment of traditional cooked & fresh salads", popular: true },
        { name: "Zaalouk", price: 40, description: "Smoky eggplant & tomato salad with olive oil", popular: false },
        { name: "Taktouka", price: 40, description: "Roasted pepper & tomato salad with garlic", popular: false },
      ],
    },
    {
      category: "Soups",
      items: [
        { name: "Harira Soup", price: 35, description: "Traditional Moroccan lentil & tomato soup with herbs", popular: true },
        { name: "Bissara", price: 30, description: "Creamy fava bean soup with olive oil & cumin", popular: false },
      ],
    },
    {
      category: "Desserts",
      items: [
        { name: "Orange Cinnamon Dessert", price: 40, description: "Fresh orange slices with cinnamon & orange blossom water", popular: true },
        { name: "Pastilla au Lait", price: 50, description: "Crispy milk pastilla with almond cream & cinnamon", popular: false },
        { name: "Moroccan Pastries", price: 45, description: "Assortment of handmade Moroccan cookies & sweets", popular: false },
      ],
    },
    {
      category: "Drinks",
      items: [
        { name: "Mint Tea Service", price: 25, description: "Traditional Moroccan mint tea served ceremonially", popular: true, signature: true },
        { name: "Fresh Orange Juice", price: 20, description: "Freshly squeezed Moroccan oranges", popular: true },
        { name: "Avocado Smoothie", price: 30, description: "Creamy avocado blend with milk & almonds", popular: false },
        { name: "Moroccan Coffee", price: 15, description: "Spiced coffee with a touch of cinnamon", popular: false },
      ],
    },
  ],
};
