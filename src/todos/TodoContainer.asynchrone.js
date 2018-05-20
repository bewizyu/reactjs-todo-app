import React from 'react';
import {TodoList} from './TodoList';
import {TodoForm} from './TodoForm';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import {updateTodo, addTodo, removeTodo, loadTodos} from './store-asynchrones/todos.actions';

export class TodoContainerAsynchrone extends React.Component {
  
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
  
  componentDidMount () {
    this.props.loadTodos();
  }
  
  displayTodoList () {
    if (this.props.loading) {
      return <div>loading ...</div>;
    }
    
    return  <TodoList todos={this.props.todos} updateTodo={this.updateTodo}/>;
  }
  
  render () {
    return (
      <div>
          <TodoForm addTodo={this.addTodo} removeTodo={this.removeTodo}/>
        { this.displayTodoList() }
      </div>
    );
  }
}

TodoContainerAsynchrone.propTypes = {
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
  loadTodos :PropTypes.func.isRequired,
  loading : PropTypes.bool.isRequired,
};

const mapStateToProps = state => ({
  todos: state.todos.list,
  loading : state.todos.loading,
});

const mapDispatchToProps = dispatch => ({
  addTodo: title => dispatch(addTodo(title)),
  updateTodo: todo => dispatch(updateTodo(todo)),
  removeTodo: () => dispatch(removeTodo()),
  loadTodos: () => dispatch(loadTodos()),
})

export default connect(mapStateToProps, mapDispatchToProps)(TodoContainerAsynchrone)
