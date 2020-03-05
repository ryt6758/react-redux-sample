import { CREATE } from '../actions';

const initialState = {
  id: 0,
  todoList: []
}

export default (state = initialState, action) => {
  switch (action.type) {
    case CREATE:
      const stateId = state.id + 1;
      const newTodoList =
        state.todoList.concat(
          {
            id: stateId,
            title: action.value.title,
            body: action.value.body
          }
        )
      return {
        id: stateId,
        todoList: newTodoList
      }
    default:
      return state
  }
}
