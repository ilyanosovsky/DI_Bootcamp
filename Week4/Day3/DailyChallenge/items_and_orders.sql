-- Instructions
-- Create a table called product_orders and a table called items. You decide which fields should be in each table, although make sure the items table has a column called price.

-- There should be a one to many relationship between the product_orders table and the items table. An order can have many items, but an item can belong to only one order.

CREATE TABLE items(
	price INTEGER NOT NULL,
	item_id SERIAL PRIMARY KEY,
	item_name VARCHAR(50) NOT NULL
);

CREATE TABLE product_orders(
	order_id SERIAL PRIMARY KEY,
	
	
	
);


-- Create a function that returns the total price for a given order.

-- Bonus :
-- Create a table called users.
-- There should be a one to many relationship between the users table and the product_orders table.
-- Create a function that returns the total price for a given order of a given user.