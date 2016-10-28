export const toggleCheck = () => {
  return {
    type: "TOGGLE_CHECK"
  };
};

export const incNumber = () => {
  return {
    type: "INC_NUMBER"
  };
};

export const decNumber = () => {
  return {
    type: "DEC_NUMBER"
  };
};

export const addCalculatorValue = (value) => {
  return {
    type: "ADD_CALCULATOR_VALUE",
    payload: {value: value}
  };
};

export const setOperator = (operator) => {
  return {
    type: "SET_OPERATOR",
    payload: {operator: operator}
  };
};

export const calculateValue = () => {
  return {
    type: "CALCULATE_VALUE"
  };
};

export const toggleTodo = (id) => {
  return {
    type: "TOGGLE_TODO",
    payload: {id: id}
  };
}

export const addTodo = (text) => {
  return {
    type: "ADD_TODO",
    payload: {text: text}
  }
}
