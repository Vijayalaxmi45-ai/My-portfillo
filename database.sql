-- Portfolio Database Schema
-- Create database and tables for the portfolio website

CREATE DATABASE IF NOT EXISTS portfolio_db;
USE portfolio_db;

-- Contacts table for contact form submissions
CREATE TABLE IF NOT EXISTS contacts (
    id INT AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(100) NOT NULL,
    email VARCHAR(100) NOT NULL,
    phone VARCHAR(20),
    subject VARCHAR(200),
    message TEXT NOT NULL,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- Insert some sample data (optional)
-- INSERT INTO contacts (name, email, phone, subject, message) VALUES
-- ('John Doe', 'john@example.com', '+1234567890', 'Project Inquiry', 'I would like to discuss a web development project with you.');
