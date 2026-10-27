import { Formula, WheelResult } from './types';

export const formulas: Formula[] = [
  {
    id: '1-lot',
    name: '1 Lot',
    referenceAmount: 2_000_000,
    promotionalAmount: 2_000_000,
    initialDeposit: 1_000_000,
    monthlyPayment: 250_000,
    description: 'Participation pour 1 lot (2 000 000 FCFA)',
    numberOfLots: 1,
  },
  {
    id: '3-lots',
    name: '3 Lots',
    referenceAmount: 6_000_000,
    promotionalAmount: 6_000_000,
    initialDeposit: [2_000_000, 2_000_000],
    monthlyPayment: 500_000,
    description: 'Participation pour 3 lots (6 000 000 FCFA)',
    numberOfLots: 3,
  },
];

export const wheelResults: WheelResult[] = [
  {
    id: 'discount-10',
    label: 'Réduction 10%',
    discount: 10,
    color: '#FF8C00',
    probability: 20,
  },
  {
    id: 'discount-5',
    label: 'Réduction 5%',
    discount: 5,
    color: '#FFA500',
    probability: 25,
  },
  {
    id: 'frais-reduits',
    label: 'Frais réduits',
    bonus: 'Réduction des frais administratifs',
    color: '#1B8C6F',
    probability: 30,
  },
  {
    id: 'consult-gratuit',
    label: 'Accompagnement',
    bonus: 'Accompagnement juridique gratuit',
    color: '#00A651',
    probability: 25,
  },
];

export const paymentMethods = [
  'Virement bancaire',
  'Espèces',
  'Chèque',
  'Plan de paiement échelonné',
];

export const investmentHorizons = [
  'Court terme (< 1 an)',
  'Moyen terme (1-3 ans)',
  'Long terme (> 3 ans)',
  'Sans horizon défini',
];

// Projet détails - Akpessekro Investment Opportunity
export const projectDetails = {
  location: 'Akpessekro, Yamoussoukro',
  numberOfLots: 25,
  totalArea: 69, // hectares
  pricePerLot: 2_000_000, // FCFA
  indicativeSizePerLot: '300-400 m²',
  futureValueEstimate: 15_000_000, // FCFA par lot (sous réserve)
  infrastructure: ['Électricité disponible', 'Zone habitée', 'Pistes d\'accès existantes'],
  features: ['Terrain en zone développement', 'Proximité services urbains', 'Accès routier établi'],
  foncierStatus: {
    currentDocument: 'Attestation villageoise signée par le chef du village',
    acdStatus: 'Non obtenu à ce jour',
    objective: 'Mobiliser des fonds pour financer le processus de titrage foncier',
  },
};

// Frais crédibles (appliqués après réduction roue)
export const credibleFees = {
  registration: 40_000,    // Frais d'enregistrement foncier
  administrative: 35_000,  // Frais administratifs
  total: 75_000,
};

// Règles de validation
export const validation = {
  minPhone: 8,
  maxPhone: 15,
  minBudget: 500_000,
  maxBudget: 100_000_000,
};
