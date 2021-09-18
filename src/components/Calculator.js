import React, { useState } from 'react';
import Display from './Display';
import Keyboard from './Keyboard';
import calculate from './logic/calculate';

const Calculator = () => {
  const [state, setState] = useState({ total: null, next: null, operation: null });
  const { next, total } = state;

  const handleClick = (btnName) => {
    const newState = calculate(state, btnName);
    setState((prevState) => ({
      ...prevState,
      ...newState,
    }));
  };

  return (
    <section className="bigContainer w-50">
      <Display value={next || total || '0'} />
      <Keyboard handle={handleClick} />
    </section>
  );
};

export default Calculator;
