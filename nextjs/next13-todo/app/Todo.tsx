"use client";
import { useRouter } from "next/navigation";

interface Todo {
  id: string;
  name: string;
  isDone: false;
}

async function update(id: string, isDone: boolean, refresh: () => void) {
  await fetch("/api/todo/update", {
    method: "POST",
    body: JSON.stringify({ id, isDone }),
  });
  refresh();
}

async function deleteTodo(id: string, refresh: () => void) {
  await fetch(`/api/todo/delete?id=${id}`, {
    method: "DELETE",
  });
  refresh();
}

export default function Todo({ todo }: { todo: Todo }) {
  const router = useRouter();
  return (
    <>
      <input
        type='checkbox'
        onChange={async (event) =>
          await update(todo.id, event.target.checked, router.refresh)
        }
        checked={todo.isDone}
      />
      {todo.name}
      <button onClick={() => deleteTodo(todo.id, router.refresh)}>
        Delete
      </button>
    </>
  );
}
