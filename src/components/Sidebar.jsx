import {React,useState} from 'react'
import Button from './Button'
function Sidebar({handleOpenModal, projects,selectHandleProject, selectedProjectID}) {

  return (
    <aside className='w-1/3 px-8 py-16 bg-stone-900 text-stone-50 md:w-72  rounded-r-xl'>
        <h2 className=' mb-8 font-bold uppercase md: text-xl text-stone-50'>Your Project</h2>
        <div>
            <Button handleOpenModal={handleOpenModal}>+ Add</Button>
        </div>
        <ul className='mt-6'>
          {projects.map((proj)=>{
            let cssClass = 'w-full text-left px-2 py-1 text-stone-400 rounded-sm my-1 hover:text-stone-200 hover:bg-stone-800'
            return(
              <li key={proj.id}>
                <button onClick={() => selectHandleProject(proj.id)} className={cssClass}>{proj.enteredTitle}</button>
              </li>
            )
          })}
        </ul>
    </aside>
  )
}

export default Sidebar
