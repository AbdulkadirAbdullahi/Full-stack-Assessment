import React from 'react';

const CalculatorHistory = ({ history }) => {
  return (
    <div className="calculator-history">
      <h2>Previous Calculations History</h2>
      <ul>
        {history.map((calculation, index) => (
          <li key={index}>
            {calculation.num1} {calculation.operation} {calculation.num2} = {calculation.result}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default CalculatorHistory;
