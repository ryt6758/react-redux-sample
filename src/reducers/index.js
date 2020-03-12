import { CREATE, DELETE, UPDATE } from '../actions';

const initialState = {
  todoList: {}
}
let todoKey = 0;

export default (state = initialState, action) => {
  switch (action.type) {
    case CREATE:
      todoKey++
      const todoList = state.todoList
      const newTodo = {
        [todoKey]: {
          id: todoKey,
          title: action.value.title,
          body: action.value.body,
          complete: false
        }
      }
      const newTodoList = {
        ...todoList,
        ...newTodo
      }
      return {
        todoList: newTodoList
      }
    case UPDATE:
      return state
    case DELETE:
      delete state.todoList[action.postId]
      const deletedTodoList = { ...state.todoList }
      return {
        todoList: deletedTodoList
      }
    default:
      return state
  }
}
