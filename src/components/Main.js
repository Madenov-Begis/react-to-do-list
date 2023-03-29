import React from 'react';
import { useState, useRef } from "react"
import './Main.css'

function Main() {
    const input = useRef(null)
    const [list, setList] = useState([])

    function addTask(e) {
        e.preventDefault()
        if(input.current.value.trim().length === 0){
            alert("Add Task!")
            return;
        }
        const task = {
            text: input.current.value,
            id: Math.random().toString()   
        }
        setList([task, ...list])
        input.current.value=""
    }

    function deleteTask(taskID) {
        setList(list => {
            const deletedTask = list.filter((item) => item.id !== taskID);
            return deletedTask
        })
    }


    return(
        <main>
            <form onSubmit={addTask} className='toDoList'>
                <h2>To Do List</h2>
                <div className='input'>
                    <input type="text" ref={input} />
                    <button type='submit' className='button'>ADD</button>
                </div>
                {list.map((item) => {
                    return(
                        <p key={item.id}>
                            {item.text}                   
                            <a onClick={() => {
                                deleteTask(item.id)
                            }} 
                                className="button">Del
                            </a>
                        </p>
                    )
                })}
            </form>
        </main>
    )
}

export default Main