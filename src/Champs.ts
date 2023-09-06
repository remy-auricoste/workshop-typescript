type A = {
  field: string | undefined;
};
type B = {
  field?: string;
};
const a: A = {}; // compilation error
const a2: A = { field: undefined };
const b: B = {};

// => je préfère utiliser le style B qui est plus permissif et permet d'écrire du code plus court
