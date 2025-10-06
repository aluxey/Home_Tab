# 🏠 Home Tab — Personal Web Dashboard


## 🚀 Objectif du projet
Créer un espace centralisé pour **suivre ses progrès personnels** (santé, forme, habitudes) à travers des **widgets clairs et dynamiques**.
Le projet se veut **modulaire**, **évolutif** et **axé sur la visualisation de données**.

---

## 🧠 Données à suivre

### Suivi initial (MVP)
- **Poids** : suivi hebdomadaire, affichage de la tendance
- **Pas** : moyenne quotidienne et cumul hebdomadaire
- **Sommeil** : durée moyenne, heures de coucher/lever
- **Activité sportive** : durée, intensité et type d’activité

### Évolutions futures
- **Fréquence cardiaque** (repos / moyenne journalière)
- **Mensurations** (tour de taille, tour de bras, etc.)
- **Hydratation** (volume d’eau consommé)
- **Humeur / niveau d’énergie** (auto-évaluation 1–10)
- **Objectifs personnalisés** (ex. “Perdre 1 kg / mois” ou “7 h de sommeil / nuit”)

💡 *Prioriser le suivi du poids, des pas, du sommeil et des activités dans la première version.*

---

## 🖥️ Fonctionnalités principales

### 1. Page d’accueil — *Home Dashboard*
Affichage synthétique des données clés :
- Poids actuel et évolution : `Poids actuel : 123 kg (–2,1 kg depuis le début)`
- Moyenne de pas hebdomadaire : `6 200 pas/jour`
- Sommeil moyen : `6h45`
- Graphiques miniatures (“sparklines”) pour visualiser les tendances
- Bouton “Voir détails” → renvoie vers la page Santé

---

### 2. Page Santé & Suivi — *Health Tracker*
Vue détaillée avec graphiques et saisie des données :
- Objectifs visibles (poids cible, pas/jour, sommeil)
- Graphiques :
  - Poids : courbe hebdo/mensuelle
  - Pas : barres quotidiennes
  - Sommeil : heatmap ou histogramme
  - Calories : entrées / dépenses
- Tableau récapitulatif des entrées
- Formulaire “Ajouter une entrée” (poids, activité, sommeil, etc.)

---

## 🧩 Architecture technique

### Backend
- **Base de données**
  - Table `tracking_entries`
    | Champ | Type | Description |
    |--------|------|-------------|
    | id | int | identifiant |
    | date | date | date de l’entrée |
    | type | text | catégorie (poids, pas, sommeil…) |
    | value | numeric/json | valeur de la mesure |
    | unit | text | unité (kg, steps, h, kcal…) |
    | user_id | int | référence utilisateur |

- **API REST (Express)**
  - `GET /tracking?type=poids&range=last30days` — récupère les entrées filtrées
  - `POST /tracking` — ajoute une nouvelle entrée
  - `GET /tracking/summary` — retourne les moyennes et tendances
  - Authentification (JWT / Supabase Auth) → données privées par utilisateur

### Frontend
- **Home Page**
  - Affiche le résumé des données via `/tracking/summary`
- **Page Santé**
  - Graphiques (Chart.js ou Recharts)
  - Formulaire de saisie
  - Mode offline possible (localStorage → synchro API)
