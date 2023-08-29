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

app.post('/post/contact', upload.array(), (req, res) => {
  console.log("Received form data:", req.body);
  res.json({ result: true, message: 'Form submitted successfully' });
});

// Allow CORS (Cross-Origin Resource Sharing)
app.use((req, res, next) => {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, PATCH, DELETE');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type, Authorization');
  next();
});

app.listen(3000, () => {
  console.log('Server is running on http://localhost:3000');
});

