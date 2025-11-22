export type Officer = {
  id: string; // e.g. "T329"
  name: string; // e.g. "J. Wishart"
  rank: string; // e.g. "Constable"
  collar: string; // e.g. "329"
  force: string; // "Police Scotland"
  unit: string; // "Road Policing Unit"
  division: string; // e.g. "Edinburgh"
  email: string; // e.g. "1898907@scotland.police.uk"
  telHint: string; // e.g. "101 (ask for PC Wishart T329, Road Policing)"
  numericId: string; // "1898907"
};

const officers: Officer[] = [
  {
    id: "T329",
    name: "J. Wishart",
    rank: "Constable",
    collar: "329",
    force: "Police Scotland",
    unit: "Road Policing Unit",
    division: "Edinburgh",
    email: "jrwishart@hotmail.co.uk",
    telHint: "101 (ask for PC Wishart T329, Road Policing)",
    numericId: "1898907",
  },
  {
    id: "T159",
    name: "D. Niven",
    rank: "Constable",
    collar: "159",
    force: "Police Scotland",
    unit: "Road Policing Unit",
    division: "Edinburgh",
    email: "",
    telHint: "101 (ask for Road Policing and quote collar 159)",
    numericId: "",
  },
  {
    id: "T245",
    name: "C. Beddows",
    rank: "Constable",
    collar: "245",
    force: "Police Scotland",
    unit: "Road Policing Unit",
    division: "Edinburgh",
    email: "",
    telHint: "101 (ask for Road Policing and quote collar 245)",
    numericId: "",
  },
  {
    id: "T368",
    name: "A. Jardine",
    rank: "Constable",
    collar: "368",
    force: "Police Scotland",
    unit: "Road Policing Unit",
    division: "Edinburgh",
    email: "",
    telHint: "101 (ask for Road Policing and quote collar 368)",
    numericId: "",
  },
  {
    id: "T992",
    name: "R. Sterling",
    rank: "Sergeant",
    collar: "992",
    force: "Police Scotland",
    unit: "Central Operations",
    division: "Edinburgh",
    email: "",
    telHint: "101 (ask for Central Operations and quote collar 992)",
    numericId: "",
  },
];

export default officers;
