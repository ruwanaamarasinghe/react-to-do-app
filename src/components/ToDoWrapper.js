import React, {useState} from "react"
import ToDoForm from "./ToDoForm";
import {v4 as uuidv4} from 'uuid';
uuidv4();

export const ToDoWrapper = () => {
    const [todos, setTodos] = useState([])

    const addTodo = todo => {
        setTodos([...todos, {id: uuidv4(), task: todo,
            completed:false, isEditing:false
        }])
        console.log(todos)
    }
    return (
        <div className="TodoWrapper">
            <ToDoForm addTodo={addTodo}/>
        </div>
    )
}

export default ToDoWrapper;