import { useState } from "react";
import MyInput from "./components/Input/Input";
import List from "./components/List/List";
import { mockData } from "./utils/getMockData";
import type { TTodo } from "./types/TodoTypes";

function App() {
  const [todos, setTodos] = useState<TTodo[]>(mockData);

  const addTodoToArr = (todo: TTodo) => {
    setTodos(prev => [...prev, todo]);
  };

  const deleteTodo = (id: number) => {
    setTodos(prev => prev.filter(todo => todo.id !== id));
  };

  return (
    <div className="app">
      <List arr={todos} onDeleteTodo={deleteTodo}/>
      <MyInput arr={todos} addTodoToArr={addTodoToArr}/>
    </div>
  )
}

export default App