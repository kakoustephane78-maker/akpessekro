'use client';

import { useState } from 'react';
import { formulas, paymentMethods, investmentHorizons } from '@/lib/config';
import { Prospect } from '@/lib/types';

interface ProspectFormProps {
  wheelSpun: boolean;
  wheelResult?: any;
  wheelResultValue?: string;
}

export default function ProspectForm({ wheelSpun, wheelResult, wheelResultValue }: ProspectFormProps) {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState('');
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    phone: '',
    email: '',
    formula: '',
    numberOfLots: 1,
    paymentMethod: '',
    budget: '',
    initialDeposit: '',
    investmentHorizon: '',
    wheelResult: wheelResult?.label || '',
    wheelResultValue: wheelResult?.discount ? `-${wheelResult.discount}%` : wheelResult?.bonus || '',
    consent: false,
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>
  ) => {
    const { name, value, type } = e.target;
    if (type === 'checkbox') {
      setFormData((prev) => ({
        ...prev,
        [name]: (e.target as HTMLInputElement).checked,
      }));
    } else {
      setFormData((prev) => ({
        ...prev,
        [name]: value,
      }));
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError('');
    setIsSubmitting(true);

    try {
      // Validation
      if (!formData.firstName || !formData.lastName || !formData.phone) {
        throw new Error('Veuillez remplir tous les champs obligatoires');
      }

      if (!formData.consent) {
        throw new Error('Vous devez accepter les conditions');
      }

      const response = await fetch('/api/prospects', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });

      if (!response.ok) {
        const data = await response.json();
        throw new Error(data.message || 'Erreur lors de la soumission');
      }

      setSubmitted(true);
      setFormData({
        firstName: '',
        lastName: '',
        phone: '',
        email: '',
        formula: '',
        numberOfLots: 1,
        paymentMethod: '',
        budget: '',
        initialDeposit: '',
        investmentHorizon: '',
        wheelResult: wheelResult || '',
        wheelResultValue: wheelResultValue || '',
        consent: false,
      });

      setTimeout(() => {
        setSubmitted(false);
      }, 5000);
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Une erreur est survenue');
    } finally {
      setIsSubmitting(false);
    }
  };

  if (submitted) {
    return (
      <div className="bg-green-50 border-l-4 border-green-700 rounded-sm p-8 text-center">
        <h3 className="text-2xl font-semibold text-green-900 mb-2">✓ Demande reçue !</h3>
        <p className="text-green-700 mb-4">
          Merci pour votre intérêt. Nous vous contacterons dès que possible.
        </p>
        <p className="text-sm text-gray-600">Confirmation et suivi seront envoyés par SMS/WhatsApp</p>
      </div>
    );
  }


  return (
    <form onSubmit={handleSubmit} className="space-y-6 md:space-y-8">
      {/* Contact Info */}
      <div>
        <h3 className="text-lg md:text-xl font-semibold text-gray-900 mb-4">Vos informations</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-3 md:gap-4">
          <input
            type="text"
            name="firstName"
            placeholder="Prénom *"
            value={formData.firstName}
            onChange={handleChange}
            required
            className="px-4 py-3 md:py-3 text-base border border-gray-300 rounded-sm focus:outline-none focus:ring-2 focus:ring-orange-600"
          />
          <input
            type="text"
            name="lastName"
            placeholder="Nom *"
            value={formData.lastName}
            onChange={handleChange}
            required
            className="px-4 py-3 md:py-3 text-base border border-gray-300 rounded-sm focus:outline-none focus:ring-2 focus:ring-orange-600"
          />
          <input
            type="tel"
            name="phone"
            placeholder="Téléphone/WhatsApp *"
            value={formData.phone}
            onChange={handleChange}
            required
            className="px-4 py-3 md:py-3 text-base border border-gray-300 rounded-sm focus:outline-none focus:ring-2 focus:ring-orange-600"
          />
          <input
            type="email"
            name="email"
            placeholder="Email (optionnel)"
            value={formData.email}
            onChange={handleChange}
            className="px-4 py-3 md:py-3 text-base border border-gray-300 rounded-sm focus:outline-none focus:ring-2 focus:ring-orange-600"
          />
        </div>
      </div>

      {/* Formula & Investment */}
      <div>
        <h3 className="text-lg md:text-xl font-semibold text-gray-900 mb-4">Intérêt d&apos;investissement</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-3 md:gap-4">
          <select
            name="formula"
            value={formData.formula}
            onChange={handleChange}
            className="px-4 py-3 md:py-3 text-base border border-gray-300 rounded-sm focus:outline-none focus:ring-2 focus:ring-orange-600"
          >
            <option value="">Choisir une formule...</option>
            {formulas.map((f) => (
              <option key={f.id} value={f.id}>
                {f.name}
              </option>
            ))}
          </select>
          <input
            type="number"
            name="numberOfLots"
            placeholder="Nombre de lots"
            min="1"
            value={formData.numberOfLots}
            onChange={handleChange}
            className="px-4 py-3 md:py-3 text-base border border-gray-300 rounded-sm focus:outline-none focus:ring-2 focus:ring-orange-600"
          />
          <input
            type="text"
            name="budget"
            placeholder="Budget disponible (optionnel)"
            value={formData.budget}
            onChange={handleChange}
            className="px-4 py-3 md:py-3 text-base border border-gray-300 rounded-sm focus:outline-none focus:ring-2 focus:ring-orange-600"
          />
          <input
            type="text"
            name="initialDeposit"
            placeholder="Apport initial envisagé (optionnel)"
            value={formData.initialDeposit}
            onChange={handleChange}
            className="px-4 py-3 md:py-3 text-base border border-gray-300 rounded-sm focus:outline-none focus:ring-2 focus:ring-orange-600"
          />
        </div>
      </div>

      {/* Payment & Timeline */}
      <div>
        <h3 className="text-lg font-semibold text-gray-900 mb-4">Modalités</h3>
        <div className="grid md:grid-cols-2 gap-4">
          <select
            name="paymentMethod"
            value={formData.paymentMethod}
            onChange={handleChange}
            className="px-4 py-3 md:py-3 text-base border border-gray-300 rounded-sm focus:outline-none focus:ring-2 focus:ring-orange-600"
          >
            <option value="">Mode de paiement...</option>
            {paymentMethods.map((method) => (
              <option key={method} value={method}>
                {method}
              </option>
            ))}
          </select>
          <select
            name="investmentHorizon"
            value={formData.investmentHorizon}
            onChange={handleChange}
            className="px-4 py-3 md:py-3 text-base border border-gray-300 rounded-sm focus:outline-none focus:ring-2 focus:ring-orange-600"
          >
            <option value="">Horizon d&apos;investissement...</option>
            {investmentHorizons.map((horizon) => (
              <option key={horizon} value={horizon}>
                {horizon}
              </option>
            ))}
          </select>
        </div>
      </div>

      {/* Wheel Result */}
      {wheelSpun && wheelResult && (
        <div className="bg-orange-50 border-l-4 border-orange-600 rounded-sm p-4">
          <p className="text-sm text-orange-900">
            <strong>Votre avantage :</strong> {wheelResult.label}
            {wheelResult.discount && ` - ${wheelResult.discount}%`}
            {wheelResult.bonus && ` - ${wheelResult.bonus}`}
          </p>
        </div>
      )}

      {/* Consent */}
      <div className="bg-gray-50 border-l-4 border-green-700 rounded-sm p-4">
        <label className="flex items-start gap-3 cursor-pointer">
          <input
            type="checkbox"
            name="consent"
            checked={formData.consent}
            onChange={handleChange}
            className="mt-1 accent-orange-600"
            required
          />
          <span className="text-sm text-gray-700 leading-relaxed">
            J&apos;accepte que mes données soient traitées par SK Immobilier pour recevoir les informations du projet et être recontacté. Aucun engagement juridique n&apos;est formalisé par cette demande. <strong>*</strong>
          </span>
        </label>
      </div>

      {error && (
        <div className="bg-red-50 border-l-4 border-red-600 rounded-sm p-4 text-red-700 text-sm">
          ⚠️ {error}
        </div>
      )}

      <button
        type="submit"
        disabled={isSubmitting}
        className="w-full px-6 py-4 bg-orange-600 text-white font-semibold text-lg rounded-sm hover:bg-orange-700 disabled:opacity-60 transition"
      >
        {isSubmitting ? 'Envoi en cours...' : 'Envoyer ma demande'}
      </button>
    </form>
  );
}
