'use client';

import { useState } from 'react';

export default function Page() {
  const [todo, setTodo] = useState('');

  const todos = [
    { id: 0, text: 'First Todo' },
    { id: 1, text: 'Second Todo' },
    { id: 2, text: 'Third Todo' },
  ];

  return (
    <div className="m-auto max-w-4xl py-2">
      <h1 className="text-3xl font-bold">Turbopack // NextJS 13 Example</h1>

      <section className="mt-4">
        <h2 className="text-xl">Example Todos Loop</h2>

        <div className="flex flex-col gap-2 bg-[#1e293b] p-1">
          {todos.map((todo, i) => {
            return (
              <button
                onClick={(event) => {
                  setTodo(todo.text);
                }}
                className="w-fit bg-[#a8a29e] p-1"
                key={i}
              >
                {todo.text}
              </button>
            );
          })}
        </div>

        <h3>Selected Todo: {todo}</h3>
      </section>
    </div>
  );
}
