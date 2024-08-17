import { useState, useEffect } from "react";
import Navbar from "./components/Navbar";
import { v4 as uuidv4 } from "uuid";

function App() {
  const [todo, setTodo] = useState("");
  const [todos, setTodos] = useState([]);
  const [showFinished, setshowFinished] = useState()

  const SaveToLS = (params) => {
    localStorage.setItem("todos", JSON.stringify(todos));
  };

  const ToggleFinish =(e) => {
    setshowFinished(!showFinished)
    
  }
  

  useEffect(() => {
    let todoString = localStorage.getItem("todos");
    if (todoString) {
      let todos = JSON.parse(localStorage.getItem("todos"));
      setTodos(todos);
    }
  }, []);

  const handleEdit = (e, id) => {
    let t = todos.filter((i) => i.id === id);
    setTodo(t[0].todo);
    let newTodos = todos.filter((item) => {
      return item.id !== id;
    });
    setTodos(newTodos);
    SaveToLS();
  };

  const handleDelete = (e, id) => {
    let newTodos = todos.filter((item) => {
      return item.id !== id;
    });
    setTodos(newTodos);
    SaveToLS();
  };
  const handleAdd = () => {
    setTodos([...todos, { id: uuidv4(), todo, isCompleted: false }]);
    setTodo("");
    SaveToLS();
  };
  const handleChange = (e) => {
    setTodo(e.target.value);
  };

  const handleCheckbox = (e) => {
    let id = e.target.name;
    let index = todos.findIndex((item) => {
      return item.id == id;
    });
    let newTodos = [...todos];
    newTodos[index].isCompleted = !newTodos[index].isCompleted;
    setTodos(newTodos);
    SaveToLS();
  };


  return (
    <>
      <Navbar />
      <div className="container mx-auto my-5 p-5 rounded-lg bg-violet-300 min-h-[80vh] w-1/2">
      <h1 className=" text-2xl font-bold text-amber-900 font-serif text-center">Tasky- Organize your tasks at an instant easily!</h1>
        <div className="addtodo my-5 flex flex-col gap-3">

          <h2 className="font-bold ">Create a new Todo</h2>
          <input
            onChange={handleChange}
            value={todo}
            type="text"
            className="w-full rounded-lg py-1 px-5"
            />
          <button
            onClick={handleAdd} disabled={todo.length<3}
            className="font-bold bg-violet-600 hover:bg-violet-900 p-2 py-0.5 text-white rounded-full disabled:text-gray-400"> Save </button>
        </div>

        <input onChange={ToggleFinish} type="checkbox" checked={showFinished} /> Show Finished 
        <h2 className="text-xl font-bold">Your Todos</h2>
        <div className="todos">
          {todos.length === 0 && 
            <div className="my-4 font-bold text-2xl text-red-700">
              No Todos To Display
            </div>
          }

          {todos.map((item) => {
            
            return (showFinished || !item.isCompleted) && 
            <div key={item.id}
            className="todo flex w-1/2 justify-between my-3"
            >
                <div className="flex gap-5">
                  <input
                    name={item.id}
                    onChange={handleCheckbox}
                    type="checkbox"
                    checked={todo.isCompleted}
                    />
                  <div className={item.isCompleted ? "line-through text-gray-600" : ""}>
                    {item.todo}
                  </div>
                </div>
                <div className="buttons flex h-full">
                  <button
                    onClick={(e) => handleEdit(e, item.id)}
                    className="font-bold bg-violet-600 hover:bg-violet-900 p-2 py-0.5 text-white rounded-lg mx-2 "
                    >
                    Edit
                  </button>
                  <button
                    onClick={(e) => {
                      handleDelete(e, item.id);
                    }}
                    className="font-bold bg-violet-600 hover:bg-violet-900 p-2 py-0.5 text-white rounded-lg  "
                    >
                    Delete
                  </button>
                </div>
              </div>
          })}
        </div>
      </div>
    </>   );

}

export default App;
