// Load environment variables from .env (for local testing)
require('dotenv').config();

const express = require('express');
const mysql = require('mysql2');
const bodyParser = require('body-parser');
const cors = require('cors');
const path = require('path');

const app = express();
const port = process.env.PORT || 3000;

// Middleware
app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// Serve static files from "public" folder
app.use(express.static(path.join(__dirname, 'public')));

// MySQL connection with fallback for Railway deployment
let db;

// Function to initialize database connection
function initDatabase() {
  const dbConfig = {
    host: process.env.DB_HOST || 'localhost',
    user: process.env.DB_USER || 'root',
    password: process.env.DB_PASSWORD || '',
    database: process.env.DB_NAME || 'portfolio_db',
    // Railway MySQL configuration
    port: process.env.DB_PORT || 3306,
    ssl: process.env.NODE_ENV === 'production' ? { rejectUnauthorized: false } : false
  };

  db = mysql.createConnection(dbConfig);

  db.connect(err => {
    if (err) {
      console.error('Database connection failed:', err.message);
      // Continue without database for static site
      console.log('Continuing without database connection...');
      return;
    }
    console.log('Connected to MySQL database');
  });

  // Handle connection errors
  db.on('error', (err) => {
    console.error('Database error:', err.message);
    if (err.code === 'PROTOCOL_CONNECTION_LOST') {
      console.log('Attempting to reconnect to database...');
      initDatabase();
    }
  });
}

// Initialize database
initDatabase();

// API route for contact form
app.post('/contact', (req, res) => {
  const { name, email, phone, subject, message } = req.body;

  if (!name || !email || !message) {
    return res.status(400).json({ error: 'Name, email, and message are required.' });
  }

  // Check if database is available
  if (!db || db.state !== 'authenticated') {
    // Log the contact form submission (for now, just console log)
    console.log('Contact form submission (no DB):', { name, email, phone, subject, message });
    return res.json({ message: 'Message received successfully! I\'ll get back to you soon.' });
  }

  const query = 'INSERT INTO contacts (name, email, phone, subject, message) VALUES (?, ?, ?, ?, ?)';
  db.query(query, [name, email, phone, subject, message], (err, result) => {
    if (err) {
      console.error('Database error:', err);
      return res.status(500).json({ error: 'Database error' });
    }
    console.log('Contact form saved to database:', { name, email, phone, subject, message });
    res.json({ message: 'Message saved successfully! I\'ll get back to you soon.' });
  });
});

// Health check endpoint for Railway
app.get('/health', (req, res) => {
  res.json({ status: 'OK', timestamp: new Date().toISOString() });
});

// Start server
app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
