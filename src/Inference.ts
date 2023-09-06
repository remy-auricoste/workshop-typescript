// Attention, laisser faire le compilateur pour les fonctions :
function getPerson() {
  return {
    age: 5,
    name: "Jean",
  };
}
const person = getPerson();
// {
//     age: number;
//     name: string;
// }
person.address; // error

// alors que
function getPerson2(): Record<string, string | number> {
  return {
    age: 5,
    name: "Jean",
  };
}
const person2 = getPerson2();
person2.address = "adresse"; // pas d'erreur

// possibilité d'utiliser une valeur comme un type
const value = {
  name: "test",
  age: 3,
};
type ValueType = typeof value;
// type ValueType = {
//     name: string;
//     age: number;
// }

// attenttion : les types peuvent parfois être trop larges. A vérifier.
