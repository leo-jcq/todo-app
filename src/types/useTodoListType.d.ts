import TodoType from "./TodoType";

type useTodoListType = [
    TodoType[],
    (value: TodoType[]) => void,
    (description: string) => void,
    (id: number) => void,
    (id: number) => void,
    () => void
];
