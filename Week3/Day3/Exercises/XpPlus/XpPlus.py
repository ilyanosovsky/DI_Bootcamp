# Exercise 1: Import
# Instructions
# In a file named func.py create a function that adds 2 number, and prints the result
# In a file namedexercise_one.py import and the function

# Exercise 2: Random Module
# Instructions
# Create a function that accepts a number between 1 and 100, then rolls a random number between 1 and 100,
# if it’s the same number, display a success message to the user, else don’t.

def random_number(num):
    import random
    random_num = random.randint(1, 100)
    if num == random_num:
        print("Success")
    else:
        print("Try again")

random_number(5)

# Exercise 3: String Module
# Instructions
# Generate random String of length 5
# Note: String must be the combination of the UPPER case and lower case letters only. No numbers and a special symbol.
# Hint: use the string module

import string
import random

def random_string():
    letters = string.ascii_letters
    return ''.join(random.choice(letters) for i in range(5))

print(random_string())

# Exercise 4 : Current Date
# Instructions
# Create a function that displays the current date.
# Hint : Use the datetime module.

import datetime

def current_date():
    print(datetime.datetime.now())

current_date()

# Exercise 5 : Amount Of Time Left Until January 1st
# Instructions
# Create a function that displays the amount of time left from now until January 1st.
# (Example: the 1st of January is in 10 days and 10:34:01hours).

import datetime

def time_left():
    now = datetime.datetime.now()
    new_year = datetime.datetime(now.year + 1, 1, 1)
    print("Time left", new_year - now)

time_left()

# Exercise 6 : Birthday And Minutes
# Instructions
# Create a function that accepts a birthdate as an argument (in the format of your choice), then displays a message stating how many minutes the user lived in his life.

import datetime

def birthday_minutes():
    birthday = datetime.datetime(1994, 1, 5)
    now = datetime.datetime.now()
    mins = now - birthday
    print("You have lived", mins.days * 24 * 60, "minutes")

birthday_minutes()

# Exercise 7 : Upcoming Holiday
# Instructions
# Write a function that displays today’s date.
# The function should also display the amount of time left from now until the next upcoming holiday and print which holiday that is. (Example: the next holiday is in 30 days and 12:03:45 hours).
# Hint: Start by hardcoding the datetime and name of the upcoming holiday.

import datetime

def upcoming_holiday():
    now = datetime.datetime.now()
    holiday = datetime.datetime(2023, 5, 26)
    print("The next holiday is in", holiday - now)

upcoming_holiday()

# Exercise 8 : How Old Are You On Jupiter?
# Instructions
# Given an age in seconds, calculate how old someone would be on:
# Earth: orbital period 365.25 Earth days, or 31557600 seconds
# Mercury: orbital period 0.2408467 Earth years
# Venus: orbital period 0.61519726 Earth years
# Mars: orbital period 1.8808158 Earth years
# Jupiter: orbital period 11.862615 Earth years
# Saturn: orbital period 29.447498 Earth years
# Uranus: orbital period 84.016846 Earth years
# Neptune: orbital period 164.79132 Earth years
# So if you are told someone is 1,000,000,000 seconds old, the function should output that they are 31.69 Earth-years old.

def age_on_jupiter(age):
    earth_age = age / 31557600
    mercury_age = earth_age / 0.2408467
    venus_age = earth_age / 0.61519726
    mars_age = earth_age / 1.8808158
    jupiter_age = earth_age / 11.862615
    saturn_age = earth_age / 29.447498
    uranus_age = earth_age / 84.016846
    neptune_age = earth_age / 164.79132
    print("Earth:", earth_age, "Mercury:", mercury_age, "Venus:", venus_age, "Mars:", mars_age, "Jupiter:", jupiter_age, "Saturn:", saturn_age, "Uranus:", uranus_age, "Neptune:", neptune_age)

age_on_jupiter(1000000000)

# Exercise 9 : Faker Module
# Instructions
# Install the faker module, and take a look at the documentation and learn how to properly implement faker in your code.
# Create an empty list called users. Tip: It should be a list of dictionaries.
# Create a function that adds new dictionaries to the users list. Each user has the following keys: name, adress, langage_code. Use faker to populate them with fake data.

from faker import Faker

users = []

def add_user():
    fake = Faker.Faker()
    users.append({"name": fake.name(), "address": fake.address(), "language_code": fake.language_code()})
    print(users)

add_user()


