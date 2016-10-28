import React, {PropTypes} from 'react';
import _ from "lodash";
import CSSModules from 'react-css-modules';
import classNames from 'classnames';

import { listGroup } from 'bootstrap-css';
import styles from "../styles/todos.css";
const stylesModule = Object.assign({}, styles, listGroup);

class Todo extends React.Component {

  handleUpdate() {
    this.props.onUpdate(this.props.id, this.input.value);
  }

  render() {
    const { id, text, completed, editing, onDelete, onToggle, onEdit, onUpdate } = this.props;
    const styleName = classNames('list-group-item', { completed: completed });

    if (editing) {
      return (
        <li styleName='list-group-item'>
          <div styleName='todo-text'>
            <input type='text' defaultValue={text} ref={(node) => {
              this.input = node;
            }} />
            <button onClick={this.handleUpdate.bind(this)}>save</button>
          </div>
        </li>
      );
    } else {
      return (
        <li styleName={styleName}>
          <div styleName='todo-text' onClick={_.partial(onToggle, id)}>{text}</div>
          <div styleName='todo-controls'>
            <span onClick={_.partial(onEdit, id)}>edit</span>
            <span>delete</span>
          </div>
        </li>
      );
    }
  }

}

Todo.propTypes = {
  id: PropTypes.string,
  text: PropTypes.string,
  completed: PropTypes.bool,
  editing: PropTypes.bool,
  onDelete: PropTypes.func,
  onToggle: PropTypes.func,
  onEdit: PropTypes.func,
  onUpdate: PropTypes.func
};

export default CSSModules(Todo, stylesModule, {allowMultiple: true});