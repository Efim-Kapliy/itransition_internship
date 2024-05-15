import { useState } from 'react';
import cls from './component.module.scss';

function SomeComponent() {
  const [count, setCount] = useState(0);

  const onIncrease = () => {
    setCount(count + 1);
  }

  return (
    <>
      <div className={cls.test}>{count}</div>
      <button onClick={onIncrease}>increase</button>
    </>
  )
}

export default SomeComponent;
