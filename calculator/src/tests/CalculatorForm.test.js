/* eslint-disable testing-library/prefer-screen-queries */
import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import CalculatorForm from '../CalculatorForm';

test('CalculatorForm submits the correct calculation data', () => {
  const handleSubmit = jest.fn();
  const { getByText, getByLabelText } = render(<CalculatorForm onSubmit={handleSubmit} />);

  const num1Input = getByLabelText('Number 1');
  const num2Input = getByLabelText('Number 2');
  const operationSelect = getByLabelText('Operation');
  const submitButton = getByText('Calculate');

  fireEvent.change(num1Input, { target: { value: '5' } });
  fireEvent.change(num2Input, { target: { value: '3' } });
  fireEvent.change(operationSelect, { target: { value: 'add' } });
  fireEvent.click(submitButton);

  expect(handleSubmit).toHaveBeenCalledWith({ num1: 5, num2: 3, operation: 'add' });
});


