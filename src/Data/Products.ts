export interface Product {
  id: number;
  name: string;
  store: string;
  tags: string[];
  image: string;
}

export const PRODUCTS: Product[] = [
  // JUMBO
  {
    id: 1,
    name: "Volkoren Brood",
    store: "Jumbo",
    tags: ["Vezelrijk", "Minder vetten"],
    image: "https://images.unsplash.com/photo-1509440159596-0249088772ff?w=300",
  },
  {
    id: 2,
    name: "Grieks-stijl Yoghurt 0%",
    store: "Jumbo",
    tags: ["Minder vetten", "Zonder Suiker"],
    image: "https://images.unsplash.com/photo-1488477181946-6428a0291777?w=300",
  },
  {
    id: 3,
    name: "Kikkererwten in Blik",
    store: "Jumbo",
    tags: ["Vezelrijk", "Minder vetten", "Zonder Suiker"],
    image: "https://images.unsplash.com/photo-1515543237350-b3eea1ec8082?w=300",
  },
  {
    id: 4,
    name: "Pindakaas 100% Puur",
    store: "Jumbo",
    tags: ["Vezelrijk", "Zonder Suiker"],
    image: "https://images.unsplash.com/photo-1584308666744-24d5c474f2ae?w=300",
  },
  {
    id: 5,
    name: "Volkoren Penne Pasta",
    store: "Jumbo",
    tags: ["Vezelrijk", "Minder vetten", "Zonder Suiker"],
    image: "https://images.unsplash.com/photo-1621996346565-e3d5d6281288?w=300",
  },
  {
    id: 6,
    name: "Amandelmelk Ongezoet",
    store: "Jumbo",
    tags: ["Minder vetten", "Zonder Suiker"],
    image: "https://images.unsplash.com/photo-1550583724-b2692b85b150?w=300",
  },

  // ALBERT HEIJN
  {
    id: 7,
    name: "Magere Kwark",
    store: "Albert Heijn",
    tags: ["Minder vetten", "Zonder Suiker"],
    image: "https://images.unsplash.com/photo-1571212515416-fef01fc43637?w=300",
  },
  {
    id: 8,
    name: "Ongezouten Notenmix",
    store: "Albert Heijn",
    tags: ["Vezelrijk", "Zonder Suiker"],
    image: "https://images.unsplash.com/photo-1536591375315-198993887162?w=300",
  },
  {
    id: 9,
    name: "Volkoren Couscous",
    store: "Albert Heijn",
    tags: ["Vezelrijk", "Minder vetten", "Zonder Suiker"],
    image: "https://images.unsplash.com/photo-1541544741938-0af808871e40?w=300",
  },
  {
    id: 10,
    name: "Verse Spinazie",
    store: "Albert Heijn",
    tags: ["Vezelrijk", "Minder vetten", "Zonder Suiker"],
    image: "https://images.unsplash.com/photo-1576045057995-568f588f82fb?w=300",
  },
  {
    id: 11,
    name: "Huttenkase (Cottage Cheese)",
    store: "Albert Heijn",
    tags: ["Minder vetten", "Zonder Suiker"],
    image: "https://images.unsplash.com/photo-1559561853-08451507cbe7?w=300",
  },
  {
    id: 12,
    name: "Geroosterde Edamame Boontjes",
    store: "Albert Heijn",
    tags: ["Vezelrijk", "Minder vetten"],
    image: "https://images.unsplash.com/photo-1540420773420-3366772f4999?w=300",
  },

  // LIDL
  {
    id: 13,
    name: "Havermout Unsweetened",
    store: "Lidl",
    tags: ["Vezelrijk", "Zonder Suiker", "Minder vetten"],
    image: "https://images.unsplash.com/photo-1517673400267-0251440c45dc?w=300",
  },
  {
    id: 14,
    name: "Mager Rundergehakt",
    store: "Lidl",
    tags: ["Minder vetten", "Zonder Suiker"],
    image: "https://images.unsplash.com/photo-1603048588665-791ca8aea617?w=300",
  },
  {
    id: 15,
    name: "Lijnzaad",
    store: "Lidl",
    tags: ["Vezelrijk", "Zonder Suiker"],
    image: "https://images.unsplash.com/photo-1608797178974-15b35a640523?w=300",
  },
  {
    id: 16,
    name: "Kipfilet Haasjes",
    store: "Lidl",
    tags: ["Minder vetten", "Zonder Suiker"],
    image: "https://images.unsplash.com/photo-1604503468506-a8da13d82791?w=300",
  },
  {
    id: 17,
    name: "Diepvries Bosbessen",
    store: "Lidl",
    tags: ["Vezelrijk", "Minder vetten", "Zonder Suiker"],
    image: "https://images.unsplash.com/photo-1498557850523-fd3d118b962e?w=300",
  },
  {
    id: 18,
    name: "Zilvervliesrijst",
    store: "Lidl",
    tags: ["Vezelrijk", "Minder vetten", "Zonder Suiker"],
    image: "https://images.unsplash.com/photo-1586201375761-83865001e31c?w=300",
  },

  // ALDI
  {
    id: 19,
    name: "Volkoren Crackers",
    store: "Aldi",
    tags: ["Vezelrijk", "Minder vetten"],
    image: "https://images.unsplash.com/photo-1590080875515-8a3a8dc5735e?w=300",
  },
  {
    id: 20,
    name: "Tonijn in Water",
    store: "Aldi",
    tags: ["Minder vetten", "Zonder Suiker"],
    image: "https://images.unsplash.com/photo-1534483509719-3feaee7c30da?w=300",
  },

  {
    id: 22,
    name: "Chia Zaad",
    store: "Aldi",
    tags: ["Vezelrijk", "Zonder Suiker"],
    image: "https://images.unsplash.com/photo-1514733670139-4d87a1941d55?w=300",
  },
  {
    id: 23,
    name: "Rijstwafels Zoutarm",
    store: "Aldi",
    tags: ["Minder vetten", "Zonder Suiker"],
    image: "https://images.unsplash.com/photo-1563245372-f21724e3856d?w=300",
  },
  {
    id: 24,
    name: "Griekse Yoghurt 0% Vet",
    store: "Aldi",
    tags: ["Minder vetten", "Zonder Suiker"],
    image: "https://images.unsplash.com/photo-1488477181946-6428a0291777?w=300",
  },
];

export const STORES: string[] = ["Jumbo", "Lidl", "Albert Heijn", "Aldi"];

export const NUTRITION_FILTERS: string[] = [
  "Vezelrijk",
  "Minder vetten",
  "Zonder Suiker",
];
