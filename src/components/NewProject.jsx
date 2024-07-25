import React, { useRef } from 'react'
import Input from './Input'
import Modal from './Modal'


function NewProject({addProject}) {

  const modal = useRef()
  const title = useRef()
  const describtion = useRef()
  const duedate = useRef()


  const handleSave = () =>{
    const enteredTitle = title.current.value
    const enteredDescribtion = describtion.current.value
    const enteredDuedate = duedate.current.value

    if(enteredTitle.trim() === '' || enteredDescribtion.trim() === '' || enteredDuedate.trim() === ''){
      modal.current.open()
      return;
    }

    addProject({enteredTitle,enteredDescribtion,enteredDuedate })
  }
  return (
    <>
    {<Modal ref={modal} closeModalName="Close"> 
      <h2 className="text-xl font-bold text-stone-700 my-4">Error Message</h2>
      <p className="text-stone-600 mb-4">Make sure you enter a value in input</p>
      <p className="text-stone-600 mb-4">Try Again</p>
    </Modal>}
    <div className='w-[35rem] mt-16'>
      <menu className='flex items-center justify-end gap-4 my-4'>
        <li><button className='text-stone-800 hover:text-stone-950'>Cancel</button></li>
        <li><button className='px-5 py-2 rounded-md text-stone-100 bg-stone-800 hover:bg-stone-900' onClick={handleSave}>Save</button></li>
      </menu>
      <div>
        <Input ref={title} type="text   " label="Title"/>
        <Input ref={describtion} label="Description" textarea="textarea"/>
        <Input ref={duedate} type="date" label="Due Date" />
      </div>
    </div>    
    </>              
  )
}

export default NewProject
