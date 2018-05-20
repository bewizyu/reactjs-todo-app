import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import * as serviceWorker from './serviceWorker';
import { combineReducers, createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import {createLogger} from 'redux-logger';
// import {todosReducers} from './todos/store-synchrones/todos.reducer';
import {todosReducers} from './todos/store-asynchrones/todos.reducer';
import thunk from 'redux-thunk';

// Assemblage des différents reducers d'une application
const reducers = combineReducers({
  todos: todosReducers,
});

const logger = createLogger({
  level: 'log',
});

// Création du store
// const store = createStore(reducers, applyMiddleware(logger));
const store = createStore(reducers, applyMiddleware(thunk, logger));

const WrappedApp = () => {
  return (
    <Provider store={store}>
      <MuiThemeProvider>
        <App/>
      </MuiThemeProvider>
    </Provider>
  );
}
ReactDOM.render(<WrappedApp />, document.getElementById('root'));
serviceWorker.unregister();
