import {useState, useMemo} from 'react';

function NumberSum() {
  const [numbers, setNumbers] = useState(generateRandomArray());
    
  function generateRandomArray() {
    return [...Array(10)].map(() => Math.floor(Math.random() * 100) + 1);
  }

  function newArray(){
    setNumbers(generateRandomArray());
  }

  const sum = useMemo(() => {
    console.log("Вычисляем сумму");
    return numbers.reduce((acc, num) => acc + num, 0);
  }, [numbers]);

  return (
    <div>
      <h2>Список случайных чисел:</h2>
      <ul>
        {numbers.map((num, index) => (
          <li key={index}>{num}</li>
        ))}
      </ul>
      <p>Сумма: { sum }</p>
      <button onClick={ newArray }> Сгенерировать новые числа </button>
    </div>
  );
}

export default NumberSum;