-- CREATE TABLE actor (
-- 	actor_id SERIAL PRIMARY KEY,
-- 	first_name VARCHAR(100) NOT NULL,
-- 	last_name VARCHAR(100)NOT NULL,
-- 	date_birth DATE NOT NULL,
-- 	number_oscars SMALLINT NOT NULL DEFAULT 0
-- )

-- select all the columns
-- SELECT * FROM actor

-- INSERT INTO actor(first_name, last_name, date_birth, number_oscars)
-- VALUES ('Georges', 'Cloeney', '1976-03-12', 2)

-- SELECT * FROM actor

-- INSERT INTO actor(first_name, last_name, date_birth, number_oscars)
-- VALUES 
-- ('Brad', 'Pitt', '1973-05-10', 3),
-- ('Matt', 'Damon', '1970-01-05', 1)

-- SELECT first_name, last_name FROM actor

-- INSERT INTO actor(first_name, last_name, date_birth, number_oscars)
-- VALUES 
-- ('Angelina', 'Joli', '1980-01-13', 4)

-- INSERT INTO actor(first_name, last_name, date_birth, number_oscars)
-- VALUES 
-- ('Selena', 'Gomez', '1985-05-11', 1),
-- ('Margoret', 'Robbie', '1983-06-11', 1),
-- ('Jennifer', 'Aniston', '1990-10-10', 2)

-- SELECT * FROM actor
 
--  SELECT first_name, last_name FROM actor WHERE first_name = 'Angelina'

-- SELECT first_name, last_name FROM actor WHERE first_name = 'Angelina' OR last_name = 'Cloeney'

-- SELECT first_name, last_name FROM actor WHERE number_oscars >= 2

-- SELECT * FROM actor

-- SELECT * FROM actor ORDER BY last_name ASC

-- SELECT * FROM actor ORDER BY last_name ASC, first_name DESC

-- SELECT * FROM actor ORDER BY date_birth ASC

-- SELECT * FROM actor ORDER BY date_birth ASC LIMIT 1

-- SELECT * FROM actor

-- SELECT * FROM actor WHERE EXTRACT(YEAR from date_birth) >= 1980

-- SELECT * FROM actor

-- SELECT * FROM actor WHERE first_name LIKE '%a%'

-- SELECT * FROM actor WHERE first_name ILIKE '%a%'

-- UPDATE actor
-- SET last_name = 'Clooney'
-- WHERE actor_id = 1
-- RETURNING *

-- SELECT * FROM actor ORDER BY actor_id

-- DELETE FROM actor
-- WHERE actor_id = 5

-- ALTER TABLE actor ADD COLUMN salary INTEGER
-- ALTER TABLE actor ADD COLUMN nationality VARCHAR(200)

-- SELECT * FROM actor

-- UPDATE actor
-- SET salary = 1000000 * number_oscars
-- RETURNING *

-- UPDATE actor
-- SET nationality = 'American'
-- WHERE actor_id IN (1,2,3)
-- RETURNING *

-- UPDATE actor
-- SET nationality = 'French'
-- WHERE actor_id IN (4,5,6,7)
-- RETURNING *

-- SELECT * FROM actor

-- UPDATE actor
-- SET nationality = 'French'
-- WHERE actor_id BETWEEN 1 AND 4
-- RETURNING *

-- SELECT * FROM actor

-- SELECT * FROM actor ORDER BY actor_id
-- #1
-- SELECT * FROM actor WHERE actor_id < 5
-- #2
-- SELECT * FROM actor WHERE actor_id < 5 ORDER BY last_name DESC
-- #3
-- SELECT * FROM actor WHERE first_name ILIKE '%e%'
-- #4
-- UPDATE actor
-- SET number_oscars = 5
-- WHERE actor_id < 3
-- RETURNING *

-- SELECT * FROM actor WHERE number_oscars = 5

-- Update the first name of Matt Damon to "Maty"

-- UPDATE actor
-- SET first_name = 'Maty'
-- WHERE actor_id = 3
-- RETURNING *

-- Update the number of oscars of George Clooney to 4, and return the updated record

-- UPDATE actor
-- SET number_oscars = 4
-- WHERE actor_id = 1
-- RETURNING *

-- ALTER TABLE actor RENAME COLUMN date_birth TO age

-- Delete one actor and return it

-- DELETE FROM actor
-- WHERE actor_id = 6

-- SELECT COUNT(actor_id)  FROM actor

SELECT * FROM actor

-- SELECT COUNT(*) FROM actor

-- SELECT MAX(salary) FROM actor

-- SELECT first_name FROM actor WHERE salary = (SELECT MAX(salary) FROM actor)

-- SELECT first_name, MAX(salary) FROM actor

-- SELECT LOWER(nationality) AS nation, COUNT(*) AS number_people
-- FROM actor
-- GROUP BY LOWER(nationality)
-- HAVING LOWER(nationality) = 'American'

-- SELECT salary, COUNT(*)
-- FROM actor
-- GROUP BY salary

-- INSERT INTO actor (first_name, last_name, age, number_oscars, salary)
-- VALUES ('Ivan', 'Kozin', '1994-28-01', 0, 4000000)

-- CREATE TABLE movies (
--     movie_id SERIAL PRIMARY KEY, 
--     movie_title VARCHAR (50) NOT NULL, 
--     movie_story TEXT, 
--     actor_playing_id INTEGER REFERENCES actor (actor_id)
-- )

-- INSERT INTO movies (movie_title, movie_story, actor_playing_id)
-- VALUES ('Gravity', 'Gravity bla bla',
-- (SELECT actor_id FROM actor WHERE last_name='Clooney'));

-- SELECT * FROM movies

-- SELECT first_name, last_name, movie_title
-- FROM actor
-- INNER JOIN movies ON actor_id = actor_playing_id
-- WHERE last_name = 'Clooney'

-- SELECT last_name, movie_title
-- FROM actor
-- INNER JOIN movies ON actor_id = actor_playing_id
-- WHERE movie_title ILIKE '%beauty%'

-- SELECT last_name, movie_title
-- FROM actor
-- LEFT JOIN movies ON actor_id = actor_playing_id


 