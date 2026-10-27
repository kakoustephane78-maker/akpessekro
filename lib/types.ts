export interface Formula {
  id: string;
  name: string;
  referenceAmount: number;
  promotionalAmount: number;
  initialDeposit: number | number[];
  monthlyPayment: number;
  description: string;
  numberOfLots?: number;
}

export interface WheelResult {
  id: string;
  label: string;
  discount?: number;
  bonus?: string;
  color: string;
  probability?: number;
}

export interface Prospect {
  id: string;
  firstName: string;
  lastName: string;
  phone: string;
  email?: string;
  formula: string;
  numberOfLots: number;
  paymentMethod: string;
  budget?: string;
  initialDeposit?: number;
  investmentHorizon?: string;
  wheelResult?: string;
  wheelResultValue?: string;
  createdAt: string;
  source: string;
  status: 'nouveau' | 'à_contacter' | 'contact_établi' | 'qualifié' | 'rendez_vous_programmé' | 'en_attente' | 'conclu' | 'sans_suite';
  notes?: string;
}

export interface WheelSpin {
  prospectId: string;
  result: string;
  resultValue: string;
  timestamp: string;
}
