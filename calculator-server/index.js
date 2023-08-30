const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const cors = require('cors'); // Import the cors package

require('dotenv').config();

const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors()); // Use the cors middleware
app.use(bodyParser.json());


// Set up MongoDB Atlas connection
mongoose.connect(process.env.MONGODB_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

// Import the routes
const routes = require('./routes/calculationRoutes');
app.use('/api', routes);

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
