-- 🌟 Exercise 1 : Items And Customers
-- Instructions
-- We will work on the public database that we created yesterday.

-- Use SQL to get the following from the database:
-- All items, ordered by price (lowest to highest).
-- Items with a price above 80 (80 included), ordered by price (highest to lowest).
-- The first 3 customers in alphabetical order of the first name (A-Z) – exclude the primary key column from the results.
-- All last names (no other columns!), in reverse alphabetical order (Z-A)

-- SELECT * FROM items ORDER BY price


-- SELECT * FROM items WHERE price >= 80 ORDER BY price DESC

-- SELECT first_name, last_name FROM customers ORDER BY first_name LIMIT 3

-- SELECT last_name FROM customers ORDER BY last_name DESC




-- We will use the newly installed dvdrental database.
-- In the dvdrental database write a query to select all the columns from the “customer” table.
-- SELECT * FROM customer

-- Write a query to display the names (first_name, last_name) using an alias named “full_name”.
-- SELECT first_name, last_name AS full_name FROM customer


-- Lets get all the dates that accounts were created. 
-- Write a query to select all the create_date from the “customer” table (there should be no duplicates).
-- SELECT DISTINCT create_date FROM customer




-- Write a query to get all the customer details from the customer table, it should be displayed in descending order by their first name.
-- SELECT first_name, last_name, email, address_id, create_date, last_update FROM customer ORDER BY first_name DESC



-- Write a query to get the film ID, title, description, year of release and rental rate in ascending order according to their rental rate.
-- SELECT film_id, title, description, release_year, rental_rate FROM film ORDER BY rental_rate




-- Write a query to get the address, and the phone number of all customers living in the Texas district, these details can be found in the “address” table.

-- Write a query to retrieve all movie details where the movie id is either 15 or 150.

-- Write a query which should check if your favorite movie exists in the database. Have your query get the film ID, title, description, length and the rental rate, these details can be found in the “film” table.

-- No luck finding your movie? Maybe you made a mistake spelling the name. Write a query to get the film ID, title, description, length and the rental rate of all the movies starting with the two first letters of your favorite movie.

-- Write a query which will find the 10 cheapest movies.

-- Not satisfied with the results. Write a query which will find the next 10 cheapest movies.
-- Bonus: Try to not use LIMIT.

-- Write a query which will join the data in the customer table and the payment table. You want to get the first name and last name from the curstomer table, as well as the amount and the date of every payment made by a customer, ordered by their id (from 1 to…).

-- You need to check your inventory. Write a query to get all the movies which are not in inventory.

-- Write a query to find which city is in which country.

-- Bonus You want to be able to see how your sellers have been doing? Write a query to get the customer’s id, names (first and last), the amount and the date of payment ordered by the id of the staff member who sold them the dvd.

