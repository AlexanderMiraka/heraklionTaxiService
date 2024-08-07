const destinations = [
  {
    destination: "Agia Galini",
    perfecture: "Rethymnon",
    price: 94,
    distance: 77,
    approximateTime: 70,
  },
  {
    destination: "Agia Marina",
    perfecture: "Chania",
    price: 164,
    distance: 147,
    approximateTime: 105,
  },
  {
    destination: "Agia Pelagia",
    perfecture: "Herakleion",
    price: 34,
    distance: 27,
    approximateTime: 20,
  },
  {
    destination: "Agia Varvara",
    perfecture: "Herakleion",
    price: 34,
    distance: 30,
    approximateTime: 25,
  },
  {
    destination: "Agios Nikolaos",
    perfecture: "Agios Nikolaos",
    price: 69,
    distance: 62,
    approximateTime: 45,
  },
  {
    destination: "Agios Pavlos",
    perfecture: "Rethymnon",
    price: 109,
    distance: 98,
    approximateTime: 105,
  },
  {
    destination: "Akrotiri",
    perfecture: "Chania",
    price: 169,
    distance: 150,
    approximateTime: 120,
  },
  {
    destination: "Almyrida",
    perfecture: "Chania",
    price: 139,
    distance: 125,
    approximateTime: 90,
  },
  {
    destination: "Amoudara",
    perfecture: "Herakleion",
    price: 19,
    distance: 11,
    approximateTime: 10,
  },
  {
    destination: "Analipsi",
    perfecture: "Herakleion",
    price: 24,
    distance: 21,
    approximateTime: 15,
  },
  {
    destination: "Anissaras",
    perfecture: "Herakleion",
    price: 29,
    distance: 25,
    approximateTime: 20,
  },
  {
    destination: "Anogia",
    perfecture: "Rethymnon",
    price: 49,
    distance: 38,
    approximateTime: 40,
  },
  {
    destination: "Anopolis",
    perfecture: "Herakleion",
    price: 19,
    distance: 12,
    approximateTime: 10,
  },
  {
    destination: "Archanes",
    perfecture: "Herakleion",
    price: 19,
    distance: 16,
    approximateTime: 15,
  },
  {
    destination: "Argyroupoli",
    perfecture: "Rethymnon",
    price: 124,
    distance: 103,
    approximateTime: 65,
  },
  {
    destination: "Arkalochori",
    perfecture: "Herakleion",
    price: 39,
    distance: 30,
    approximateTime: 30,
  },
  {
    destination: "Bali",
    perfecture: "Rethymnon",
    price: 59,
    distance: 53,
    approximateTime: 45,
  },
  {
    destination: "Chania Airport",
    perfecture: "Chania",
    price: 169,
    distance: 142,
    approximateTime: 110,
  },
  {
    destination: "Chania City",
    perfecture: "Chania",
    price: 174,
    distance: 149,
    approximateTime: 120,
  },
  {
    destination: "Chersonissos",
    perfecture: "Herakleion",
    price: 34,
    distance: 23,
    approximateTime: 20,
  },
  {
    destination: "Sfakia",
    perfecture: "Chania",
    price: 169,
    distance: 146,
    approximateTime: 130,
  },
  {
    destination: "Elafonisi",
    perfecture: "Chania",
    price: 244,
    distance: 212,
    approximateTime: 185,
  },
  {
    destination: "Eleftherna",
    perfecture: "Rethymnon",
    price: 89,
    distance: 81,
    approximateTime: 70,
  },
  {
    destination: "Elounda",
    perfecture: "Agios Nikolaos",
    price: 89,
    distance: 68,
    approximateTime: 50,
  },
  {
    destination: "Episkopi",
    perfecture: "Rethymnon",
    price: 109,
    distance: 98,
    approximateTime: 60,
  },
  {
    destination: "Falasarna",
    perfecture: "Chania",
    price: 219,
    distance: 190,
    approximateTime: 160,
  },
  {
    destination: "Fodele",
    perfecture: "Herakleion",
    price: 34,
    distance: 30,
    approximateTime: 25,
  },
  {
    destination: "Fragkokastelo",
    perfecture: "Chania",
    price: 164,
    distance: 141,
    approximateTime: 160,
  },
  {
    destination: "Georgioupoli",
    perfecture: "Chania",
    price: 124,
    distance: 103,
    approximateTime: 60,
  },
  {
    destination: "Gournes",
    perfecture: "Herakleion",
    price: 24,
    distance: 12,
    approximateTime: 10,
  },
  {
    destination: "Gouves",
    perfecture: "Herakleion",
    price: 29,
    distance: 17,
    approximateTime: 15,
  },
  {
    destination: "Herakleion City",
    perfecture: "Herakleion",
    price: 9,
    distance: 6,
    approximateTime: 5,
  },
  {
    destination: "Ierapetra",
    perfecture: "Agios Nikolaos",
    price: 109,
    distance: 93,
    approximateTime: 70,
  },
  {
    destination: "Istron",
    perfecture: "Agios Nikolaos",
    price: 69,
    distance: 70,
    approximateTime: 60,
  },
  {
    destination: "Kalamaki",
    perfecture: "Herakleion",
    price: 84,
    distance: 70,
    approximateTime: 80,
  },
  {
    destination: "Kali Limenes",
    perfecture: "Herakleion",
    price: 84,
    distance: 76,
    approximateTime: 80,
  },
  {
    destination: "Kamilari",
    perfecture: "Herakleion",
    price: 74,
    distance: 67,
    approximateTime: 85,
  },
  {
    destination: "Karteros",
    perfecture: "Herakleion",
    price: 14,
    distance: 6,
    approximateTime: 5,
  },
  {
    destination: "Kasteli Kissamou",
    perfecture: "Chania",
    price: 199,
    distance: 175,
    approximateTime: 130,
  },
  {
    destination: "Kokkini Chani",
    perfecture: "Herakleion",
    price: 19,
    distance: 10,
    approximateTime: 10,
  },
  {
    destination: "Kokkinos Pirgos Timpaki",
    perfecture: "Herakleion",
    price: 79,
    distance: 70,
    approximateTime: 70,
  },
  {
    destination: "Kolymvari",
    perfecture: "Chania",
    price: 184,
    distance: 162,
    approximateTime: 120,
  },
  {
    destination: "Koutouloufari",
    perfecture: "Herakleion",
    price: 34,
    distance: 25,
    approximateTime: 25,
  },
  {
    destination: "Koutsounari",
    perfecture: "Agios Nikolaos",
    price: 109,
    distance: 103,
    approximateTime: 90,
  },
  {
    destination: "Kritsa",
    perfecture: "Agios Nikolaos",
    price: 69,
    distance: 60,
    approximateTime: 60,
  },
  {
    destination: "Lentas",
    perfecture: "Herakleion",
    price: 84,
    distance: 74,
    approximateTime: 80,
  },
  {
    destination: "Ligaria",
    perfecture: "Herakleion",
    price: 29,
    distance: 23,
    approximateTime: 20,
  },
  {
    destination: "Kournas Lake",
    perfecture: "Chania",
    price: 119,
    distance: 106,
    approximateTime: 80,
  },
  {
    destination: "Loutro",
    perfecture: "Chania",
    price: 199,
    distance: 106,
    approximateTime: 80,
  },
  {
    destination: "Makry Gialos",
    perfecture: "Agios Nikolaos",
    price: 139,
    distance: 120,
    approximateTime: 105,
  },
  {
    destination: "Maleme",
    perfecture: "Chania",
    price: 184,
    distance: 162,
    approximateTime: 125,
  },
  {
    destination: "Malia",
    perfecture: "Herakleion",
    price: 44,
    distance: 33,
    approximateTime: 25,
  },
  {
    destination: "Matala",
    perfecture: "Herakleion",
    price: 79,
    distance: 72,
    approximateTime: 90,
  },
  {
    destination: "Milatos",
    perfecture: "Agios Nikolaos",
    price: 54,
    distance: 44,
    approximateTime: 45,
  },
  {
    destination: "Mires",
    perfecture: "Herakleion",
    price: 64,
    distance: 56,
    approximateTime: 55,
  },
  {
    destination: "Mochlos",
    perfecture: "Agios Nikolaos",
    price: 119,
    distance: 100,
    approximateTime: 85,
  },
  {
    destination: "Neapoli",
    perfecture: "Agios Nikolaos",
    price: 59,
    distance: 52,
    approximateTime: 40,
  },
  {
    destination: "Omalos",
    perfecture: "Chania",
    price: 199,
    distance: 176,
    approximateTime: 150,
  },
  {
    destination: "Oropedio Psichrou",
    perfecture: "Agios Nikolaos",
    price: 59,
    distance: 57,
    approximateTime: 60,
  },
  {
    destination: "Pachia Ammos",
    perfecture: "Agios Nikolaos",
    price: 89,
    distance: 80,
    approximateTime: 65,
  },
  {
    destination: "Paleokastro Sitias",
    perfecture: "Agios Nikolaos",
    price: 169,
    distance: 145,
    approximateTime: 130,
  },
  {
    destination: "Paleochora",
    perfecture: "Chania",
    price: 249,
    distance: 209,
    approximateTime: 180,
  },
  {
    destination: "Panormo",
    perfecture: "Rethymnon",
    price: 69,
    distance: 60,
    approximateTime: 60,
  },
  {
    destination: "Pitsidia",
    perfecture: "Herakleion",
    price: 74,
    distance: 67,
    approximateTime: 70,
  },
  {
    destination: "Plakias",
    perfecture: "Rethymnon",
    price: 129,
    distance: 115,
    approximateTime: 100,
  },
  {
    destination: "Platanias",
    perfecture: "Chania",
    price: 184,
    distance: 160,
    approximateTime: 130,
  },
  {
    destination: "Rethymnon City",
    perfecture: "Rethymnon",
    price: 89,
    distance: 85,
    approximateTime: 70,
  },
  {
    destination: "Sisi",
    perfecture: "Agios Nikolaos",
    price: 49,
    distance: 40,
    approximateTime: 40,
  },
  {
    destination: "Sitia Airport",
    perfecture: "Agios Nikolaos",
    price: 144,
    distance: 127,
    approximateTime: 110,
  },
  {
    destination: "Sitia",
    perfecture: "Agios Nikolaos",
    price: 149,
    distance: 129,
    approximateTime: 110,
  },
  {
    destination: "Souda",
    perfecture: "Chania",
    price: 159,
    distance: 134,
    approximateTime: 110,
  },
  {
    destination: "Sougia",
    perfecture: "Chania",
    price: 224,
    distance: 198,
    approximateTime: 180,
  },
  {
    destination: "Spili",
    perfecture: "Rethymnon",
    price: 119,
    distance: 107,
    approximateTime: 90,
  },
  {
    destination: "Spilios",
    perfecture: "Chania",
    price: 209,
    distance: 187,
    approximateTime: 150,
  },
  {
    destination: "Stalida",
    perfecture: "Herakleion",
    price: 39,
    distance: 30,
    approximateTime: 25,
  },
  {
    destination: "Triopetra",
    perfecture: "Rethymnon",
    price: 124,
    distance: 105,
    approximateTime: 120,
  },
  {
    destination: "Tsoutsouros",
    perfecture: "Herakleion",
    price: 59,
    distance: 54,
    approximateTime: 60,
  },
  {
    destination: "Vai",
    perfecture: "Agios Nikolaos",
    price: 179,
    distance: 150,
    approximateTime: 130,
  },
  {
    destination: "Vamos",
    perfecture: "Chania",
    price: 129,
    distance: 114,
    approximateTime: 90,
  },
  {
    destination: "Viannos",
    perfecture: "Herakleion",
    price: 64,
    distance: 56,
    approximateTime: 50,
  },
  {
    destination: "Zakros",
    perfecture: "Agios Nikolaos",
    price: 189,
    distance: 170,
    approximateTime: 140,
  },
  {
    destination: "Zaros",
    perfecture: "Herakleion",
    price: 59,
    distance: 50,
    approximateTime: 50,
  },
  {
    destination: "Agiofaraggo",
    perfecture: "Herakleion",
    price: 84,
    distance: 75,
    approximateTime: 90,
  },
  {
    destination: "Kroutaliotiko Gorge",
    perfecture: "Rethymnon",
    price: 129,
    distance: 105,
    approximateTime: 95,
  },
  {
    destination: "Samarias Gorge",
    perfecture: "Chania",
    price: 199,
    distance: 176,
    approximateTime: 150,
  },
];
export let sortedDestinations = destinations.sort((a,b) => a.distance - b.distance);