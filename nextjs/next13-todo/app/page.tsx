import AddNewTodo from "./AddNewTodo";
import TodoList from "./TodoList";

export default async function Home() {
  return (
    <div>
      <div>
        <AddNewTodo />
      </div>
      <div>
        {/* @ts-expect-error Server Component */}
        <TodoList />
      </div>
    </div>
  );
}
