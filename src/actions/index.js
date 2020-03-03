export const CREATE = 'CREATE';

export const create = (value) => {
  return {
    type: CREATE,
    payload: { todo: value }
  }
}
