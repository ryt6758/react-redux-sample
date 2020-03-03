import { CREATE } from '../actions';

const initialState = {
  todo: "",
}

export default (state = initialState, action) => {
  switch (action.type) {
    case CREATE:
      console.log(action.payload.todo);
      return {
        title: action.payload.todo
      }
    default:
      return state
  }
}
