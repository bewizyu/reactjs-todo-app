import React, {useState} from 'react';
import {TodoList} from './TodoList';
import TodoContext from './TodoContext';
import {TodoForm} from './TodoForm';

const mockList = [
  {
    id: 1,
    title: 'Faire un truc',
    isDone: false,
  }, {
    id: 2,
    title: 'Faire un second truc',
    isDone: false,
  }, {
    id: 3,
    title: 'Faire un troisieme truc',
    isDone: false,
  }, {
    id: 4,
    title: 'Faire un quatrieme truc',
    isDone: false,
  },
]

export function TodoContainer() {
  const [todos, setTodos] = useState(mockList);
  
  function addTodo(title) {
    setTodos([...todos, {
        id: todos.length + 1,
        title,
        isDone: false
      }
      ],
    )
  }
  
  function removeTodos() {
    setTodos([])
  }
  
  function updateTodo(todo) {
    // Find todo to update in the todos list
    const updateTodo = todos.find(item => item.id === todo.id);
    updateTodo.isDone = !updateTodo.isDone;
    setTodos([...todos.filter(item => item.id !== todo.id), updateTodo].sort((a, b) => a.id - b.id));
  }
  
  return (
    <TodoContext.Provider value={{
      todos,
      addTodo,
      removeTodos,
      updateTodo,
    }}>
      <div>
        <TodoForm />
        <TodoList />
      </div>
    </TodoContext.Provider>
  );
}
