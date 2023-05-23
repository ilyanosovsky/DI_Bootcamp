-- Instructions
-- You are going to practice tables relationships

-- Part I

-- Create 2 tables : Customer and Customer profile. They have a One to One relationship.

-- A customer can have only one profile, and a profile belongs to only one customer
-- The Customer table should have the columns : id, first_name, last_name NOT NULL
-- The Customer profile table should have the columns : id, isLoggedIn DEFAULT false (a Boolean), customer_id (a reference to the Customer table)



-- CREATE TABLE customer (
-- 	id SERIAL PRIMARY KEY,
-- 	first_name VARCHAR(100) NOT NULL,
-- 	last_name VARCHAR(100) NOT NULL
-- );

-- CREATE TABLE customer_profile (
-- 	id SERIAL PRIMARY KEY,
-- 	isLoggedIn BOOLEAN DEFAULT false,
-- 	customer_id INTEGER REFERENCES customer(id) 
-- );


-- Insert those customers

-- John, Doe
-- Jerome, Lalu
-- Lea, Rive

-- INSERT INTO customer (first_name, last_name)
-- VALUES 
-- ('John', 'Doe'),
-- ('Jerome', 'Lalu'),
-- ('Lea', 'Rive');



-- Insert those customer profiles, use subqueries

-- John is loggedIn
-- Jerome is not logged in

-- INSERT INTO customer_profile (isLoggedIn, customer_id)
-- SELECT true, id
-- FROM customer
-- WHERE first_name = 'John';

-- INSERT INTO customer_profile (isLoggedIn, customer_id)
-- SELECT false, id
-- FROM customer
-- WHERE first_name = 'Jerome';




-- Use the relevant types of Joins to display:

-- The first_name of the LoggedIn customers
-- SELECT first_name FROM customer
-- RIGHT JOIN customer_profile ON customer.id = customer_id
-- WHERE isLoggedIn = True



-- All the customers first_name and isLoggedIn columns - even the customers those who don’t have a profile.
-- SELECT first_name, isLoggedIn FROM customer
-- LEFT JOIN customer_profile ON customer.id = customer_id



-- The number of customers that are not LoggedIn
-- SELECT COUNT(*) FROM customer
-- INNER JOIN customer_profile ON customer.id = customer_id
-- WHERE isLoggedIn = False







-- Part II:

-- Create a table named Book, with the columns : book_id SERIAL PRIMARY KEY, title NOT NULL, author NOT NULL

-- Insert those books :
-- Alice In Wonderland, Lewis Carroll
-- Harry Potter, J.K Rowling
-- To kill a mockingbird, Harper Lee

-- Create a table named Student, with the columns : student_id SERIAL PRIMARY KEY, name NOT NULL UNIQUE, age. Make sure that the age is never bigger than 15 (Find an SQL method);

-- Insert those students:
-- John, 12
-- Lera, 11
-- Patrick, 10
-- Bob, 14

-- CREATE TABLE book (
-- 	book_id SERIAL PRIMARY KEY,
-- 	title VARCHAR(100) NOT NULL,
-- 	author VARCHAR(100) NOT NULL
-- );

-- INSERT INTO book (title, author)
-- VALUES
-- ('Alice In Wonderland', 'Lewis Carroll'),
-- ('Harry Potter', 'J.K Rowling'),
-- ('To kill a mockingbird', 'Harper Lee');


-- CREATE TABLE student (
-- 	student_id SERIAL PRIMARY KEY,
-- 	name VARCHAR(100) UNIQUE NOT NULL,
-- 	age INTEGER,
-- 	CHECK (age <= 15)
-- );

-- INSERT INTO student (name, age)
-- VALUES
-- ('John', 12),
-- ('Lera', 11),
-- ('Patrick', 10),
-- ('Bob', 14);




-- Create a table named Library, with the columns :
-- book_fk_id ON DELETE CASCADE ON UPDATE CASCADE
-- student_id ON DELETE CASCADE ON UPDATE CASCADE
-- borrowed_date
-- This table, is a junction table for a Many to Many relationship with the Book and Student tables : A student can borrow many books, and a book can be borrowed by many children
-- book_fk_id is a Foreign Key representing the column book_id from the Book table
-- student_fk_id is a Foreign Key representing the column student_id from the Student table
-- The pair of Foreign Keys is the Primary Key of the Junction Table

CREATE TABLE library (
	book_fk_id
	student_id
	borrowed_date
)
