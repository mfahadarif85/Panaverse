import Todo from "./Todo";

const getTodos = async () => {
  try {
    const data = await fetch("http://127.0.0.1:3001/api/todo/list");
    return data.json();
  } catch (error) {
    console.log(error);
  }
};
interface Todo {
  id: string;
  name: string;
  isDone: false;
}
export default async function TodoList() {
  const { todos } = await getTodos();
  const renderedTodos = todos.map((todo: Todo) => (
    <li key={todo.id}>
      <Todo todo={todo} />
    </li>
  ));
  return (
    <div>
      <ul>{renderedTodos}</ul>
    </div>
  );
}
