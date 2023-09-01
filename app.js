const express = require('express');
const multer = require('multer');
const upload = multer();
const cors = require('cors');
const app = express();
const { Client } = require('pg');
const client = new Client({
	  host: 'localhost',
	  user: 'post1',
	  port: 5432,
	  password: '!S10738wanghu',
	  database: 'post1'
});
client.connect();

app.use(cors());
// For handling JSON payload
app.use(express.json());

// For handling URL encoded data
app.use(express.urlencoded({ extended: true }));


app.post('/post/contact', upload.array(), async (req, res) => {
  const { name, email, message } = req.body;
  console.log("Received form data:", req.body);
  
  const insertQuery = `INSERT INTO contact_forms (name, email, message) VALUES ($1, $2, $3) RETURNING id;`;
  try {
    const result = await client.query(insertQuery, [name, email, message]);
    console.log("Inserted and returned ID:", result.rows[0].id);
    res.json({ result: true, message: 'Form submitted successfully' });
  } catch (err) {
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

app.listen(30000, () => {
  console.log('Server is running on http://0.0.0.0:30000');
});

