import React from 'react';
import {TodoList} from './TodoList';
import {TodoForm} from './TodoForm';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import {updateTodo, addTodo, removeTodo} from './store-synchrones/todos.actions';

export class TodoContainer extends React.Component {
  
  constructor(props) {
    super(props);
    
    this.updateTodo = this.updateTodo.bind(this);
    this.addTodo = this.addTodo.bind(this);
    this.removeTodo = this.removeTodo.bind(this);
  }
  
  addTodo (title) {
    this.props.addTodo(title);
  }
  
  removeTodo () {
    this.props.removeTodo();
  }
  
  updateTodo (todo) {
    this.props.updateTodo(todo);
  }
  
  componenentDidMount () {
    this.props.loadTodos();
  }
  
  render () {
    return (
      <div>
          <TodoForm addTodo={this.addTodo} removeTodo={this.removeTodo}/>
          <TodoList todos={this.props.todos} updateTodo={this.updateTodo}/>
      </div>
    );
  }
}

TodoContainer.propTypes = {
  todos : PropTypes.arrayOf(
    PropTypes.shape({
      id : PropTypes.number.isRequired,
      title : PropTypes.string.isRequired,
      isDone : PropTypes.bool.isRequired,
    })
  ).isRequired,
  addTodo :PropTypes.func.isRequired,
  updateTodo :PropTypes.func.isRequired,
  removeTodo :PropTypes.func.isRequired,
};

const mapStateToProps = state => ({
  todos: state.todos.list,
});

const mapDispatchToProps = dispatch => ({
  addTodo: title => dispatch(addTodo(title)),
  updateTodo: todo => dispatch(updateTodo(todo)),
  removeTodo: () => dispatch(removeTodo()),
})

export default connect(mapStateToProps, mapDispatchToProps)(TodoContainer)
