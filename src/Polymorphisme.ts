type CreationEvent = {
  type: "creation"; // préférer un enum
  id: string;
  age: number;
  name: string;
};
type UpdateEvent = {
  type: "update";
  id: string;
  value: string;
};
type DeleteEvent = {
  type: "delete";
  id: string;
};
type MyEvent = CreationEvent | UpdateEvent;
// type MyEvent = CreationEvent | UpdateEvent | DeleteEvent;

function receiveEvent(event: MyEvent) {
  const { type } = event;
  switch (type) {
    case "creation": {
      const { age, id, name, value } = event;
      return 1;
    }
    case "update":
      const { age, id, name, value } = event;
      return 2;
    default:
      expectNever(type);
  }
}

function expectNever(never: never) {
  throw new Error("should never happen");
}

function getEvent(test: boolean) {
  if (test) {
    return {
      type: "creation",
    };
  } else {
    return {
      type: "update",
    };
  }
}
// attention : le typage automatique n'est pas assez précis pour les enums
// function getEvent(test: boolean): {
//     type: string;
// }

// à typer manuellement en
// function getEvent(test: boolean): {
//     type: "creation" | "update";
// }
