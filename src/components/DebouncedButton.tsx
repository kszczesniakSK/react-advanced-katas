import { useState } from 'react';
import { debounce } from 'lodash';

const DebouncedButton = () => {
  const [count, setCount] = useState(0);

  const handleClick = debounce(() => {
    setCount(count + 1);
  }, 500);

  return (
    <div>
      <button onClick={handleClick}>Click me</button>
      <p>Count: {count}</p>
    </div>
  );
};

export default DebouncedButton;