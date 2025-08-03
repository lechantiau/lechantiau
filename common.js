
const SUPABASE_URL = 'https://vsgquxoloquzwstozssx.supabase.co';
const SUPABASE_ANON_KEY = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InZzZ3F1eG9sb3F1endzdG96c3N4Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3NTAyMzc5MDksImV4cCI6MjA2NTgxMzkwOX0.NILzOAnQ71MlX5rVhhaXS8Vnxr-em_GsK8dDpHkEgAQ';
const TABLE_NAME = "lechantiau_simple_orders";

const PRODUCTS = [
  {
    name: "Nature",
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
    items: [
      { size: "850g", price: 7.2 },
      { size: "430g", price: 3.8 },
    ],
  },
];

const DELIVERY_DAY_PLACES = {
  Jeudi: ["Mairie", "Gare", "Résidence Bleue"],
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
const CLOSED_ORDER_DATES = [];

function getOrderDays(start, end) {
  let days = [];
  let current = new Date(start);
  while (current <= end) {
    if (
      current >= new Date(TODAY) &&
      WEEK_DAYS[current.getDay()] in DELIVERY_DAY_PLACES
    ) {
      days.push(current.toISOString().slice(0, 10));
    }
    current.setDate(current.getDate() + 1);
  }
  return days;
}
