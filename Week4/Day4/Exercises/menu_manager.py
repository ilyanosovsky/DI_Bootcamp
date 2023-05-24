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

# In the file menu_manager.py, create a new class called MenuManager

class MenuManager:
    def __init__(self, item_name, item_price):
        self.item_name = item_name
        self.item_price = item_price



# Create a Class Method called get_by_name that will return a single item 
# from the Menu_Items table depending on it’s name, if an object is not found 
# (there is no item matching the name in the get_by_name method) return None.
    def get_by_name(self):
        query_user = f"SELECT * FROM menu_items WHERE item_name = '{self.item_name}'"
        if manage_connection(query_user) == []:
            return None
        else:
            result = manage_connection(query_user)
            return result
        
# Create a Class Method called all_items which will return a list of all the items from the Menu_Items table.
    def all_items(self):
        query_user = f"SELECT * FROM menu_items"
        result = manage_connection(query_user)
        return result
    
