const mongoose = require('mongoose');

const calculationSchema = new mongoose.Schema({
  num1: Number,
  num2: Number,
  operation: String,
  result: Number,
});

module.exports = mongoose.model('Calculation', calculationSchema);
