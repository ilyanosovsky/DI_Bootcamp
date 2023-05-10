# Exercise 1 : What Are You Learning ?
# Instructions
# Write a function called display_message() that prints one sentence telling everyone what you are learning in this course.
# Call the function, and make sure the message displays correctly.

def display_message():
    print("I am learning Python")
display_message()




# Exercise 2: What’s Your Favorite Book ?
# Instructions
# Write a function called favorite_book() that accepts one parameter called title.
# The function should print a message, such as "One of my favorite books is <title>".
# For example: “One of my favorite books is Alice in Wonderland”
# Call the function, make sure to include a book title as an argument when calling the function.


def favorite_book(title):
    print(f"One of my favorite books is {title}")
favorite_book("Alice in Wonderland")





# Exercise 3 : Some Geography
# Instructions
# Write a function called describe_city() that accepts the name of a city and its country as parameters.
# The function should print a simple sentence, such as "<city> is in <country>".
# For example “Reykjavik is in Iceland”
# Give the country parameter a default value.
# Call your function.

def describe_city(city_name, country_name = "Israel"):
    print(f"{city_name} is in {country_name}")
describe_city("Tel Aviv")




# Exercise 4 : Random
# Instructions
# Create a function that accepts a number between 1 and 100 and generates another number randomly between 1 and 100.
# Compare the two numbers, if it’s the same number, display a success message, otherwise show a fail message and display both numbers.

import random
def random_number(number):
    random_number = random.randint(1, 100)
    if number == random_number:
        print("Success")
    else:
        print("Fail")
    print(f"The random number is {random_number}")
random_number(50)



# Exercise 5 : Let’s Create Some Personalized Shirts !
# Instructions
# Write a function called make_shirt() that accepts a size and the text of a message that should be printed on the shirt.
# The function should print a sentence summarizing the size of the shirt and the message printed on it, such as "The size of the shirt is <size> and the text is <text>"
# Call the function make_shirt().


def make_shirt(size, text):
    print(f"The size of the shirt is {size} and the text is {text}")
make_shirt("M", "Hello World")

# Modify the make_shirt() function so that shirts are large by default with a message that reads “I love Python” by default.

def make_shirt(size = 'L', text = "I love Python"):
    print(f"The size of the shirt is {size} and the text is {text}")
make_shirt()

# Make a large shirt with the default message

def make_shirt(size, text = "I love Python"):
    print(f"The size of the shirt is {size} and the text is {text}")
make_shirt('L')

# Make a medium shirt with the default message

def make_shirt(size, text = "I love Python"):
    print(f"The size of the shirt is {size} and the text is {text}")
make_shirt('M')

# Make a shirt of any size with a different message.

def make_shirt(size, text = "Hello World"):
    print(f"The size of the shirt is {size} and the text is {text}")
make_shirt('XL')

# Bonus: Call the function make_shirt() using keyword arguments.

def make_shirt(size, text):
    print(f"The size of the shirt is {size} and the text is {text}")
make_shirt(size = 'L', text = "Hello World")




# Exercise 6 : Magicians …
# Instructions
# Using this list of magician’s names. magician_names = ['Harry Houdini', 'David Blaine', 'Criss Angel']
# Pass the list to a function called show_magicians(), which prints the name of each magician in the list.
# Write a function called make_great() that modifies the list of magicians by adding the phrase "the Great" to each magician’s name.
# Call the function make_great().
# Call the function show_magicians() to see that the list has actually been modified.

magician_names = ['Harry Houdini', 'David Blaine', 'Criss Angel']


def show_magicians(magician_names):
    for magician_name in magician_names:
        print(magician_name)
show_magicians(magician_names)



def make_great(magician_names):
    for magician_name in magician_names:
        print(f"{magician_name} the Great")
make_great(magician_names)



Exercise 7 : Temperature Advice
Instructions
Create a function called get_random_temp().
This function should return an integer between -10 and 40 degrees (Celsius), selected at random.
Test your function to make sure it generates expected results.

import random
def get_random_temp():