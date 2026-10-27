import { Formula, WheelResult } from './types';

export const formulas: Formula[] = [
  {
    id: 'individual',
    name: 'Formule Individuelle',
    referenceAmount: 2_500_000,
    promotionalAmount: 2_000_000,
    initialDeposit: 1_000_000,
    monthlyPayment: 100_000,
    description: 'Participation à titre individuel à partir de 2M FCFA',
  },
  {
    id: 'group',
    name: 'Formule Groupée',
    referenceAmount: 6_000_000,
    promotionalAmount: 5_000_000,
    initialDeposit: [2_000_000, 3_000_000],
    monthlyPayment: 200_000,
    description: 'Participation groupée pour 3 lots à partir de 5M FCFA',
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

// Projet détails
export const projectDetails = {
  location: 'Akpessekro, Yamoussoukro',
  numberOfLots: 25,
  totalArea: 69, // hectares
  infrastructure: ['Électricité', 'Zone habitée', 'Pistes d\'accès'],
  features: ['Terrain en zone développement', 'Proximité services urbains', 'Pistes existantes'],
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
