import React from 'react';
import PropTypes from 'prop-types';
import Button from './Button';

export default class Keyboard extends React.Component {
  constructor(props) {
    super(props);
    this.state = { value: ['AC', '+/-', '%', '÷', '7', '8', '9', 'x', '4', '5', '6', '-', '1', '2', '3', '+', '0', '.', '='] };
  }

  render() {
    const { handle } = this.props;
    const { value } = this.state;
    const buttons = value.map((elem) => <li className="col-3 inputBtn" key={elem}><Button value={elem} onClick={handle} /></li>);
    return (
      <ul className="keyboardContainer row list-unstyled w-75">
        {buttons}
      </ul>
    );
  }
}

Keyboard.propTypes = {
  handle: PropTypes.func.isRequired,
};
