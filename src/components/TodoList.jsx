import React, { useEffect } from 'react'
import { useState } from 'react'
//import {useRouter} from 'router/navigation'
import {MdDeleteOutline} from 'react-icons/md'
import {GrRefresh} from 'react-icons/gr'
import { deleteTodo, updateTodo } from '../../api'
import EditModal from './modal'
const TodoList = ({todo}) => {
 // const [shouldRefresh,setShouldRefresh]=useState(false)
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [editedText, setEditedText] = useState(''); // State to store edited text
  
  const closeModal = () => {
    setIsModalOpen(false);
   // setShouldRefresh(true)
    
  };

  

   


  const handleSave =async () => {
    await updateTodo({
      id:todo.id,
      text:editedText,
      title:todo.title
    })
    

     // Save the edited text
    // You can make an API call here to update the text on the server if needed.
  };
 const handleDelete=async(id)=>{
  await deleteTodo(
    id
  )
  

 }
  return (
    <div key={todo.id} className='todo-list'>
        <div className='title '>

        <h3>Title: {todo.title}</h3>

        <div className='react-icons' >
          
         <div className='update-icon'>

        <GrRefresh size={25} className='update-icon'   />
        
        <div className='modal' onClick={()=>setIsModalOpen(true)}>
        <EditModal todo={todo} isOpen={isModalOpen}
        closeModal={closeModal}
        initialText={todo.text}
        
        
        // Pass the current text as initialText
        onSave={handleSave} />
        </div>
         </div>

          

        <MdDeleteOutline onClick={()=>handleDelete(todo.id)}  className='delete-icon' size={25}/>

        </div>
        </div>
        <div className='todo-text '>
            {todo.text}
        </div>


    </div>
  )
}

export default TodoList