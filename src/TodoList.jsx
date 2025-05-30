// TodoList.jsx
import { useReducer, useState, useMemo, useCallback } from 'react';
import TodoItem from './TodoItem';

function todoReducer(state, action) {
  switch (action.type) {
    case 'ADD_TODO':
      return [
        ...state,
        {
          id: Date.now(),
          text: action.payload,
          completed: false,
        },
      ];
    case 'TOGGLE_TODO':
      return state.map(todo =>
        todo.id === action.payload ? { ...todo, completed: !todo.completed } : todo
      );
    case 'DELETE_TODO':
      return state.filter(todo => todo.id !== action.payload);
    default:
      return state;
  }
}

const TodoList = () => {
  const [todos, dispatch] = useReducer(todoReducer, []);
  const [text, setText] = useState('');
  const [filter, setFilter] = useState('');
  const [statusFilter, setStatusFilter] = useState('all');

  const handleAdd = useCallback(() => {
    if (text.trim()) {
      dispatch({ type: 'ADD_TODO', payload: text });
      setText('');
    }
  }, [text]);

  const handleToggle = useCallback(id => {
    dispatch({ type: 'TOGGLE_TODO', payload: id });
  }, []);

  const handleDelete = useCallback(id => {
    dispatch({ type: 'DELETE_TODO', payload: id });
  }, []);

  const filteredTodos = useMemo(() => {
    return todos.filter(todo => {
      const matchesText = todo.text.toLowerCase().includes(filter.toLowerCase());
      const matchesStatus =
        statusFilter === 'all'
          ? true
          : statusFilter === 'completed'
          ? todo.completed
          : !todo.completed;
      return matchesText && matchesStatus;
    });
  }, [todos, filter, statusFilter]);

  return (
    <div>
      <h2>Список задач</h2>

      <div>
        <input
          value={text}
          onChange={e => setText(e.target.value)}
          placeholder="Новая задача"
        />
        <button onClick={handleAdd}>Добавить задачу</button>
      </div>

      <div>
        <input
          value={filter}
          onChange={e => setFilter(e.target.value)}
          placeholder="Поиск по имени"
        />
        <select value={statusFilter} onChange={e => setStatusFilter(e.target.value)}>
          <option value="all">Все</option>
          <option value="completed">Выполненные</option>
          <option value="active">Активные</option>
        </select>
      </div>

      <ul>
        {filteredTodos.map(todo => (
          <TodoItem
            key={todo.id}
            todo={todo}
            onToggle={handleToggle}
            onDelete={handleDelete}
          />
        ))}
      </ul>
    </div>
  );
};

export default TodoList;

