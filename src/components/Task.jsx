import React from 'react'
import TaskInput from './TaskInput'

function Task({onAdd, taskProp,handleClearTask}) {
  return (
    <div>
      <h1 className='text-3xl font-bold text-stone-600 mb-2'>Task</h1>
      <div>
        <TaskInput onAdd={onAdd}/>
      </div>
      {taskProp.length === 0 && (<p>This Project does not have any task yet</p>)}
      {
        taskProp.length > 0 && 
      <ul className='p-4 my-8 rounded-md bg-stone-200'>
       {taskProp.map((task)=>{
        return(
            <li key={task.id} className='flex justify-between my-4'>
                <span>{task.text}</span>
                <button className='text-stone-700 hover:text-red-500' onClick={()=> handleClearTask(task.id)}>Clear</button>
            </li>
        )
       })}
      </ul>
      }
    </div>
  )
}

export default Task
