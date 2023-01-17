"use client";

import { useRouter } from "next/navigation";
import { useState } from "react";

async function addTodo(name: string, refresh: () => void) {
  await fetch("/api/todo/add", {
    method: "POST",
    body: JSON.stringify({ name }),
  });
  refresh();
}

const AddNewTodo = () => {
  const [name, setName] = useState("");
  const router = useRouter();
  return (
    <div>
      <input
        type='text'
        value={name}
        onChange={(event) => setName(event.target.value)}
      />
      <button
        onClick={async () => {
          await addTodo(name, router.refresh);
          setName("");
        }}
      >
        Add
      </button>
    </div>
  );
};

export default AddNewTodo;
