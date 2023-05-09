# Exercise 1: Birthday Look-Up
# Instructions
# Create a variable called birthdays. Its value should be a dictionary.
# Initialize this variable with birthdays of 5 people of your choice. For each entry in the dictionary, the key should be the person’s name, and the value should be their birthday. Tip : Use the format “YYYY/MM/DD”.
# Print a welcome message for the user. Then tell them: “You can look up the birthdays of the people in the list!”“
# Ask the user to give you a person’s name and store the answer in a variable.
# Get the birthday of the name provided by the user.
# Print out the birthday with a nicely-formatted message.

birthdays = { }
for i in range(5):
    name = input("Enter the name of the person: ")
    birthday = input("Enter the birthday of the person with format YYYY/MM/DD: ")
    birthdays[name] = birthday
print(birthdays)
print("Welcome to the birthday dictionary. We know the birthdays of: ")
for name in birthdays.keys():
    print(name)
user_input = input("Who's birthday do you want to look up? ")
print(f"{user_input}'s birthday is {birthdays[user_input]}")


# Exercise 2: Birthdays Advanced
# Instructions
# Before asking the user to input a person’s name print out all of the names in the dictionary.
# If the person that the user types is not found in the dictionary, print an error message (“Sorry, we don’t have the birthday information for <person’s name>”)

birthdays = { 
    "John" : "1990/01/01",
    "Mary" : "1991/02/02",
    "Peter" : "1992/03/03",
    "Bob" : "1993/04/04",
    "Alice" : "1994/05/05"
}

print("Welcome to the birthday dictionary. We know the birthdays of: ")
for name in birthdays.keys():
    print(name)
user_input = input("Who's birthday do you want to look up? ")
if user_input in birthdays:
    print(f"{user_input}'s birthday is {birthdays[user_input]}")
else:
    print("Sadly, we don't have that person's birthday.")


# Exercise 4: Fruit Shop
# Instructions
# items = {
#     "banana": 4,
#     "apple": 2,
#     "orange": 1.5,
#     "pear": 3
# }
# Using the dictionary above, each key-value pair represents an item and its price - print all the items and their prices in a sentence.
# Using the dictionary below, each value are dictionaries containing both the price and the amount of items in stock -
# write some code to calculate how much it would cost to buy everything in stock.
# items = {
#     "banana": {"price": 4 , "stock":10},
#     "apple": {"price": 2, "stock":5},
#     "orange": {"price": 1.5 , "stock":24},
#     "pear": {"price": 3 , "stock":1}
# }

items = {
    "banana": 4,
    "apple": 2,
    "orange": 1.5,
    "pear": 3
}
for item in items:
    print(f"{item} costs {items[item]}$")
items = {
    "banana": {"price": 4 , "stock":10},
    "apple": {"price": 2, "stock":5},
    "orange": {"price": 1.5 , "stock":24},
    "pear": {"price": 3 , "stock":1}
}
total = 0
for item in items:
    total += items[item]["price"] * items[item]["stock"]
print(f"The total cost of all the items in stock is {total}$")
