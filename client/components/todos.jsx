import React, {PropTypes} from 'react';
import {connect} from 'react-redux';

import Todo from './todo';
import {addTodo, editTodo, updateTodo, deleteTodo, toggleTodo} from '../actions/todos';

class Todos extends React.Component {
  
  render() {
    const props = this.props;
    const { todos, onDeleteTodo, onEditTodo, onUpdateTodo, onToggleTodo } = props;

    return (
      <div>
        <h1>Todos</h1>
        <ul className="list-group">
          { todos.map((todo) => { return <Todo {...todo} onDelete={onDeleteTodo} onEdit={onEditTodo} onUpdate={onUpdateTodo} onToggle={onToggleTodo} /> }) }
        </ul>
      </div>
    );
  }

}

Todos.propTypes = {
  todos: PropTypes.array
};

const mapStateToProps = (state) => {
  return {
    todos: state.todos
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    onAddTodo: (text) => {
      dispatch(addTodo(text));
    },
    onEditTodo: (id, text) => {
      dispatch(editTodo(id, text));
    },
    onUpdateTodo: (id, text) => {
      dispatch(updateTodo(id, text));
    },
    onDeleteTodo: (id) => {
      dispatch(deleteTodo(id));
    },
    onToggleTodo: (id) => {
      dispatch(toggleTodo(id));
    }
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Todos);