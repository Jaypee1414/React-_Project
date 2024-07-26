import React from 'react'
import { useState, useRef } from 'react'
import Modal from './Modal';
function TaskInput({onAdd}) {
    const dialog =useRef()
    const [newInput, setNewInput] =useState("");
    const handlInput = (event) =>{
        setNewInput(event.target.value)
        
    }
    const handlClick = () =>{
      if(newInput !== ''){
        onAdd(newInput)
        setNewInput('')
      }
      dialog.current.open();
    }
  return (
    <div>
        {newInput === '' && <Modal ref={dialog} closeModalName="Close">
        <p className="text-stone-600 mb-4">Cannot Add Empty Task</p>
        <p className="text-stone-600 mb-4">Try Again</p>
        </Modal>}
        <input type="text" className="w-64 px-2 py-1 rounded-sm bg-stone-200" value={newInput} onChange={handlInput}/>
        <button onClick={handlClick} className=" ml-4 text-stone-800 hover:text-stone-950">Add Task</button>
    </div>
  )
}

export default TaskInput
