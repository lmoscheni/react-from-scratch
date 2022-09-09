import { useState } from "react";

import Button from "./components/Button"
// import Counter from "./components/Counter"

function Todo(props) {
  const { title, content, check, id, handleCheckTodo } = props;
  return <div className="w-60 h-60 rounded-md shadow-md bg-slate-300">
    <div className="w-full p-3 flex flex-row justify-around">
      <span># {id}</span>
      <span className="text-xl">{title}</span>
      <input type="checkbox" value={check} onClick={handleCheckTodo} />
    </div>
    
    <p className="p-3">{content}</p>
  </div>
}

function App() {
  // te permite crear estado interno en el componente, y ante cualquier cambio en el estado interno del componente, react vuelve a renderizar el componente (vuelve a ejecutar la funcion/componente)
  const [todos, setTodos] = useState([]);
  // const [todos, setTodos] = useState([
  //     {
  //         "id": 0,
  //         "title": "hola",
  //         "content": "mundo",
  //         "check": false
  //     },
  //       {
  //         "id": 1,
  //         "title": "hola",
  //         "content": "mundo",
  //         "check": false
  //     },  {
  //         "id": 2,
  //         "title": "hola",
  //         "content": "mundo",
  //         "check": false
  //     }
  // ]);
  const [ newTodoTitle, setNewTodoTitle ] = useState("");
  const [ newTodoContent, setNewTodoContent ] = useState("");


  const handleCheckTodo = (todos, todo) => {
    const updatedTodos = todos.map(t => {
      if (t.id === todo.id) {
        return {...todo, check: !todo.check}
      } else { 
        return todo
      }
    })

    setTodos(updatedTodos);
  }

  const handleCreate = () => {
    if (newTodoTitle && newTodoContent) {
      setTodos([...todos, { id:todos.length, title: newTodoTitle, content: newTodoContent, check: false }])
      setNewTodoTitle("")
      setNewTodoContent("");
    } else {
      alert("No cargaste los datos!");
    }
  };

  console.log("rendering App", {todos, newTodoTitle, newTodoContent });

  // te permite crear estado interno en el componente, y ante cualquier cambio en el estado interno del componente, react vuelve a renderizar el componente (vuelve a ejecutar la funcion/componente)
  // const [counter, setCount] = useState(0);

  return (
    <div className="w-screen min-h-screen px-10 bg-slate-100">
      <nav className="w-full py-3 flex flex-row justify-between">
        <span className="italic font-bold text-indigo-500 hover:text-indigo-600">Todo APP</span>
      </nav>

      <div className="w-full flex justify-center gap-2">
        <div className="w-60 h-60 p-5 flex flex-col justify-center shadow-sm rounded-md gap-3 bg-slate-300">
          <p className="p-1 text-sm rounded-md bg-slate-100">create a new todo please...</p>
          <input className="p-1 shadow-sm rounded-md" value={newTodoTitle} placeholder="title" onChange={(e) => {
            setNewTodoTitle(e.target.value)
          }} />

          <input className="p-1 shadow-sm rounded-md" value={newTodoContent} placeholder="content" onChange={(e) => {
            setNewTodoContent(e.target.value)
          }} />

          <Button onClick={handleCreate}>Crear</Button>
        </div>
      </div>
    
      <div className="p-10 flex flex-row flex-wrap gap-3 justify-center">
        { todos.length < 1 ? <div> Whitout todo's </div> : null}
        {
          todos.map(todo => <Todo id={todo.id} title={todo.title} content={todo.content} check={todo.check} handleCheckTodo={() => handleCheckTodo(todos, todo)} />)
        }
      </div>
    
      {/* <Counter count={counter} />
      
      <Button onClick={() => setCount(counter + 1)}>incrementar</Button>
      <Button onClick={() => setCount(counter - 1)}>decrementar</Button> */}
    </div>
  );
}

export default App;
