import React from 'react';
import Display from './Display';
import Keyboard from './Keyboard';
import calculate from './logic/calculate';

export default class Calculator extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      total: null,
      next: null,
      operation: null,
    };
  }

  handleClick = (btnName) => {
    console.log(btnName);
    const newState = calculate(this.state, btnName);
    this.setState((prevState) => ({
      ...prevState,
      ...newState,
    }));
  };

  render() {
    const { next, total } = this.state;
    return (
      <section className="bigContainer w-50">
        <Display value={next || total || '0'} />
        <Keyboard handle={this.handleClick} />
      </section>
    );
  }
}
