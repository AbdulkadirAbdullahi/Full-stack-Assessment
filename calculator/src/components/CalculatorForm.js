import React, { useState } from 'react';

const CalculatorForm = ({ onSubmit }) => {
  const [num1, setNum1] = useState('');
  const [num2, setNum2] = useState('');
  const [operation, setOperation] = useState('add');

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit({ num1, num2, operation });
  };

  return (
    <form className="calculator-form" onSubmit={handleSubmit}>
        <h1>Geria Calculator</h1>
      <input type="number" value={num1} onChange={(e) => setNum1(e.target.value)} />
      <select value={operation} onChange={(e) => setOperation(e.target.value)}>
        <option value="add">+</option>
        <option value="subtract">-</option>
        <option value="multiply">*</option>
        <option value="divide">/</option>
      </select>
      <input type="number" value={num2} onChange={(e) => setNum2(e.target.value)} />
      <button type="submit">Calculate</button>
    </form>
  );
};

export default CalculatorForm;
