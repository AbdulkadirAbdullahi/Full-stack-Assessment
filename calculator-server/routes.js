const express = require('express');
const Calculation = require('./models/calculationModel'); // Import the model
const router = express.Router();

// GET endpoint to fetch calculation history
router.get('/history', async (req, res) => {
  try {
    const history = await Calculation.find();
    res.json(history);
  } catch (error) {
    res.status(500).json({ error: 'Server error' });
  }
});

// POST endpoint to perform calculation and store in the database
router.post('/calculate', async (req, res) => {
  const { num1, num2, operation } = req.body;

  let result;
  switch (operation) {
    case 'add':
      result = parseFloat(num1) + parseFloat(num2);
      break;
    case 'subtract':
      result = num1 - num2;
      break;
    case 'multiply':
      result = num1 * num2;
      break;
    case 'divide':
      result = num1 / num2;
      break;
    default:
      result = null;
  }

  try {
    const calculation = new Calculation({ num1, num2, operation, result });
    await calculation.save();
    res.json({ result });
  } catch (error) {
    res.status(500).json({ error: 'Server error' });
  }
});

module.exports = router;
