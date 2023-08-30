const express = require('express');
const multer = require('multer');
const upload = multer();
const cors = require('cors');

const app = express();

app.use(cors());
// For handling JSON payload
app.use(express.json());

// For handling URL encoded data
app.use(express.urlencoded({ extended: true }));

app.post('/post/contact', upload.array(), (req, res, next) => {
  try {
    console.log("Received form data:", req.body);
    // Perform your data validation and database saving logic here
    res.json({ result: true, message: 'Form submitted successfully' });
  } catch (error) {
    next(error); // Passes error to the error-handling middleware
  }
});

// Allow CORS (Cross-Origin Resource Sharing)
app.use((req, res, next) => {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, PATCH, DELETE');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type, Authorization');
  next();
});

// Error-handling middleware
app.use((error, req, res, next) => {
  console.error(error.stack); // Log the stack trace of the error
  res.status(500).json({ error: 'An error occurred. Please try again later.' });
});

app.listen(6000, () => {
  console.log('Server is running on http://localhost:6000');
});

