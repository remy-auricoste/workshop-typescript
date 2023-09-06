type RawPerson = {
  name: string;
};
type FilledPerson = {
  name: string;
  age: number;
};

function getName(person: RawPerson) {
  return person.name;
}
const raw: RawPerson = { name: "raw" };
const filled: FilledPerson = { name: "filled", age: 3 };
getName(raw);
getName(filled); // OK de passer plus de paramètres

type FunctionContainer = {
  add(value1: number, value2: number, value3: number): number;
};
const container: FunctionContainer = {
  // OK ???
  add(value1, value2) {
    return value1 + value2;
  },
};
container.add(1, 2, 3);
container.add(1, 2);

// je préfère utiliser le style suivant moins permissif
type FunctionContainer2 = {
  add(props: { value1: number; value2: number }): number;
};
const container2: FunctionContainer2 = {
  // (method) add(props: {
  //     value1: number;
  //     value2: number;
  // }): number
  // on peut aussi ne pas utiliser les paramètres, mais au moins c'est typé correctement
  add({ value1 }) {
    return value1;
  },
};
container2.add({ value1: 1, value2: 2 });
container2.add({ value1: 1 });
