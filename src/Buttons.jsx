import { useState, useCallback } from 'react';
import RegularButton from './RegularButton.jsx';
import MemoizedButton from './MemoizedButton.jsx';

function Buttons() {
  const [count, setCount] = useState(0);
  const [step, setStep] = useState(1);

  const increment = useCallback(() => {
    setCount((c) => c + step);
  }, [step]);

  const decrement = useCallback(() => {
    setCount((c) => c - step);
  }, [step]);

  const incrementNoCallback = () => {
    setCount((c) => c + step);
  };

  const decrementNoCallback = () => {
    setCount((c) => c - step);
  };

  const handleStepChange = (e) => {
    const value = parseInt(e.target.value);
    if (!isNaN(value)) {
      setStep(value);
    }
  };

  const labelInc = `+${step}`;
  const labelDec = `-${step}`;

  return (
    <div>
      <h2>Счётчик: {count}</h2>

      <div style={{ margin: '20px 0' }}>
        <label>
          Шаг изменения:
          <input type="number" value={step} onChange={handleStepChange} min="1" />
        </label>
      </div>

      <h3>1. Обычные кнопки с обычными функциями</h3>
      <RegularButton onClick={incrementNoCallback} label={labelInc} />
      <RegularButton onClick={decrementNoCallback} label={labelDec} />

      <h3>2. Обычные кнопки с useCallback</h3>
      <RegularButton onClick={increment} label={labelInc} />
      <RegularButton onClick={decrement} label={labelDec} />

      <h3>3. Мемокнопки с обычными функциями</h3>
      <MemoizedButton onClick={incrementNoCallback} label={labelInc} />
      <MemoizedButton onClick={decrementNoCallback} label={labelDec} />

      <h3>4. Мемокнопки с useCallback</h3>
      <MemoizedButton onClick={increment} label={labelInc} />
      <MemoizedButton onClick={decrement} label={labelDec} />
    </div>
  );
}

export default Buttons;