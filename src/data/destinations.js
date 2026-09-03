export const destinations = [
  {
    slug: "kyoto-japan",
    name: "Kyoto",
    country: "Japan",
    continent: "Asia",
    coordinates: { lat: 35.0116, lng: 135.7681 },
    blurb:
      "Japan's former imperial capital, where wooden machiya streets, moss gardens, and centuries-old temples sit quietly between vending machines and bullet trains.",
    tags: ["Culture", "City", "Food"],
    bestTimeToVisit:
      "Late March–April for cherry blossoms, or November for autumn color",
    imageQuery: "Kyoto Japan temple autumn",
    famousPlaces: [
      {
        name: "Fushimi Inari Taisha",
        category: "Landmark",
        hook: "Thousands of vermilion torii gates climbing the mountainside",
        imageQuery: "Fushimi Inari torii gates Kyoto",
      },
      {
        name: "Kinkaku-ji (Golden Pavilion)",
        category: "Landmark",
        hook: "A gold-leafed pavilion perfectly mirrored in its own pond",
        imageQuery: "Kinkaku-ji golden pavilion Kyoto",
      },
      {
        name: "Gion District",
        category: "Neighborhood",
        hook: "Lantern-lit lanes where geiko and maiko still walk to evening appointments",
        imageQuery: "Gion district Kyoto lanterns evening",
      },
      {
        name: "Nishiki Market",
        category: "Food",
        hook: "A narrow five-block arcade of pickles, skewers, and centuries-old stalls",
        imageQuery: "Nishiki Market Kyoto food stalls",
      },
    ],
  },

  {
    slug: "reykjavik-iceland",
    name: "Reykjavik",
    country: "Iceland",
    continent: "Europe",
    coordinates: { lat: 64.1466, lng: -21.9426 },
    blurb:
      "A small, colorful capital on the edge of a volcanic island, built to launch trips into geysers, glaciers, and the northern lights.",
    tags: ["Nature", "Adventure"],
    bestTimeToVisit:
      "June–August for the midnight sun, or Sept–March for northern lights",
    imageQuery: "Reykjavik Iceland aurora borealis",
    famousPlaces: [
      {
        name: "Hallgrímskirkja",
        category: "Landmark",
        hook: "A concrete church shaped like basalt lava columns, with the city's best skyline view from its tower",
        imageQuery: "Hallgrimskirkja church Reykjavik",
      },
      {
        name: "Blue Lagoon",
        category: "Nature",
        hook: "Milky-blue geothermal water steaming in a black lava field",
        imageQuery: "Blue Lagoon Iceland geothermal",
      },
      {
        name: "Golden Circle",
        category: "Nature",
        hook: "A day loop through a rift valley, an erupting geyser, and a thundering waterfall",
        imageQuery: "Golden Circle Iceland waterfall",
      },
      {
        name: "Old Harbour",
        category: "Neighborhood",
        hook: "Colorful fishing boats and whale-watching tours departing at dawn",
        imageQuery: "Reykjavik old harbour boats",
      },
    ],
  },

  {
    slug: "marrakech-morocco",
    name: "Marrakech",
    country: "Morocco",
    continent: "Africa",
    coordinates: { lat: 31.6295, lng: -7.9811 },
    blurb:
      "A walled red city where snake charmers, spice stalls, and horse carts share a square that's operated in some form for nearly a thousand years.",
    tags: ["Culture", "City", "Food"],
    bestTimeToVisit:
      "March–May or September–November, before the summer heat peaks",
    imageQuery: "Marrakech Morocco medina souk",
    famousPlaces: [
      {
        name: "Jemaa el-Fnaa",
        category: "Landmark",
        hook: "A square that turns from orange-juice stalls by day into storytellers and food smoke by night",
        imageQuery: "Jemaa el-Fnaa square Marrakech night",
      },
      {
        name: "Bahia Palace",
        category: "Landmark",
        hook: "Carved cedar ceilings and tiled courtyards built for a 19th-century vizier",
        imageQuery: "Bahia Palace Marrakech courtyard",
      },
      {
        name: "Jardin Majorelle",
        category: "Nature",
        hook: "A cobalt-blue garden of cacti and bamboo once owned by Yves Saint Laurent",
        imageQuery: "Jardin Majorelle blue garden Marrakech",
      },
      {
        name: "Medina Souks",
        category: "Food",
        hook: "A maze of stalls trading spices, leather, and mint tea",
        imageQuery: "Marrakech souk spices market",
      },
    ],
  },

  {
    slug: "cusco-peru",
    name: "Cusco",
    country: "Peru",
    continent: "South America",
    coordinates: { lat: -13.532, lng: -71.9675 },
    blurb:
      "The old Inca capital, 3,400 meters up in the Andes, where Spanish colonial churches were built directly on top of Inca stone foundations.",
    tags: ["Mountain", "Culture", "Adventure"],
    bestTimeToVisit: "May–September, the dry season in the Andes",
    imageQuery: "Cusco Peru Machu Picchu mountains",
    famousPlaces: [
      {
        name: "Machu Picchu",
        category: "Landmark",
        hook: "An Inca citadel perched on a ridge above the Urubamba River",
        imageQuery: "Machu Picchu Peru ruins",
      },
      {
        name: "Sacsayhuamán",
        category: "Landmark",
        hook: "Massive interlocking stone walls built without mortar, overlooking the city",
        imageQuery: "Sacsayhuaman Cusco ruins",
      },
      {
        name: "San Pedro Market",
        category: "Food",
        hook: "Fresh juice, alpaca meat, and Andean produce stalls locals actually shop at",
        imageQuery: "San Pedro Market Cusco",
      },
      {
        name: "Sacred Valley",
        category: "Nature",
        hook: "Terraced Inca farmland unrolling between snow-capped peaks",
        imageQuery: "Sacred Valley Peru terraces",
      },
    ],
  },

  {
    slug: "bali-indonesia",
    name: "Bali",
    country: "Indonesia",
    continent: "Asia",
    coordinates: { lat: -8.5069, lng: 115.2625 },
    blurb:
      "A volcanic island of rice terraces and clifftop temples, with Ubud at its cultural center and a coastline of surf breaks further south.",
    tags: ["Beach", "Nature", "Culture"],
    bestTimeToVisit: "April–October, the dry season",
    imageQuery: "Bali Ubud rice terraces",
    famousPlaces: [
      {
        name: "Tegallalang Rice Terraces",
        category: "Nature",
        hook: "Emerald rice paddies stepping down a valley in perfect tiers",
        imageQuery: "Tegallalang rice terraces Bali",
      },
      {
        name: "Uluwatu Temple",
        category: "Landmark",
        hook: "A clifftop temple with sunset views and resident macaques",
        imageQuery: "Uluwatu Temple Bali sunset",
      },
      {
        name: "Ubud Sacred Monkey Forest",
        category: "Nature",
        hook: "A jungle sanctuary of moss-covered temples and free-roaming macaques",
        imageQuery: "Ubud Monkey Forest Bali",
      },
      {
        name: "Ubud Market",
        category: "Food",
        hook: "Woven baskets, sarongs, and satay smoke under a covered market roof",
        imageQuery: "Ubud market Bali",
      },
    ],
  },

  {
    slug: "cape-town-south-africa",
    name: "Cape Town",
    country: "South Africa",
    continent: "Africa",
    coordinates: { lat: -33.9249, lng: 18.4241 },
    blurb:
      "A harbor city pinned between a flat-topped mountain and two oceans, where vineyards, penguin colonies, and a former political prison are all a short drive apart.",
    tags: ["City", "Nature", "Beach"],
    bestTimeToVisit: "November–March, the dry southern-hemisphere summer",
    imageQuery: "Cape Town South Africa Table Mountain",
    famousPlaces: [
      {
        name: "Table Mountain",
        category: "Nature",
        hook: "A flat-topped mountain reachable by cable car, with clouds spilling over its edge like a tablecloth",
        imageQuery: "Table Mountain Cape Town cable car",
      },
      {
        name: "Robben Island",
        category: "Landmark",
        hook: "The island prison where Nelson Mandela spent 18 years, now a museum reached by ferry",
        imageQuery: "Robben Island Cape Town",
      },
      {
        name: "Boulders Beach",
        category: "Nature",
        hook: "A sheltered beach shared with a colony of African penguins",
        imageQuery: "Boulders Beach penguins Cape Town",
      },
      {
        name: "V&A Waterfront",
        category: "Neighborhood",
        hook: "A working harbour turned promenade of markets, seafood, and street performers",
        imageQuery: "V&A Waterfront Cape Town",
      },
    ],
  },

  {
    slug: "banff-canada",
    name: "Banff",
    country: "Canada",
    continent: "North America",
    coordinates: { lat: 51.1784, lng: -115.5708 },
    blurb:
      "A one-street mountain town inside Canada's oldest national park, surrounded by glacier-fed lakes so blue they seem artificially colored.",
    tags: ["Mountain", "Nature", "Adventure"],
    bestTimeToVisit: "June–September for hiking, December–March for skiing",
    imageQuery: "Banff Canada turquoise lake mountains",
    famousPlaces: [
      {
        name: "Lake Louise",
        category: "Nature",
        hook: "A glacier-fed lake so turquoise it looks color-corrected, framed by the Victoria Glacier",
        imageQuery: "Lake Louise Banff turquoise",
      },
      {
        name: "Moraine Lake",
        category: "Nature",
        hook: "Ten jagged peaks reflected in another impossibly blue lake",
        imageQuery: "Moraine Lake Banff mountains",
      },
      {
        name: "Banff Gondola",
        category: "Landmark",
        hook: "A ride up Sulphur Mountain to a ridgeline boardwalk above the whole Bow Valley",
        imageQuery: "Banff Gondola Sulphur Mountain view",
      },
      {
        name: "Banff Avenue",
        category: "Neighborhood",
        hook: "The town's main strip of log-cabin storefronts backed by mountain walls",
        imageQuery: "Banff Avenue town mountains",
      },
    ],
  },

  {
    slug: "santorini-greece",
    name: "Santorini",
    country: "Greece",
    continent: "Europe",
    coordinates: { lat: 36.3932, lng: 25.4615 },
    blurb:
      "A volcanic Greek island shaped like a crescent around its own collapsed caldera, its towns built right along the cliff edge.",
    tags: ["Beach", "Culture", "City"],
    bestTimeToVisit:
      "Late May–June or September, for warm weather with fewer crowds",
    imageQuery: "Santorini Greece blue domes sunset",
    famousPlaces: [
      {
        name: "Oia",
        category: "Neighborhood",
        hook: "Whitewashed cliffside houses and blue domes famous for sunset",
        imageQuery: "Oia Santorini blue domes sunset",
      },
      {
        name: "Fira Caldera Walk",
        category: "Landmark",
        hook: "A cliffside path strung along the volcanic caldera, town to town",
        imageQuery: "Fira Santorini caldera view",
      },
      {
        name: "Red Beach",
        category: "Nature",
        hook: "A cove of black-red volcanic cliffs meeting the sea",
        imageQuery: "Red Beach Santorini",
      },
      {
        name: "Akrotiri",
        category: "Landmark",
        hook: "A Bronze Age town preserved under volcanic ash, sometimes called Greece's Pompeii",
        imageQuery: "Akrotiri ruins Santorini",
      },
    ],
  },
];
