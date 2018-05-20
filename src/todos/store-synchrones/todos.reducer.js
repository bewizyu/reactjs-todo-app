import {ADD_TODO, REMOVE_TODO, UPDATE_TODO} from './todos.actions';

const mockList = [
  {
    id : 1,
    title : 'Faire un truc',
    isDone : false,
  }, {
    id : 2,
    title : 'Faire un second truc',
    isDone : false,
  }, {
    id : 3,
    title : 'Faire un troisieme truc',
    isDone : false,
  }, {
    id : 4,
    title : 'Faire un quatrieme truc',
    isDone : false,
  },
]

const initialState = {
  list : mockList
}

export function todosReducers(state = initialState, action) {
  switch (action.type) {
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