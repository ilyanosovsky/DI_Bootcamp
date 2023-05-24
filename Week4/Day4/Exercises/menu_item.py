import psycopg2


def manage_connection(query):
# connect to the database
    try:
        connection = psycopg2.connect(
            host="localhost",
            port = '5432', 
            database="Menu_Manager",
            user="postgres",
            password="1235846Qq"
        )

        with connection:
            with connection.cursor() as cursor:   #it will close the cursor automatically
                 if "SELECT" in query:
                    cursor.execute(query)
                    result = cursor.fetchall()
                    return result
                 else:
                    cursor.execute(query)
                    connection.commit()
    except:
        pass
    finally:
        connection.close() #it will close the connection automatically


# Exercise 1 : Restaurant Menu Manager
# Instructions
# Description: Create a restaurant menu management system for a manager. The program should allow the manager to view the menu,
#  add an item and delete an item.

# In the file menu_item.py, create a new class called MenuItem, the attributes should be the name and price of each item.

class MenuItem:
    def __init__(self, item_name, item_price):
        self.item_name = item_name
        self.item_price = item_price

# Create a method in the MenuItem class that will allow a user to add an item to the Menu_Items table.

    def add_item(self):
        query_user = f"INSERT INTO menu_items (item_name, item_price) VALUES ('{self.item_name}', {self.item_price})"
        manage_connection(query_user)

# Create a method in the MenuItem class that will allow a user to delete an item from the Menu_Items table.

    def delete_item(self):
        query_user = f"DELETE FROM menu_items WHERE item_name = '{self.item_name}' AND item_price = '{self.item_price}'"
        manage_connection(query_user)

# Create a method in the MenuItem class that will allow a user to update all the items in the Menu_Items table.

    def update_item(self):
        query_user = f"UPDATE menu_items SET item_name = '{self.item_name}', item_price = '{self.item_price}' WHERE item_name = '{self.item_name}'"
        manage_connection(query_user)

# Create a method in the MenuItem class that will allow a user to view all the items in the Menu_Items table.

    def view_all_items(self):
        query_user = "SELECT * FROM menu_items"
        result = manage_connection(query_user)

        for item in result:
            print(f"Name: {item[1]}. Price: {item[2]}.")


item = MenuItem('Burger', 35)
# item.add_item()
# item.view_all_items()
item.delete_item()
item.view_all_items()




