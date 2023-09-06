// https://www.typescriptlang.org/tsconfig#strict

// ces lignes passerait

// example 1 : strictFunctionTypes
function fn(x: string) {
  console.log("Hello, " + x.toLowerCase());
}
type StringOrNumberFunc = (ns: string | number) => void;

// Unsafe assignment
let func: StringOrNumberFunc = fn;
// Unsafe call - will crash
func(10);

// il faut utiliser
// f: (x: string) => string
// au lieu de
// f(x: string): string
// pour bénéficier de la feature
type Methodish = {
  func(x: string | number): void;
};
// Ultimately an unsafe assignment, but not detected
const m: Methodish = {
  func: fn,
};
m.func(10);

// example 2 : strictNullChecks

const users = [
  { name: "Oby", age: 12 },
  { name: "Heera", age: 32 },
];
const loggedInUser = users.find((u) => u.name === "username");
console.log(loggedInUser.age);

// example 3 : strictPropertyInitialization
class UserAccount {
  name: string;
  accountType = "user";

  email: string;
  // Property 'email' has no initializer and is not definitely assigned in the constructor.
  address: string | undefined;

  constructor(name: string) {
    this.name = name;
    // Note that this.email is not set
  }
}

// example 4 : useUnknownInCatchVariables
try {
  // ...
} catch (err: unknown) {
  // We have to verify err is an
  // error before using it as one.
  if (err instanceof Error) {
    // err typed as Error
    console.log(err.message);
  }
}
