import React, {Component} from 'react';
import './App.css';
import {AppBar} from 'material-ui';
// import TodoContainer from './todos/TodoContainer.synchrone';
import TodoContainer from './todos/TodoContainer.asynchrone';

class App extends Component {
  render() {
    return (
      <div>
        <AppBar title="Todo application"
                iconStyleLeft={{display: 'none'}} />
        <TodoContainer />
      </div>
    );
  }
}

export default App;
