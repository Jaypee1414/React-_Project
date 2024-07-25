import React from 'react'
import Project from '../assets/no-projects.png'
import Button from './Button'
function NoSelectedProject({handleOpenModal}) {
  return (
    <div className='mt-24 text-center w-2/3'>
      <img src={Project} alt="" className='object-contain mx-auto w-16 h-16'/>
      <p className='text-xl font-bold text-stone-500 my-4'>No Project Selected</p>
      <p className='text-stone-400 mb-4'>Select a project or get new started</p>
      <p className='mt-8'>
        <Button handleOpenModal={handleOpenModal}>Create new project</Button>
      </p>
    </div>
  )
}

export default NoSelectedProject
