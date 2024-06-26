import { useState } from 'react';
import classes from './Counter.module.scss';

const Counter = () => {
  const [count, setCount] = useState(0);

  const increment = () => {
    setCount(count + 1);
  };

  console.log(classes);

  return (
    <div>
      <h1 className={classes.text}>{count}</h1>
      <button className={classes.button} onClick={increment}>
        increment
      </button>
    </div>
  );
};

export default Counter;
