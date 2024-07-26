import React from 'react'
import Task from './Task'

function SelectedProject({project,handleDelete, onAdd, taskProp}) {
    const dateFormat = new Date(project.enteredDuedate).toLocaleDateString('en-US',{
        year: 'numeric',
        month: 'short',
        day: 'numeric'
    })

  return (
    <div className="w-[35rem] mt-16">
        <header className='pb-4 mb-4 border-b-2 border-stone-300'>
            <div className='flex items-center justify-between'>
                <h1 className='text-3xl font-bold text-stone-600 mb-2'>{project.enteredTitle}</h1>
                <button onClick={handleDelete} className='text-stone-600 hover:text-stone-950'>Delete</button>
            </div>
            <p className='mb-4 text-stone-400'>{dateFormat}</p>
            <p className='text-stone-600 whitespace-pre-wrap'>{project.enteredDescribtion}</p>
        </header>
        <Task onAdd={onAdd} taskProp={taskProp}/>
    </div>
  )
}

export default SelectedProject
