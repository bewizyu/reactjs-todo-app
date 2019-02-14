import React, {useContext} from 'react';
import {Checkbox, List, ListItem} from 'material-ui';
import TodoContext from './TodoContext';

export function TodoList() {
  const todoContext = useContext(TodoContext);
  if (todoContext.todos.length === 0) {
    return <div>Vous n'avez pas de todo</div>
  }
  return (
    <List>
      {todoContext.todos.map((todo) => {
        return <ListItem key={todo.id}
                         primaryText={todo.title}
                         style={todo.isDone ? {textDecoration: 'line-through'} : undefined}
                         leftCheckbox={<Checkbox checked={todo.isDone}
                                                 onCheck={() => todoContext.updateTodo(todo)} />} />
      })
      }
    </List>
  );
}
