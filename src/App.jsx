import { useEffect, useState,useReducer } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
//import './App.css'
import axios from 'axios'
import useSWR from 'swr'
import { baseURL } from '../api'
import './styles/todolist.css'
import './styles/header.css'
import { addTodo } from '../api'
import './styles/modal.css'
import TodoList from './components/TodoList'


const fetcher=async()=>{
  try {
    const {data} =await axios.get(baseURL)
     return data;
    
  } catch (error) {
     throw <h1>{error.message} Has Ocurred   </h1>
    
  }
}


function App() {

  
  
  const handleSubmit=async(e)=>{
    e.preventDefault()
    await addTodo({
      id:Date.now(),
      text:newTodo,
      title:"Hello world"
    })
    

  }
  const [newTodo, setNewtodo] = useState('')
  const {data,error}=useSWR(baseURL,fetcher,{
    refreshInterval:10000
  })

  
const reducer=async(state,action)=>{
    if(action.type==='Add-Todo'){
      await addTodo({
        id:Date.now(),
        text:newTodo,
        title:"Hello world"
      })
    }
  }

  const [todo,dispatch]=useReducer(reducer,data||[])


    if(error){
      return <h1 className='center'>And Error has occurred please refresh the page</h1>
    }

    if(!data){
      return <h1 className='center'>Loading</h1>
    }
  
  
  



  return (
    <>
    <form onSubmit={handleSubmit} className='center form'>
      
      <input
       value={newTodo}
       onChange={(e)=>setNewtodo(e.target.value)}
       
      
      className='input' type="text" placeholder='Add New todo' />
      <button
      onClick={()=>dispatch('Add-Todo')} 
       className='btn center'>Add</button>
    </form>
    <div className='center'>
      {data.map((todo)=>(
        <TodoList key={todo.id} todo={todo}/>
      ))}
    </div>
    </>
  )
}

export default App
