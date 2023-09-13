// Voici des examples de codes permettant de gérer les cycles de vie d'un objet

// example :
// un object est créé puis est enrichi 2 fois
type NewEntreprise = {
  siret: string;
};
type SocioData = {
  raisonSociale: string;
  nombreDemployes: number;
};
type PredictionData = {
  willHire: boolean;
};

// le cycle de vie est :
// 1. Creation d'une entreprise (NewEntreprise)
// 2. Ajout des données Socio
// 3. Ajout des données de prédiction

type EntrepriseWithSocioData = NewEntreprise & SocioData;
type EntrepriseWithPredictionAndSocioData = NewEntreprise &
  SocioData &
  PredictionData;

type Entreprise =
  | NewEntreprise // etape 1
  | EntrepriseWithSocioData // etape 2
  | EntrepriseWithPredictionAndSocioData; // etape3

function entrepriseHasSocioData(
  entreprise: Entreprise
): entreprise is EntrepriseWithSocioData {
  return "raisonSociale" in entreprise;
}
function entrepriseHasSocioAndPredictionData(
  entreprise: Entreprise
): entreprise is EntrepriseWithPredictionAndSocioData {
  return "willHire" in entreprise;
}

// example d'utilisation
function createEntreprise(entreprise: NewEntreprise) {
  // traitement
}
function renderEntreprise(entreprise: EntrepriseWithPredictionAndSocioData) {
  // ici, j'ai besoin de tous les champs
  const { nombreDemployes, raisonSociale, siret, willHire } = entreprise;
}
function renderEntreprisePlusRobuste(entreprise: Entreprise) {
  const { siret } = entreprise; // seul le siret est disponible
  if (entrepriseHasSocioAndPredictionData(entreprise)) {
    // etape 3
    const { nombreDemployes, raisonSociale, willHire } = entreprise;
  } else if (entrepriseHasSocioData(entreprise)) {
    // etape 2
    const { nombreDemployes, raisonSociale } = entreprise;
  } else {
    // etape 1
  }
  // désavantage : on ne peut pas accéder à tous les champs en mode optionnel : il faut d'abord identifier à quelle étape on est au préalable
}

// avantages: on peut typer fortement les fonctions qui ne sont utiles qu'à certaines étapes.
// désavantage : si le workflow et les étapes changent, tout le typage change et peut impacter pas mal de code.

type EntrepriseWithAllFields = NewEntreprise &
  Partial<EntrepriseWithSocioData> &
  Partial<EntrepriseWithPredictionAndSocioData>;

// approche plus résistante au changement de workflow :
function renderAnyEntreprise(entreprise: EntrepriseWithAllFields) {
  const { siret, nombreDemployes, raisonSociale, willHire } = entreprise;
  // ici, tous les champs sont disponible en mode optionnel => il faut gérer les champs optionels
}
