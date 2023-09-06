type State = {
  value: number;
};
const api = (state: State) => ({
  add(step: number) {
    return { value: state.value + step };
  },
  subtract(step: number) {
    return { value: state.value - step };
  },
  join({ str1, str2 }: { str1: string; str2: string }) {
    return str1 + str2;
  },
});

type FunctionCollection<Arg = any, Result = any> = {
  [key: string]: (arg: Arg) => Result;
};

type Command<
  Functions extends FunctionCollection,
  Key extends keyof Functions = keyof Functions
> = {
  methodName: Key;
  arg: Parameters<Functions[Key]>[0];
};

type MyApi = ReturnType<typeof api>;
type MyApiCommand<Key extends keyof MyApi> = Command<MyApi, Key>;

const command: MyApiCommand<"join"> = {
  methodName: "join",
  arg: { str1: "a", str2: "b" },
};
const command2: MyApiCommand<"add"> = {
  methodName: "add",
  arg: 1,
};
