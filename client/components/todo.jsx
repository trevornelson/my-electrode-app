import React, {PropTypes} from "react";
import _ from "lodash";

import CSSModules from "react-css-modules";
import styles from "../styles/todos.css";

class Todo extends React.Component {

  render() {
    const className = this.props.completed ? 'complete' : 'incomplete';

    return (
      <li onClick={_.partial(this.props.onToggleTodo, this.props.id)}>
        {this.props.completed ? <input type="checkbox" checked /> : <input type="checkbox" />}
        <span styleName={className}>{this.props.text}</span>
      </li>
    );
  }

}

Todo.propTypes = {
  id: PropTypes.string,
  text: PropTypes.string,
  completed: PropTypes.bool,
  onToggleTodo: PropTypes.func
}

export default CSSModules(Todo, styles);