import { useState } from 'react'
import Start from './components/Start'
import Todos from './components/Todos'
import AddTodo from './components/AddTodo'
import EditTodo from './components/EditTodo'

function App() {
  const [showAddTodo, setShowAddTodo] = useState(false)
  const [showEditTodo, setShowEditTodo] = useState(false)
  const [showTodoList, setShowTodoList] = useState(false)
  const [clickedTodo, setClickedTodo] = useState('');
  const [todos, setTodos] = useState([
    {
      id: 1,
      text: 'Todo 1',
      day: 'Oct 11th, 4pm',
      status: 'Not started'
    },
    {
      id: 2,
      text: 'Todo 2',
      day: 'Oct 12th, 4pm',
      status: 'Not started'
    },
    {
      id: 3,
      text: 'Todo 3',
      day: 'Oct 13th, 4pm',
      status: 'Not started'
    }
  ])

  //add Todo
  const addTodo = (todo) => {
    const id = Math.floor(Math.random() * 10000) + 1
    const newTodo = { id, ...todo }
    setTodos([...todos, newTodo])
    setShowAddTodo(!showAddTodo)
    !showTodoList && setShowTodoList(true)
  }

  //edit Todo
  const editTodo = (id, editedTodo) => {
      console.log("id: "+id)
      setClickedTodo(todos.find((todo) => todo.id === id))
      console.log(clickedTodo)
      setTodos(todos.map((todo) => todo.id === id
        ? { id, ...editedTodo} : todo))
      setShowEditTodo(!showEditTodo)
  }

  /* //delete task
  const deleteTodo = (id) => {
    setTodos(todos.filter((todo) => todo.id !== id))
  } */

  return (
    <div className="App">
      <Start onAdd={() => { setShowAddTodo(!showAddTodo) }} showAdd={showAddTodo} />
      {showAddTodo && <AddTodo onAdd={addTodo} />}
      {showEditTodo && <EditTodo todo={clickedTodo} onEdit={editTodo} />}
      {showTodoList && !showEditTodo && <Todos todos={todos} onEdit={(editTodo)} showEdit={showEditTodo}/>}
    </div>
  );
}

export default App;
