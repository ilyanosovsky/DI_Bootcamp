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

# show_user_menu() - this function should display the program menu (not the restaurant menu!), and ask the user to :
# View an Item (V)
# Add an Item (A)
# Delete an Item (D)
# Update an Item (U)
# Show the Menu (S)
# Call the appropriate function that matches the user’s input.

from menu_item import MenuItem


def show_user_menu():
    print("Welcome to the Menu Manager!")
    print("What would you like to do?")
    print("View an Item (V)")
    print("Add an Item (A)")
    print("Delete an Item (D)")
    print("Update an Item (U)")
    print("Show the Menu (S)")
    print("Exit (E)")
    user_input = input("Enter your choice: ").upper()
    return user_input

def call_the_func(self):
    if self == "V":
        item_name = input("Enter item name: ")
        item_price = input("Enter item price: ")
        menu_item = MenuItem(item_name, item_price)
        result = menu_item.get_by_name()
        if result == None:
            print("There is no such item in the menu.")
        else:
            print(f"{result[0][1]} is {result[0][2]}$")
    elif self == "A":
        item_name = input("Enter item name: ")
        item_price = input("Enter item price: ")
        menu_item = MenuItem(item_name, item_price)
        menu_item.add_item()
        print(f"{item_name} was added to the menu.")
    elif self == "D":
        item_name = input("Enter item name: ")
        item_price = input("Enter item price: ")
        menu_item = MenuItem(item_name, item_price)
        menu_item.delete_item()
        print(f"{item_name} was deleted from the menu.")
    elif self == "U":
        item_name = input("Enter item name: ")
        item_price = input("Enter item price: ")
        menu_item = MenuItem(item_name, item_price)
        menu_item.update_item()
        print(f"{item_name} was updated.")
    elif self == "S":
        menu_item = MenuItem(None, None)
        result = menu_item.all_items()
        for item in result:
            print(f"{item[1]} is {item[2]}$")
    elif self == "E":
        print("Goodbye!")
        exit()
    else:
        print("Invalid input. Please try again.")
        show_user_menu()

while True:
    user_input = show_user_menu()
    call_the_func(user_input)





