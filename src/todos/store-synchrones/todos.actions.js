export const ADD_TODO = 'ADD_TODOS';
export const REMOVE_TODO = 'REMOVE_TODO';
export const UPDATE_TODO = 'UPDATE_TODO';

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