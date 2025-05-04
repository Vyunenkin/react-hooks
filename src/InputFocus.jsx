import { useRef, useState } from 'react';

function InputFocus() {
  const input = useRef(null);
  const [inputValue, setInputValue] = useState();
  const [text, setText] = useState();

  function onButtonClickFocus() {
    input.current.focus();
    setText(input.current.value);
    setInputValue('');
  }

  function handleInputChange(e) {
    setInputValue(e.target.value);
  }

  return (
    <div>
      <input ref={input} type="text" value={inputValue} onChange={handleInputChange} />
      <button onClick={onButtonClickFocus}> Установить фокус и вывести текст</button>
      {text && <p>{text}</p>}
    </div>
  )
}

export default InputFocus;