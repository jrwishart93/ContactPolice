type Officer = {
  id: string;
  name: string;
  collar: string;
  rank: string;
  bio?: string;
};

const officers: Officer[] = [
  { id: 'T329', name: 'J. Wishart', rank: 'Constable', collar: '329', bio: 'Local beat officer covering central district.' },
  { id: 'T159', name: 'D. Niven', rank: 'Constable', collar: '159', bio: 'Community liaison and outreach.' },
  { id: 'T245', name: 'C. Beddows', rank: 'Constable', collar: '245', bio: 'Traffic and incident response.' },
  { id: 'T992', name: 'R. Sterling', rank: 'Sergeant', collar: '992', bio: 'Supervising officer for sector 4.' },
];

export default officers;
