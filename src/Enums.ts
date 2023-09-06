type Access = "autorisé" | "refusé" | "en attente de validation";

enum Access2 {
  Autorise = "autorisé",
  Refuse = "refusé",
  EnAttente = "en attente de validation",
}

function traitement1(access: Access) {
  switch (access) {
    case "autorisé":
    case "refusé":
    case "en attente de validation":
      return 1;
    case "plop": // erreur
      return 2;
  }
}

function traitement2(access: Access2) {
  switch (access) {
    case Access2.Autorise:
    case Access2.Refuse:
    case Access2.EnAttente:
      return 1;
    case "plop": // erreur
      return 2;
  }
}
// Access2 est comme Record<string, string>
Object.values(Access2);
// plus pratique pour les refactorings : find usage, rename, ...
