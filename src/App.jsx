import { useState } from 'react'
import TodoTable from './components/todoTable'

import './App.css'

const App = () => {

  const [todo, setTodo] = useState({description: '', date: ''})
  const [todos, setTodos] = useState([])

  const inputChange = (e) => {
    setTodo({
      ...todo,
      [e.target.name]: [e.target.value]
    })    
  }
  
  const addTodo = (e) => {
    setTodos([...todos, todo])
    setTodo({description: '', date: ''}); // Clear todo
  }

  const cleanTodo = () => {
    setTodos([])
  }

  let arrA = [1, 5, 10, 20];
  let arrB = arrA.map(x => x * 2);

  const deleteTodo = (row) => {
    setTodos(todos.filter((todo, index) => index !== row))
  }


  return (
    <>
      <h1>Todo List</h1>
      <input placeholder='description' name='description' value={todo.description} onChange={inputChange} />
      <input placeholder='date' name='date' value={todo.date} onChange={inputChange} />
      <button onClick={addTodo}>add</button>
      <button onClick={cleanTodo}>Clean</button>
      <TodoTable todos={todos} deleteTodo={deleteTodo} />
    </>
  )
}

export default App
