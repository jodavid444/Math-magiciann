import React, { useState } from 'react';
import calculate from '../logic/calculate';

const Calculator = () => {
  const [state, setState] = useState({});

  const buttonClick = (element) => {
    setState(calculate(state, element.target.textContent));
  };

  const { total, next } = state;

  return (
    <div className="calculator-cont">
      <div className="animation-h3">
        <h3 className="calculator-h3 anim-typewriter">
          {'Let\'s do some math!'}
        </h3>
      </div>
      <div className="buttons-cont">
        <div className="calc-section">{next || total || 0}</div>
        <div className="container-row">
          <button type="button" onClick={buttonClick} className="button-grey">AC</button>
          <button type="button" onClick={buttonClick} className="button-grey">+/-</button>
          <button type="button" onClick={buttonClick} className="button-grey">%</button>
          <button type="button" onClick={buttonClick} className="button-orange">÷</button>
        </div>

        <div className="container-row">
          <button type="button" onClick={buttonClick} className="button-grey">7</button>
          <button type="button" onClick={buttonClick} className="button-grey">8</button>
          <button type="button" onClick={buttonClick} className="button-grey">9</button>
          <button type="button" onClick={buttonClick} className="button-orange">x</button>
        </div>

        <div className="container-row">
          <button type="button" onClick={buttonClick} className="button-grey">4</button>
          <button type="button" onClick={buttonClick} className="button-grey">5</button>
          <button type="button" onClick={buttonClick} className="button-grey">6</button>
          <button type="button" onClick={buttonClick} className="button-orange">-</button>
        </div>

        <div className="container-row">
          <button type="button" onClick={buttonClick} className="button-grey">1</button>
          <button type="button" onClick={buttonClick} className="button-grey">2</button>
          <button type="button" onClick={buttonClick} className="button-grey">3</button>
          <button type="button" onClick={buttonClick} className="button-orange">+</button>
        </div>

        <div className="third-row-bottom">
          <button type="button" onClick={buttonClick} className="button-grey">0</button>
          <button type="button" onClick={buttonClick} className="button-grey">.</button>
          <button type="button" onClick={buttonClick} className="button-orange calculator-last-orange-btn">=</button>
        </div>
      </div>
    </div>
  );
};

export default Calculator;
