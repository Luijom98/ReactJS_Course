function TodoItem(props) {
  const completedTodo = {
    fontStyle: "italic",
    color: "#cdcdcd",
    textDecoration: "line-through"
  };
  return (
    <div className="todo-item">
      <input
        type="checkbox"
        checked={props.item.completed}
        onChange={() => props.handleChange(props.item.id)}
      />
      <p style={props.item.completed ? completedTodo : null}>
        {props.item.text}
      </p>
    </div>
  );
}

export default TodoItem;
