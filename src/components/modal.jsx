// Modal.js
import React, { useEffect, useState } from 'react';
import Modal from 'react-modal';
import { updateTodo } from '../../api';


Modal.setAppElement('#root'); // Set the root element for accessibility

const EditModal = ({ isOpen, closeModal, initialText, onSave ,todo}) => {
  const [text, setText] = useState(initialText);
  const [refresh,setRefresh]=useState(false)


  useEffect(()=>{
    setRefresh(true)

  },[text])
  
  const handleSave =async () => {
    await updateTodo({
      id:todo.id,
      text:text,
      title:todo.title
    })
  };

  return (
    <div className='modal'>


    <Modal isOpen={isOpen} onRequestClose={closeModal} contentLabel="Edit Text Modal">
      <h2 >Edit Text</h2>
      <textarea className='text-area'
        value={text}
        onChange={(e) => setText(e.target.value)}
        placeholder="Enter updated text"
      />
      <button className='btn' onClick={handleSave}>Save</button>
      <button className='btn' onClick={closeModal}>Close</button>
    </Modal>
    </div>
  );
};

export default EditModal;
