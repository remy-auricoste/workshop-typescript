// doc : https://www.typescriptlang.org/docs/handbook/utility-types.html
type MyObject = {
  name: string;
  age: number;
};

type PartialMyObject = Partial<MyObject>; // champs optionnels
// type PartialMyObject = {
//     name?: string | undefined;
//     age?: number | undefined;
// }

type ReadOnlyMyObject = Readonly<MyObject>;
// type ReadOnlyMyObject = {
//     readonly name: string;
//     readonly age: number;
// }
const a: ReadOnlyMyObject = {
  age: 3,
  name: "test",
};
a.age = 5; // error

const record: Record<string, string> = {
  test: "test",
};
const record2: { [key: string]: string } = {
  test: "test",
};
// same

type AgeObject = Pick<MyObject, "age">;
// type AgeObject = {
//     age: number;
// }
type RestObject = Omit<MyObject, "age">;
// type RestObject = {
//     name: string;
// }

type NonNullbaleObject = NonNullable<MyObject | null | undefined>;
// type NonNullbaleObject = MyObject
