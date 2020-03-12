export const CREATE = 'CREATE';
export const DELETE = 'DELETE';
export const UPDATE = 'UPDATE';

export const create = value => {
  return {
    type: CREATE,
    value
  }
}

export const del = postId => {
  return {
    type: DELETE,
    postId
  }
}

export const update = value => ({
  type: UPDATE,
  value
})
