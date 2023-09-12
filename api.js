import React from "react"

export const baseURL='http://localhost:4000/todos'


export const addTodo = async (todo) => {
    try {
      const res = await fetch(baseURL, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(todo),
      });
  
      if (!res.ok) {
        throw new Error('Failed to add todo');
      }
  
      const newTodo = await res.json(); // Parse the response body as JSON
      return newTodo;
    } catch (error) {
      throw error;
    }
  };


export const deleteTodo=async(id)=>{
    await fetch(`${baseURL}/${id}`,{
        method:"DELETE"
    })

}


export const updateTodo = async (todo) => {
    try {
      const response = await fetch(`${baseURL}/${todo.id}`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(todo), // Send the entire 'todo' object as the updated data
      });
  
      if (!response.ok) {
        throw new Error('Failed to update todo');
      }
  
      return response.json();
    } catch (error) {
      throw error;
    }
  };
  

