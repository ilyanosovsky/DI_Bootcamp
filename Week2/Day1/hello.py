# email = "jon@gmail.com"
# position_of_at = email.find("@")
# print(position_of_at)

# user_name = input("What is your name? ")
# print("Hello, " + user_name + "!")

# In the python shell, Create a variable called my_age, use python to know how old you will be in 123879 years

my_age = input("How old are you? ")
print("In 123879 years, you will be " + str(int(my_age) + 123879) + " years old!")

# ask a user for a number of miles, to convert kilometers and display it.

miles = input("How many miles? ")
print("That is " + str(float(miles) * 1.60934) + " kilometers!")

# In the python shell, Create a variable called first_name and a variable called last_name, and then print your full name using those two variables

first_name = input("What is your first name? ")
last_name = input("What is your last name? ")
print("Your full name is " + first_name + " " + last_name + "!")

# Here is a table of prices for a wedding catering company:

# # of guests	price
# Up to 50 people	$4,000
# Up to 100 people	$10,000
# Up to 200 people	$15,000
# More than 200 people	$20,000

# 📝 Instructions:

# Please write an program that prompts the user for the number of people attending their wedding and prints the corresponding price in the console.
# For example, if the user says that 20 people are attending to the wedding, it must cost $4,000 dollars.

guests = int(input("How many guests? "))
if guests <= 50:
    print("$4,000")
elif guests <= 100:
    print("$10,000")
elif guests <= 200:
    print("$15,000")
else:
    print("$20,000")

    