import { useContext } from 'react';
import { ThemeContext } from './main.jsx';
import Buttons from './Buttons.jsx';
import NumberSum from './NumberSum.jsx';
import InputFocus from './InputFocus.jsx';
import TodoList from './TodoList.jsx';

function App() {
  const { theme, toggleTheme } = useContext(ThemeContext);

  return (
    <div className={`app ${theme}`}>
      <header>
        <button onClick={toggleTheme}>
          Переключить тему ({theme === 'light' ? 'Светлая' : 'Тёмная'})
        </button>
      </header>
      <Buttons />
      <NumberSum />
      <InputFocus />
      <TodoList />
    </div>
  );
}

export default App;
