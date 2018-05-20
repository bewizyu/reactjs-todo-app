export const ADD_TODO = 'ADD_TODOS';
export const REMOVE_TODO = 'REMOVE_TODO';
export const UPDATE_TODO = 'UPDATE_TODO';
export const TODOS_LOADED = 'TODOS_LOADED';
export const LOAD_TODOS = 'LOAD_TODOS';

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

const mockFetch = () => {
  return new Promise((resolve) => {
    setTimeout(() => resolve(mockList), 2000)
  })
}

/**
 * Add Todo
 * @param title
 * @returns {{type: string, title: *}}
 */
export function addTodo(title) {
  return {
    type: ADD_TODO,
    title
  }
}

/**
 * Remove todo
 * @returns {{type: string}}
 */
export function removeTodo() {
  return {
    type: REMOVE_TODO,
  }
}

/**
 * Update Todo
 * @param todo
 * @returns {{type: string, todo: *}}
 */
export function updateTodo (todo) {
  return {
    type : UPDATE_TODO,
    todo
  }
}

export function todosLoaded (datas) {
  return {
    type : TODOS_LOADED,
    todos : datas,
  }
}

export function loadTodos () {
  return (dispatch) => {
    // Dispatch load todos start
    dispatch({type: LOAD_TODOS});
    return mockFetch()
      .then((datas) => dispatch(todosLoaded(datas)));
  }
}
