import React from 'react';

const TodoItem = (props) => {

    return (
        <div>
            {props.todos && props.todos.map((todo, id) => (
                <div key={id} className="items" onClick={() => props.deleteItem(todo.id)}>
                    <p>{todo.text}</p>
                </div>
            ))}
        </div>
    );
};

export default TodoItem;