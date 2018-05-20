import {ADD_TODO, LOAD_TODOS, REMOVE_TODO, TODOS_LOADED, UPDATE_TODO} from './todos.actions';

const initialState = {
  list : [],
  loading : false
}

export function todosReducers(state = initialState, action) {
  switch (action.type) {
    case LOAD_TODOS : {
      return {
        ...state,
        loading: true
      }
    }
    case TODOS_LOADED : {
      return {
        ...state,
        loading : false,
        list : action.todos,
      }
    }
    case ADD_TODO : {
      return {
        ...state,
        list: [...state.list, {
          id : state.list.length + 1,
          title : action.title,
          isDone: false
        }]
      }
    }
    case REMOVE_TODO: {
      return {
        ...state,
        list: []
      }
    }
    
    case UPDATE_TODO: {
  
      // Find Todo to update in the todos list
      const updateTodo = state.list.find(item => item.id === action.todo.id);
      updateTodo.isDone = !updateTodo.isDone;
  
      // Filter other Todos
      const others = state.list.filter(item => item.id !== action.todo.id);
  
      return {
        ...state,
        list: [...others, updateTodo].sort((a, b) => a.id - b.id)
      }
    }
    default :
      return state;
  }
}