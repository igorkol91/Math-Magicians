import React from 'react';
import Display from './Display';
import Keyboard from './Keyboard';

export default class Calculator extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <section className="bigContainer w-50">
        <Display />
        <Keyboard />
      </section>
    );
  }
}
