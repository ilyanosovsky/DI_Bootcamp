-- Instructions
-- Create a table called product_orders and a table called items. You decide which fields should be in each table, although make sure the items table has a column called price.

-- There should be a one to many relationship between the product_orders table and the items table. An order can have many items, but an item can belong to only one order.


-- CREATE TABLE product_orders (
-- 	order_id SERIAL PRIMARY KEY,
-- 	order_date DATE,
-- 	customer_name VARCHAR(50) NOT NULL
-- );

-- CREATE TABLE items (
-- 	item_id SERIAL PRIMARY KEY,
-- 	order_id INT REFERENCES product_orders (order_id),
-- 	item VARCHAR(50) NOT NULL,
-- 	price DECIMAL NOT NULL
-- );


-- INSERT INTO product_orders (order_id, order_date, customer_name)
-- VALUES (3, '2023-05-10', 'Peter Parker');


-- INSERT INTO product_orders (order_id, order_date, customer_name)
-- VALUES 
-- (1, '2023-05-03', 'Harry Osborn'),
-- (2, '2023-05-04', 'Marry Jane');


-- INSERT INTO items (order_id, item, price)
-- VALUES 
-- (1, 'IPhone', 1000),
-- (2, 'MacBook', 2000),
-- (1, 'AirPods', 200),
-- (3, 'AppleWatch', 800),
-- (2, 'IPad', 1500),
-- (3, 'IPhone', 1200);

-- SELECT * from product_orders
-- SELECT * FROM items


-- Create a function that returns the total price for a given order.

-- SELECT SUM(price) AS total_price
-- FROM product_orders AS po
-- RIGHT JOIN items AS i
-- ON i.order_id = po.order_id
-- WHERE po.order_id = 2
-- GROUP BY customer_name

CREATE TABLE users (
    user_id SERIAL PRIMARY KEY,
    username VARCHAR(50) NOT NULL,
    email VARCHAR(100) NOT NULL
)

-- ALTER TABLE product_orders
-- ADD COLUMN user_id INT REFERENCES users(user_id)

-- INSERT INTO users (username, email)
-- VALUES 
-- ('john.doe', 'john.doe@example.com'),
-- ('jane.smith', 'jane.smith@example.com'),
-- ('alex.wilson', 'alex.wilson@example.com'),
-- ('spiderman', 'peter.parker@example.com')

-- SELECT SUM(i.price) AS total_price
-- FROM product_orders AS po
-- JOIN items AS i 
-- ON i.order_id = po.order_id
-- LEFT JOIN users AS u
-- ON u.user_id = po.user_id
-- WHERE u.user_id = 1 AND po.order_id = 1

-- select * from items




-- Bonus :
-- Create a table called users.
-- There should be a one to many relationship between the users table and the product_orders table.
-- Create a function that returns the total price for a given order of a given user.