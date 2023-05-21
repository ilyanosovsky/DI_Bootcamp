-- CREATE TABLE items (
-- 	item_id SERIAL PRIMARY KEY,
-- 	item VARCHAR(100) NOT NULL,
-- 	amount SMALLINT NOT NULL DEFAULT 0
-- )

-- CREATE TABLE customers (
-- 	cust_id SERIAL PRIMARY KEY,
-- 	first_name VARCHAR(100) NOT NULL,
-- 	last_name VARCHAR(100) NOT NULL
-- )

-- SELECT * FROM items

-- ALTER TABLE items RENAME COLUMN amount TO price

-- INSERT INTO items (item, price)
-- VALUES 
-- ('Small Desk', 100),
-- ('Large desk', 300),
-- ('Fan', 80)

-- INSERT INTO customers (first_name, last_name)
-- VALUES 
-- ('Greg', 'Jones'),
-- ('Sandra', 'Jones'),
-- ('Scott', 'Scott'),
-- ('Trevor', 'Green'),
-- ('Melanie', 'Johnson')

-- SELECT * FROM items
-- SELECT * FROM customers

-- Use SQL to fetch the following data from the database:
-- All the items.
-- All the items with a price above 80 (80 not included).
-- All the items with a price below 300. (300 included)

-- SELECT * FROM items
-- SELECT * FROM items WHERE price > 80
-- SELECT * FROM items WHERE price <= 300

-- All customers whose last name is ‘Smith’ (What will be your outcome?).
-- All customers whose last name is ‘Jones’.
-- All customers whose firstname is not ‘Scott’.

-- SELECT * FROM customers WHERE last_name = 'Smith'
-- SELECT * FROM customers WHERE last_name = 'Jones'
-- SELECT * FROM customers WHERE first_name != 'Scott'