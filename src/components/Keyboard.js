import React from 'react';
import Button from './Button';

export default class Keyboard extends React.Component {
  constructor(props) {
    super(props);
    this.state = { value: ['AC', '+/-', '%', '/', '7', '8', '9', 'x', '4', '5', '6', '-', '1', '2', '3', '+', '0', '.', '='] };
  }

  render() {
    const { value } = this.state;
    const buttons = value.map((elem) => <li className="col-3 inputBtn" key={elem}><Button value={elem} /></li>);
    return (
      <ul className="keyboardContainer row list-unstyled w-75">
        {buttons}
      </ul>
    );
  }
}
