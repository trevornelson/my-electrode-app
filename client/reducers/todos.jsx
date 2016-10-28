const todos = (store, action) => {
  switch (action.type) {
    case 'ADD_TODO':
      const newTodo = {id: _.uniqueId(), text: action.payload.text, completed: false};
      return [ ...store, newTodo ];
    case 'DELETE_TODO':
      return store.filter((todo) => { return todo.id !== action.payload.id; });
    case 'UPDATE_TODO':
      return [ ...store ].map((todo) => {
        if (todo.id === action.payload.id) { 
          todo.text = action.payload.text;
          todo.editing = false;
        }
        return todo;
      });
    case 'EDIT_TODO':
      return [ ...store ].map((todo) => {
        if (todo.id === action.payload.id) { todo.editing = !todo.editing; }
        return todo;
      });
    case 'TOGGLE_TODO':
      return [ ...store ].map((todo) => {
        if (todo.id === action.payload.id) { todo.completed = !todo.completed; }
        return todo;
      });
    default:
      return [
        {id: _.uniqueId(), text: 'Welcome to your todo list', completed: false, editing: false},
        {id: _.uniqueId(), text: 'Mark any todo as completed by clicking it', completed: false, editing: false},
        {id: _.uniqueId(), text: 'Edit any todo by clicking the "edit" button', completed: false, editing: false},
        {id: _.uniqueId(), text: 'Delete any todo by clicking the "delete" button', completed: false, editing: false},
        {id: _.uniqueId(), text: 'Mark a todo as not completed by clicking it again', completed: true, editing: false}
      ];
  }
};

export default todos;