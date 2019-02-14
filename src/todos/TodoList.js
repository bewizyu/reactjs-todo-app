import React from 'react';
import {Checkbox, List, ListItem} from 'material-ui';
import TodoContext from './TodoContext';

export function TodoList() {
  return (
    <TodoContext.Consumer>
      {
        ({todos, updateTodo}) => {
          if (todos.length === 0) {
            return <div>Vous n'avez pas de todo</div>
          }
          return (
            <List>
              {todos.map((todo) => {
                return <ListItem key={todo.id}
                                 primaryText={todo.title}
                                 style={todo.isDone ? {textDecoration: 'line-through'} : undefined}
                                 leftCheckbox={<Checkbox checked={todo.isDone}
                                                         onCheck={() => updateTodo(todo)} />} />
              })
              }
            </List>
          );
        }
      }
    </TodoContext.Consumer>
  );
}
