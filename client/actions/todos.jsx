export const addTodo = (text) => {
  return {
    type: "ADD_TODO",
    payload: {text: text}
  };
};

export const deleteTodo = (id) => {
  return {
    type: "DELETE_TODO",
    payload: {id: id}
  };
};

export const editTodo = (id) => {
  return {
    type: "EDIT_TODO",
    payload: {id: id}
  };
};

export const updateTodo = (id, text) => {
  return {
    type: "UPDATE_TODO",
    payload: {id: id, text: text}
  };
};

export const toggleTodo = (id) => {
  return {
    type: "TOGGLE_TODO",
    payload: {id: id}
  };
};