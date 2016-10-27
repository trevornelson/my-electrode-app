import React, {PropTypes} from "react";
import {connect} from "react-redux";
import _ from "lodash";
import {addCalculatorValue, setOperator, calculateValue} from "../actions";

class Calculator extends React.Component {

  renderValueButton(val) {
    return <button onClick={_.partial(this.props.onValueClick, val)}>{val}</button>
  }

  render() {
    const props = this.props;
    const {first_number, second_number, operator} = props;
    console.log(first_number, second_number, operator);
    return (
      <div>
        <h1>Calculator</h1>
        <div className="screen">
          {operator ? second_number : first_number}
        </div>
        <div className="row">
          {this.renderValueButton(1)}
          {this.renderValueButton(2)}
          {this.renderValueButton(3)}
          <button onClick={_.partial(props.onOperationClick, '+')}>+</button>
        </div>
        <div className="row">
          {this.renderValueButton(4)}
          {this.renderValueButton(5)}
          {this.renderValueButton(6)}
          <button onClick={_.partial(props.onOperationClick, '-')}>-</button>
        </div>
        <div className="row">
          {this.renderValueButton(7)}
          {this.renderValueButton(8)}
          {this.renderValueButton(9)}
          <button onClick={_.partial(props.onOperationClick, '*')}>*</button>
        </div>
        <div className="row">
          {this.renderValueButton('.')}
          {this.renderValueButton(0)}
          <button onClick={props.onCalculateClick}>=</button>
          <button onClick={_.partial(props.onOperationClick, '/')}>/</button>
        </div>
      </div>
    );
  }

}

Calculator.propTypes = {
  first_number: PropTypes.number,
  second_number: PropTypes.number,
  operator: PropTypes.string
};

const mapStateToProps = (state) => {
  return {
    first_number: state.calculator.first_number,
    second_number: state.calculator.second_number,
    operator: state.calculator.operator
  }
};

const mapDispatchToProps = (dispatch) => {
  return {
    onValueClick: (val) => {
      dispatch(addCalculatorValue(val))
    },
    onOperationClick: (operation) => {
      dispatch(setOperator(operation))
    },
    onCalculateClick: () => {
      dispatch(calculateValue())
    }
  }
};

export default connect(mapStateToProps, mapDispatchToProps)(Calculator);