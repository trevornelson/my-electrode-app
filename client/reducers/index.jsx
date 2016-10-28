import {combineReducers} from "redux";
import todos from "./todos";
import _ from 'lodash';

const checkBox = (store, action) => {
  if (action.type === "TOGGLE_CHECK") {
    return {
      checked: !store.checked
    };
  }

  return store || {checked: false};
};

const number = (store, action) => {
  if (action.type === "INC_NUMBER") {
    return {
      value: store.value + 1
    };
  } else if (action.type === "DEC_NUMBER") {
    return {
      value: store.value - 1
    };
  }

  return store || {value: 0};
};

const calculator = (store, action) => {
  switch (action.type) {
    case 'ADD_CALCULATOR_VALUE':
      if (store.operator) {
        return Object.assign({}, store, {
          second_number: parseFloat(store.second_number.toString() + action.payload.value)
        });
      } else {
        return Object.assign({}, store, {
          first_number: parseFloat(store.first_number.toString() + action.payload.value)
        });
      }
    case 'SET_OPERATOR':
      return Object.assign({}, store, {
        operator: action.payload.operator
      });
    case 'CALCULATE_VALUE':
      const equation = store.first_number.toString() + ' ' + store.operator + ' ' + store.second_number.toString();
      const value = eval(equation);
      return {
        first_number: value,
        second_number: 0,
        operator: ''
      }
    default:
      return {
        first_number: 0,
        second_number: 0,
        operator: ''
      }
  }
};

export default combineReducers({
  checkBox,
  number,
  calculator,
  todos
});
