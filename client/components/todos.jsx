import React, {PropTypes} from "react";
import {connect} from "react-redux";
import _ from "lodash";

import { addTodo, toggleTodo } from "../actions";
import Todo from "./todo";
import styles from "../styles/todos.css";


class Todos extends React.Component {

  handleKeyPress(e) {
    e.preventDefault();
    if (e.keyCode === 13) {
      addTodo(this.input.value);
    }
  }

  render() {
    return (
      <ul className={styles.todoList}>
        { this.props.todos.map((todo) => {
          return <Todo {...todo} onToggleTodo={this.props.onToggleTodo} />
        }) }
        <input type="text" onKeyDown={_.partial(this.handleKeyPress)} ref={(node) => {
          this.input = node;
        }}/>
      </ul>
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
    onToggleTodo: (id) => {
      dispatch(toggleTodo(id));
    }
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Todos);