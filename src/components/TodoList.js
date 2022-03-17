const TodoList = ({ todos, onUpdateTodo, removeTodo }) => {
  
    const changeStyle = (todo) => {
        onUpdateTodo(todo);
    };
    return (
        <ol className="grouplists">
            {todos.map((todo) => (
                <div>
                    {todo.completed ? (
                        <li 
                            key={todo.id}
                            className="list card-complete"
                            >
                            <text style={{background: "#202020"}}>{todo.title}</text>
                            <hr className="line"/>
                            <button
                                style={{marginRight: "144px"}}
                                className="delete"
                                onClick={() => changeStyle(todo)}
                            >
                                Mark as incomplete
                            </button>
                            <button className="delete" onClick={() => removeTodo(todo.id)}>
                                Delete
                            </button>
                        </li>) : (
                        <li 
                            key={todo.id}
                            className="list card-incomplete"
                            >
                            <text className="list-title">{todo.title}</text>
                            <hr className="line"/>
                            <button
                                className="list-check todo-button"
                                onClick={() => changeStyle(todo)}
                            >
                                Mark as completed
                            </button>
                            <button className="delete" onClick={() => removeTodo(todo.id)}>
                                Delete
                            </button>
                        </li>)}
                </div>
            ))}
        </ol>
    );
};

export default TodoList;