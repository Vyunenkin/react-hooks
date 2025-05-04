import { useState, useCallback, useMemo } from 'react';
import ButtonNoCallback from './ButtonNoCallback.jsx';
import ButtonWithCallback from './ButtonWithCallback.jsx';

function Buttons() {
  const [count, setCount] = useState(0);
  const [step, setStep] = useState(1);
  const incrementLabel = useMemo(() => `+${step}`, [step]);
  const decrementLabel = useMemo(() => `-${step}`, [step]);  

  const increment = useCallback(() => {
    setCount((c) => c + step);
  }, [step]);

  const decrement = useCallback(() => {
    setCount((c) => c - step);
  }, [step]);

  const incrementNoMemo = () => {
    setCount((c) => c + step);
  };

  const decrementNoMemo = () => {
    setCount((c) => c - step);
  };

  const handleStepChange = (e) => {
    const value = parseInt(e.target.value);
    if (!isNaN(value)) {
      setStep(value);
    }
  };


  return (
    <div>
      <h2>Счётчик: {count}</h2>

      <div style={{ margin: '20px 0' }}>
        <label>
          Шаг изменения: 
          <input type="number" value={step} onChange={handleStepChange} min="1" />
        </label>
      </div>

      <h3>Кнопки без useCallback</h3>
      <ButtonNoCallback onClick={incrementNoMemo}>{incrementLabel}</ButtonNoCallback>
      <ButtonNoCallback onClick={decrementNoMemo}>{decrementLabel}</ButtonNoCallback>

      <h3>Кнопки с useCallback</h3>
      <ButtonWithCallback onClick={increment}>{incrementLabel}</ButtonWithCallback>
      <ButtonWithCallback onClick={decrement}>{decrementLabel}</ButtonWithCallback>
    </div>
  );
}

export default Buttons;