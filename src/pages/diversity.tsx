import { useState } from 'react';

import prideFlag from '../assests/pride.jpeg'

export function PridePage() {
  const [count, setCount] = useState(0);

  const handleCount = () => {
    setCount((c) => c + 1);
  };

  return (
    <div>
      <img src={prideFlag}/>
    </div>
  );
}
