import React, { forwardRef } from 'react'

const Input = forwardRef(function Input({label, textarea, ...props},ref) {
  return (
    <div className='flex flex-col gap-1 my-4'>
        <label className='text-sm uppercase font-bold text-stone-600'>{label}</label>
        {textarea ? <textarea ref={ref} className='w-full bg-stone-200 p-1 border-b-2 border-stone-400  rounded-sm text-stone-600 focus:outline-none focus:border-stone-600 ' {...props}/> : <input ref={ref} className='w-full  border-stone-400 h-10 bg-stone-200 p-1 border-b-2  rounded-sm text-stone-600 focus:outline-none focus:border-stone-600 ' {...props}/>}
    </div>
  )
})

export default Input
