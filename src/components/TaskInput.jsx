import React from 'react'
import { useState } from 'react'
function TaskInput({onAdd}) {
  
    const [newInput, setNewInput] =useState("");
    const handlInput = (event) =>{
        setNewInput(event.target.value)
        
    }
    const handlClick = () =>{
        onAdd(newInput)
        setNewInput('')
    }
  return (
    <div>
        <input type="text" className="w-64 px-2 py-1 rounded-sm bg-stone-200" value={newInput} onChange={handlInput}/>

        <button onClick={handlClick} className=" ml-4 text-stone-800 hover:text-stone-950">Add Task</button>
    </div>
  )
}

export default TaskInput
