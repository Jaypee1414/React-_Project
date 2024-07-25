import React from 'react'
import { useRef, useImperativeHandle, forwardRef } from 'react'
import { createPortal } from 'react-dom'
import Button from './Button.jsx'

const Modal = forwardRef(function Modal({children, closeModalName },ref) {

    const dialog = useRef()

    useImperativeHandle(ref, ()=>{
        return {
            open(){
                dialog.current.showModal()
            }
        }
    })
  return createPortal(
    <dialog ref={dialog} className="backdrop:bg-stone-900/90 p-4 rounded-md shadow-md">
      {children}
      <form>
        <Button>{closeModalName}</Button>
      </form>
    </dialog>, 
    document.getElementById('modal-root')
  )})

export default Modal
