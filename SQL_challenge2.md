CREATE TABLE authors (
    author_id INT PRIMARY KEY,
    author_name VARCHAR(100
Consider a database schema for a library with two tables: books and authors.

CREATE TABLE authors (
    author_id INT PRIMARY KEY,
    author_name VARCHAR(100)
);

CREATE TABLE books (
    book_id INT PRIMARY KEY,
    book_title VARCHAR(200),
    author_id INT,
    FOREIGN KEY (author_id) REFERENCES authors(author_id)
);


Now, let's say you have the following data:

INSERT INTO authors (author_id, author_name) VALUES
(1, 'J.K. Rowling'),
(2, 'Stephen King'),
(3, 'George R.R. Martin');

INSERT INTO books (book_id, book_title, author_id) VALUES
(101, 'Harry Potter and the Philosopher''s Stone', 1),
(102, 'Harry Potter and the Chamber of Secrets', 1),
(103, 'Harry Potter and the Prisoner of Azkaban', 1),
(104, 'The Shining', 2),
(105, 'The Stand', 2),
(106, 'A Game of Thrones', 3),
(107, 'A Clash of Kings', 3),
(108, 'A Storm of Swords', 3);

Now, write an SQL query to retrieve the book titles along with their authors' names.
