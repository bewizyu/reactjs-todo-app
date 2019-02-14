import React, {useContext, useState} from 'react';
import {FlatButton, TextField} from 'material-ui';
import AddIcon from 'material-ui/svg-icons/content/add';
import DeleteIcon from 'material-ui/svg-icons/action/delete';
import TodoContext from './TodoContext';

export function TodoForm() {
  const [title, setTitle] = useState('');
  const todoContext = useContext(TodoContext);
  
  function handleChange(event) {
    setTitle(event.target.value);
  }
  
  function handleAddClick() {
    if (title) {
      todoContext.addTodo(title);
      setTitle('');
    }
  }
  
  return (
    <div>
      <TextField
        value={title}
        floatingLabelText="Saisir un todo"
        onChange={handleChange}
      />
      <FlatButton
        icon={<AddIcon />}
        onClick={handleAddClick}
      />
      <FlatButton
        icon={<DeleteIcon />}
        onClick={todoContext.removeTodos}
      />
    </div>
  );
}
