import { useState } from 'react'
import Navbar from './components/Navbar'
import { v4 as uuidv4 } from 'uuid';

function App() {

  const [todo, setTodo] = useState("")
  const [todos, setTodos] = useState([])

  const handleEdit =(e,id)=>{
    let t =todos.filter(i=>i.id === id)
    setTodo(t[0].todo)
    let newTodos =todos.filter(item=>{
      return item.id !==id
     });
     setTodos(newTodos)

  }

  const handleDelete =(e, id)=>{
     let newTodos =todos.filter(item=>{
      return item.id !==id
     });
     setTodos(newTodos)
    
  }
  const handleAdd =()=>{
    setTodos([...todos, {id: uuidv4(), todo, isCompleted:false}])
    setTodo("")
    console.log(todos)

  }
  const handleChange =(e)=>{
    setTodo(e.target.value)
  }

  const handleCheckbox = (e) => {
   let id = e.target.name;
   let index = todos.findIndex(item=>{
    return item.id == id;
   })
   let newTodos =[...todos];
   newTodos[index].isCompleted =!newTodos[index].isCompleted;
   setTodos(newTodos)
    
  }
  

  return (
    <>
    <Navbar />
     <div className="container mx-auto my-5 p-5 rounded-l bg-violet-300 min-h-[80vh]">
      <div className="addtodo my-5">
        <h2 className='font-bold '>Add a Todo</h2>
        <input onChange={handleChange} value={todo} type="text" className='w-1/2' />
        <button onClick={handleAdd} className='font-bold bg-violet-600 hover:bg-violet-900 p-2 py-0.5 text-white rounded-lg mx-4 '>Save</button>
      </div>
        <h2 className='text-xl font-bold'>Your Todos</h2>
        <div className="todos">
          {todos.length ===0 && <div className='my-4 font-bold text-2xl text-red-700' >No Todos To Display</div>}
          {todos.map(item=>{
  
          return <div key={item.id} className="todo flex w-1/3 justify-between my-3">
            <div className="flex gap-5">
            <input name={item.id} onChange={handleCheckbox} type="checkbox" value={todo.isCompleted} />
            <div className={item.isCompleted?"line-through":""}>{item.todo}</div>
            </div>
            <div className="buttons">
              <button onClick={(e)=>handleEdit(e,item.id)} className='font-bold bg-violet-600 hover:bg-violet-900 p-2 py-0.5 text-white rounded-lg mx-2 '>Edit</button>
              <button onClick={(e)=>{handleDelete(e, item.id)}} className='font-bold bg-violet-600 hover:bg-violet-900 p-2 py-0.5 text-white rounded-lg  '>Delete</button>
            </div>
          </div>
            })}
        </div>
     </div>
    </>
  )
}

export default App
