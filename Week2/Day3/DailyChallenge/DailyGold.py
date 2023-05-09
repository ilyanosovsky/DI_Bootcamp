# Exercise 1: Birthday Look-Up
# Instructions
# Create a variable called birthdays. Its value should be a dictionary.
# Initialize this variable with birthdays of 5 people of your choice. For each entry in the dictionary, the key should be the person’s name, and the value should be their birthday. Tip : Use the format “YYYY/MM/DD”.
# Print a welcome message for the user. Then tell them: “You can look up the birthdays of the people in the list!”“
# Ask the user to give you a person’s name and store the answer in a variable.
# Get the birthday of the name provided by the user.
# Print out the birthday with a nicely-formatted message.

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


# Exercise 2: Birthdays Advanced
# Instructions
# Before asking the user to input a person’s name print out all of the names in the dictionary.
# If the person that the user types is not found in the dictionary, print an error message (“Sorry, we don’t have the birthday information for <person’s name>”)

