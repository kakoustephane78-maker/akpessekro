'use client';

import { useEffect, useState } from 'react';
import Link from 'next/link';

interface Prospect {
  id: string;
  firstName: string;
  lastName: string;
  phone: string;
  email?: string;
  formula?: string;
  paymentMethod?: string;
  wheelResult?: string;
  createdAt: string;
  status: string;
}

export default function AdminPage() {
  const [prospects, setProspects] = useState<Prospect[]>([]);
  const [loading, setLoading] = useState(true);
  const [filterStatus, setFilterStatus] = useState('all');

  useEffect(() => {
    loadProspects();
  }, []);

  const loadProspects = async () => {
    try {
      const response = await fetch('/api/prospects/list');
      if (response.ok) {
        const data = await response.json();
        setProspects(data);
      }
    } catch (err) {
      console.error('Error loading prospects:', err);
    } finally {
      setLoading(false);
    }
  };

  const filtered = filterStatus === 'all'
    ? prospects
    : prospects.filter(p => p.status === filterStatus);

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="flex justify-between items-center mb-8">
          <h1 className="text-3xl font-bold text-slate-900">Tableau de bord</h1>
          <Link href="/" className="px-4 py-2 bg-gray-300 rounded-lg hover:bg-gray-400">
            ← Retour
          </Link>
        </div>

        {/* Stats */}
        <div className="grid md:grid-cols-4 gap-4 mb-8">
          <div className="bg-white rounded-lg p-6 shadow">
            <div className="text-2xl font-bold text-slate-900">{prospects.length}</div>
            <div className="text-gray-600">Total prospects</div>
          </div>
          <div className="bg-white rounded-lg p-6 shadow">
            <div className="text-2xl font-bold text-blue-600">
              {prospects.filter(p => p.status === 'nouveau').length}
            </div>
            <div className="text-gray-600">Nouveaux</div>
          </div>
          <div className="bg-white rounded-lg p-6 shadow">
            <div className="text-2xl font-bold text-green-600">
              {prospects.filter(p => p.status === 'contact_établi').length}
            </div>
            <div className="text-gray-600">En contact</div>
          </div>
          <div className="bg-white rounded-lg p-6 shadow">
            <div className="text-2xl font-bold text-purple-600">
              {prospects.filter(p => p.status === 'conclu').length}
            </div>
            <div className="text-gray-600">Conclu</div>
          </div>
        </div>

        {/* Filter */}
        <div className="mb-6">
          <select
            value={filterStatus}
            onChange={(e) => setFilterStatus(e.target.value)}
            className="px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-400"
          >
            <option value="all">Tous les statuts</option>
            <option value="nouveau">Nouveau</option>
            <option value="à_contacter">À contacter</option>
            <option value="contact_établi">Contact établi</option>
            <option value="qualifié">Qualifié</option>
            <option value="sans_suite">Sans suite</option>
          </select>
        </div>

        {/* Table */}
        <div className="bg-white rounded-lg shadow overflow-hidden">
          {loading ? (
            <div className="p-8 text-center text-gray-500">Chargement...</div>
          ) : filtered.length === 0 ? (
            <div className="p-8 text-center text-gray-500">Aucun prospect</div>
          ) : (
            <table className="w-full">
              <thead className="bg-gray-100 border-b">
                <tr>
                  <th className="px-6 py-3 text-left text-sm font-bold">Nom</th>
                  <th className="px-6 py-3 text-left text-sm font-bold">Téléphone</th>
                  <th className="px-6 py-3 text-left text-sm font-bold">Formule</th>
                  <th className="px-6 py-3 text-left text-sm font-bold">Avantage</th>
                  <th className="px-6 py-3 text-left text-sm font-bold">Statut</th>
                  <th className="px-6 py-3 text-left text-sm font-bold">Date</th>
                  <th className="px-6 py-3 text-left text-sm font-bold">Actions</th>
                </tr>
              </thead>
              <tbody className="divide-y">
                {filtered.map((prospect) => (
                  <tr key={prospect.id} className="hover:bg-gray-50">
                    <td className="px-6 py-4">
                      <div className="font-medium text-slate-900">
                        {prospect.firstName} {prospect.lastName}
                      </div>
                      {prospect.email && <div className="text-sm text-gray-500">{prospect.email}</div>}
                    </td>
                    <td className="px-6 py-4 text-sm">{prospect.phone}</td>
                    <td className="px-6 py-4 text-sm">{prospect.formula || '-'}</td>
                    <td className="px-6 py-4 text-sm">{prospect.wheelResult || '-'}</td>
                    <td className="px-6 py-4 text-sm">
                      <span className="inline-block px-3 py-1 rounded-full text-xs font-medium bg-yellow-100 text-yellow-800">
                        {prospect.status}
                      </span>
                    </td>
                    <td className="px-6 py-4 text-sm text-gray-500">
                      {new Date(prospect.createdAt).toLocaleDateString('fr-CI')}
                    </td>
                    <td className="px-6 py-4 text-sm">
                      <a href={`https://wa.me/${prospect.phone.replace(/\D/g, '')}`} target="_blank" rel="noopener noreferrer" className="text-green-600 hover:text-green-800">
                        WhatsApp
                      </a>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          )}
        </div>
      </div>
    </div>
  );
}
