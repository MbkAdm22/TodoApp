function TodoItem({ todo, index, toggleComplete, deleteTodo }) {
  return (
    <li>
      <span
        style={{
          textDecoration: todo.completed ? "line-through" : "none",
          cursor: "pointer",
        }}
        onClick={() => toggleComplete(index)}
      >
        {todo.text}
      </span>
      <button onClick={() => deleteTodo(index)}>❌</button>
    </li>
  );
}
export default TodoItem;
