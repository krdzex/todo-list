import React, { useState } from "react";
import TodoItem from "./TodoItem"
const TodoList = () => {
    const [inputText, setInputText] = useState("");
    const [todos, setTodos] = useState([]);

    const onChangeHandler = (e) => {
        setInputText(e.target.value);
    }
    const onSubmitHandler = (e) => {
        e.preventDefault();
        if (inputText !== "") {
            setTodos([
                ...todos, {
                    id: new Date().getTime(),
                    text: inputText
                }
            ])
        }
        setInputText("");
    }

    window.onbeforeunload = function () {
        localStorage.setItem("todoTask", JSON.stringify(todos));
    }

    window.onload = function () {
        const data = JSON.parse(localStorage.getItem("todoTask"));
        if (data !== null) {
            setTodos(data);
        }
    }


    const deleteItem = (id) => {
        const removeItem = [...todos].filter(todo => todo.id !== id)
        setTodos(removeItem);
    }

    return (<div>
        <form onSubmit={onSubmitHandler}>
            
            <input value={inputText} type="text" placeholder="Add your task" onChange={onChangeHandler}></input>
            <button className="button" disabled={inputText === ""}>Add</button>
            {inputText === "" &&(<span><br/>Task can't be empty :)</span>)}
            <TodoItem deleteItem={deleteItem} todos={todos} />
        </form>
    </div>
    );
}

export default TodoList;