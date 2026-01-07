
const SUPABASE_URL = 'https://vsgquxoloquzwstozssx.supabase.co';
const SUPABASE_ANON_KEY = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InZzZ3F1eG9sb3F1endzdG96c3N4Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3NTAyMzc5MDksImV4cCI6MjA2NTgxMzkwOX0.NILzOAnQ71MlX5rVhhaXS8Vnxr-em_GsK8dDpHkEgAQ';
const TABLE_NAME = "lechantiau_simple_orders";

const PRODUCTS = [
  {
    name: "Nature",
    displayName: "Campagne Nature",
    items: [
      { size: "850g", price: 5.2 },
      { size: "430g", price: 2.8 },
    ],
  },
  {
    name: "Multigraine",
    items: [
      { size: "850g", price: 6.2 },
      { size: "430g", price: 3.3 },
    ],
  },
  {
    name: "Courge",
    displayName: "Graines de courge",
    items: [
      { size: "850g", price: 6.2 },
      { size: "430g", price: 3.3 },
    ],
  },
  {
    name: "Cacao",
    items: [
      { size: "430g", price: 4.8 },
      { size: "210g", price: 2.9 },
    ],
  },
  {
    name: "Petit Epeautre",
    items: [
      { size: "850g", price: 7.2 },
      { size: "430g", price: 3.8 },
    ],
  },
  {
    name: "Sarrasin Riz",
    displayName: "Sarrasin-Riz",
    items: [
      { size: "850g", price: 7.2 },
      { size: "430g", price: 3.8 },
    ],
  },
  {
    name: "Figues",
    items: [
      { size: "850g", price: 7.2 },
      { size: "430g", price: 3.8 },
    ],
  },
  {
    name: "Seigles",
    items: [
      { size: "850g", price: 7.2 },
      { size: "430g", price: 3.8 },
    ],
  },
  {
    name: "Season",
    displayName: "Complet",
    items: [
      { size: "850g", price: 7.2 },
      { size: "430g", price: 3.8 },
    ],
  },
];

const DELIVERY_DAY_PLACES = {
  Mardi: ["Le hangar de Les Temps d'arts 17h-19h"],
  Jeudi: ["Ecole Joséphine Marchais (réservé aux professeurs)", "Villiersfins 17h-18h", "Hôte bureau 16h-17h45"],
};

const TODAY = new Date().toISOString().slice(0, 10);
const WEEK_DAYS = [
  "Dimanche",
  "Lundi",
  "Mardi",
  "Mercredi",
  "Jeudi",
  "Vendredi",
  "Samedi",
];
const CLOSED_ORDER_DATES = [2026-02-17];  // 17 et 19 février 2026 vacances   "2026-02-17"  "2026-02-19",

function getDeliveryDay(delivery_place) {
  for (const [day, places] of Object.entries(DELIVERY_DAY_PLACES)) {
    if (places.includes(delivery_place)) {
      return day;
    }
  }
  return null;
}

function getOrderDays(start, end, delivery_day) {
  let days = [];
  let current = new Date(start);
  while (current <= end) {
    if (
      current >= new Date(TODAY) &&
      WEEK_DAYS[current.getDay()] == delivery_day
    ) {
      days.push(current.toISOString().slice(0, 10));
    }
    current.setDate(current.getDate() + 1);
  }
  return days;
}
