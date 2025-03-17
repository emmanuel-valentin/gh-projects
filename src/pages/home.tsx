import { useState } from 'react';

import reactLogo from '../assets/react.svg';
import viteLogo from '/vite.svg';

export function HomePage() {
  const [count, setCount] = useState(0);

  const handleCount = () => {
    setCount((c) => c + 1);
  };

  return (
    <div className="flex min-h-screen items-center justify-center flex-col gap-6">
      <div className="flex gap-2">
        <a href="https://vite.dev" target="_blank">
          <img src={viteLogo} className="w-24 h-24" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img
            src={reactLogo}
            className="w-24 h-24 animate-bounce"
            alt="React logo"
          />
        </a>
      </div>
      <h1 className="font-semibold text-2xl">Vite + React</h1>
      <div>
        <button
          className="hover:bg-gray-200 px-4 py-2 rounded cursor-pointer transition-colors border border-gray-200"
          onClick={handleCount}
        >
          count is {count}
        </button>
      </div>
    </div>
  );
}
