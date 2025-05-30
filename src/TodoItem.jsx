import { memo } from 'react';

const TodoItem = memo(function TodoItem({ todo, onToggle, onDelete }) {
  return (
    <li>
      <strong>{todo.text}</strong>
      {todo.completed ? (
        <strong> Задача выполнена!</strong>
      ) : (
        <button onClick={() => onToggle(todo.id)}>Выполнить</button>
      )}
      <button onClick={() => onDelete(todo.id)}>Удалить</button>
    </li>
  );
});

export default TodoItem;
