# PLAN DE REPOSITIONNEMENT AKPESSEKRO

## MODIFICATIONS À EFFECTUER

### 1. COMPOSANTS À MODIFIER
- [ ] Hero.tsx → Nouveau titre + sous-titre + infos clés (69 ha, 25 lots, 2M FCFA/lot)
- [ ] Formulas.tsx → Renommer en "Lots et modalités" + afficher 1 lot et 3 lots
- [ ] ProjectDetails.tsx → Renommer en "Le Projet" + Localisation + Contexte
- [ ] PromotionalWheel.tsx → À REMPLACER par "Intérêt de participation" ou "Estimation future" (15M FCFA)
- [ ] ProspectForm.tsx → "Formulaire de candidature investisseur" + champs clarifiés

### 2. NOUVEAUX COMPOSANTS À CRÉER
- [ ] ComprehendNumbers.tsx → "Comprendre les chiffres" (2M, 25 lots, 15M potentiel)
- [ ] FoncierTransparency.tsx → "Transparence foncière" (Attestation villageoise, ACD, processus)
- [ ] ConditionsRisks.tsx → "Conditions et risques" (Nature participation, droits, risques, conditions)
- [ ] ParticipationInterest.tsx → "Pourquoi participer en amont" (Avantages, potentiel)

### 3. SECTIONS FINALES À AFFICHER

```
1. NAVBAR (sticky) ✅
2. HERO PREMIUM
   - "AKPESSEKRO — Une opportunité foncière à un stade stratégique"
   - 69 hectares | 25 lots | 300-400 m²/lot | 2M FCFA/lot
   - Boutons: "Découvrir le projet" | "Étudier les conditions"

3. LE PROJET
   - Localisation: Akpessekro, Yamoussoukro
   - Contexte & mobilisation de fonds

4. POURQUOI PARTICIPER EN AMONT?
   - Intérêt de l'opération
   - Valorisation potentielle (15M FCFA, sous réserve)
   - Pas de promesses

5. COMPRENDRE LES CHIFFRES
   - 2M FCFA par lot (prix envisagé)
   - 25 lots proposés
   - 15M FCFA valeur future (estimation indicative)
   - Clarifier: théorique, avant frais, conditionné

6. ROUE PROMOTIONNELLE OU INTÉRÊT? 
   [À DÉCIDER : Garder roue ou remplacer?]

7. TRANSPARENCE FONCIÈRE
   - Attestation villageoise signée
   - ACD: non obtenu à ce jour
   - Objectif: financer processus de titrage
   - Risques & conditions

8. FORMULAIRE CANDIDATURE
   - Nom, Téléphone, Email (optionnel)
   - Nombre de lots envisagés
   - Budget indicatif
   - Confirmation: "Je comprends que l'ACD n'a pas été obtenu"

9. CONDITIONS & RISQUES
   - Nature exacte de la participation
   - Droits prévus au contrat
   - Utilisation des fonds
   - Conditions & étapes
   - Risques & non-aboutissement
   - Remboursement & frais

10. FOOTER ✅
```

### 4. DONNÉES À CONFIRMER AVEC L'ÉQUIPE

AVANT DE PUBLIER:
- [ ] Documents fonciers exacts (noms légaux)
- [ ] Contrat de participation (droits détaillés)
- [ ] Utilisation précise des fonds collectés
- [ ] Calendrier du processus de titrage
- [ ] Conditions de remboursement si ACD échoue
- [ ] Frais applicables (enregistrement, administratif, etc.)
- [ ] Qui détermine la valeur future après titrage?
- [ ] Clauses de résiliation

### 5. ÉLÉMENTS À NE PAS MODIFIER

✅ Routes API (prospects, admin)
✅ Système email (Resend)
✅ Anti-spam 24h
✅ Admin dashboard
✅ Responsivité mobile
✅ Navbar sticky
✅ Design couleurs (orange #FF8C00, vert #1B8C6F)

### 6. TÂCHES TECHNIQUES

- [ ] Update config.ts (DONE ✅)
- [ ] Update types.ts (DONE ✅)
- [ ] Rewrite Hero.tsx
- [ ] Rename/Update Formulas.tsx
- [ ] Create ComprehendNumbers.tsx
- [ ] Create FoncierTransparency.tsx
- [ ] Create ConditionsRisks.tsx
- [ ] Create ParticipationInterest.tsx
- [ ] Handle/Replace PromotionalWheel
- [ ] Update ProspectForm.tsx labels
- [ ] Update app/page.tsx structure
- [ ] Test complet (mobile + desktop)
- [ ] Deploy & verify

### STATUT : À COMMENCER

En attente de confirmation : 
- [ ] Gardons-nous la roue promotionnelle? (OUI/NON)
- [ ] Ordre des sections OK? (voir structure ci-dessus)
- [ ] Données foncières complètes?
