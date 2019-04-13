import React from "react";
import TodoListItem from '../todo-list-item/todo-list-item';
import './todo-list.css';


const TodoList =({todos, onDeleted, toggleDone, toggleImportant})=> {


    const elements = todos.map((item)=>{
        const {id, ...items} = item;
        return (
            <li key={id} className='list-group-item d-flex justify-content-between align-items-center'>
                <TodoListItem
                    {...items}
                    onDeleted={()=>onDeleted(id)}
                    toggleImportant = {()=>toggleImportant(id)}
                    toggleDone = {()=>toggleDone(id)}
                />
            </li>
        )
    });

    return (
        <div className='mt-4'>
            <ul className='list-group todo-list p-0 '>
                {elements}
            </ul>
        </div>
    )
};

export default TodoList;