// Assuming you are using Node.js and the 'mysql' package

const mysql = require('mysql');

// Create connection
const connection = mysql.createConnection({
  host: 'localhost',
  user: 'yourusername',
  password: 'yourpassword',
  database: 'library'
});

// Connect to MySQL
connection.connect(err => {
  if (err) throw err;
  console.log('Connected to MySQL database');
});

// Execute SQL query
connection.query('SELECT books.book_title, authors.author_name FROM books JOIN authors ON books.author_id = authors.author_id', (err, results) => {
  if (err) throw err;
  console.log('Book Titles and Authors:');
  results.forEach(row => {
    console.log(`${row.book_title} - ${row.author_name}`);
  });
});

// Close connection
connection.end();

