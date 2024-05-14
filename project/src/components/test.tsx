import { useState } from 'react';
import './test.module.scss';

function SomeComponent() {
  const [count, setCount] = useState(0);

  const onIncrease = () => {
    setCount(count + 1);
  }

  return (
    <>
      <div className='test'>{count}</div>
      <button onClick={onIncrease}>increase</button>
    </>
  )
}

export default SomeComponent;
