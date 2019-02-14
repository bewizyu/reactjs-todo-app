import React from 'react';
import {FlatButton, TextField} from 'material-ui';
import AddIcon from 'material-ui/svg-icons/content/add';
import DeleteIcon from 'material-ui/svg-icons/action/delete';
import TodoContext from './TodoContext';

export class TodoForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      value: '',
    };
    this.handleAddClick = this.handleAddClick.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }
  
  handleChange = (event) => {
    this.setState({
      value: event.target.value,
    });
  };
  
  handleAddClick(addTodo) {
    if (this.state.value) {
      addTodo(this.state.value);
      this.setState(() => ({
        value: '',
      }));
    }
  }
  
  render() {
    return (
      <TodoContext.Consumer>
        {
          ({addTodo, removeTodos}) => {
            return (
              <div>
                <TextField
                  value={this.state.value}
                  floatingLabelText="Saisir un todo"
                  onChange={this.handleChange}
                />
                <FlatButton
                  icon={<AddIcon />}
                  onClick={() => this.handleAddClick(addTodo)}
                />
                <FlatButton
                  icon={<DeleteIcon />}
                  onClick={() => removeTodos()}
                />
              </div>
            )
          }
        }
      </TodoContext.Consumer>
    );
  }
}
