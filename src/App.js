import React, { useEffect, useState } from "react";

import 'materialize-css/dist/css/materialize.min.css';
import './App.css'

function TodoForm({ addTodo }) {
  const [value, setValue] = useState("");

  const handleSubmit = e => {
    e.preventDefault();
    if (!value) return;
    addTodo(value);
    setValue("");
  };

  return (
    <div className="container card  " style={{ width: "100%",background:"#0f2027" }}>
      <form onSubmit={handleSubmit}>
        <div class="row card-panel">
          <div class="col s12">
            <div class="row">
              <div class="input-field col s12 pt-5">
                <input
                  type="text"
                  className="input"
                  placeholder="Write Something"
                  value={value}
                  onChange={e => setValue(e.target.value)}
                />

                
                <button
                  class="btn waves-effect waves-light right mt-3"
                  type="submit"
                  name="action"
                >
                  Submit
                </button>
              </div>
            </div>
          </div>
        </div>
      </form>
    </div>
  );
}

export default function App() {
  const [todos, setTodos] = useState([
    { text: "Ok this is a todo Project", isCompleted: false },
    { text: "Todo Project bois", isCompleted: false },
    { text: "THis is My app", isCompleted: false }
  ]);
  const [value, setValue] = useState("");
  const addTodo = text => {
    const newTodos = [...todos, { text }];
    setTodos(newTodos);
  };
  const removeTodo = index => {
    const newTodos = [...todos];
    newTodos.splice(index, 1);
    setTodos(newTodos);
  };

  const completeTodo = index => {
    const newTodos = [...todos];
    newTodos[index].isCompleted = true;
    setTodos(newTodos);
  };
  const Todo = ({ todo, index, completeTodo }) => (
   <div className="row cyan darken-4 card-panel  grey draken-2">
   <div className="col s10  ">
    
      <div
        className=" col s6 white-text center"
        style={{ textDecoration: todo.isCompleted ? "line-through" : "" }}
      >
        {todo.text}
      </div>

      
        <div className="col s6">
      <button
        className="btn-small  light-blue accent-4"
        onClick={() => completeTodo(index)}
      >
        Complete
      </button>
<div className="col s6">
      <button
        className="btn  blue-grey darken-3"
        onClick={() => removeTodo(index)}
      >
        Delete
      </button>
      </div>
</div>
    
    </div>
    </div>

  );
  return (
    <div className="App ">
      <div className="container ">
        <TodoForm addTodo={addTodo} />
        <div className="container ">
          

              
                {todos.map((todo, index) => (
                  <Todo
                    key={index}
                    index={index}
                    todo={todo}
                    completeTodo={completeTodo}
                    removeTodo={removeTodo}
                  />
                ))}
              
           
        </div>
      </div>
    </div>
  );
}
