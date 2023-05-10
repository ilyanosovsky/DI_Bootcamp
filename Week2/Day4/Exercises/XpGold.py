# Exercise 1 : When Will I Retire ?
# Instructions
# The point of the exercise is to check if a person can retire depending on their age and their gender.
# Note : Retirement age in Israel is 67 for men, and 62 for women (born after April, 1947).

# Create a function get_age(year, month, day)
# Hard-code the current year and month in your code (there are better ways of doing this, but for now it will be enough.)
# After calculating the age of a person, the function should return the age (the age is an integer).
# Create a function can_retire(gender, date_of_birth).
# It should call the get_age function (with what arguments?) in order to receive an age.
# Now it has all the information it needs in order to determine if the person with the given gender and date of birth is able to retire or not.
# Calculate. You may need to do a little more hard-coding here.
# Return True if the person can retire, and False if he/she can’t.

def get_age(year, month, day):
    current_year = 2023
    current_month = 5
    age = current_year - year
    if current_month < month:
        age -= 1
    return age

def can_retire(gender, date_of_birth):
    get_age(date_of_birth[0], date_of_birth[1], date_of_birth[2])
    for key, value in date_of_birth.items():
        print(key, value)

age_now = get_age(int(input("Enter your year of birth (YYYY): ")), int(input("Enter your month of birth: ")), int(input("Enter your day of birth: ")))
sex_of_person = input("What is your sex? (m/f): ")

print(f"Your age is {age_now} and your sex is {sex_of_person}")

if age_now >= 62 and sex_of_person == "f" :
    print("You can retire")
elif age_now >= 67 and sex_of_person == "m" :
    print("You can retire")
else:
    print("You can't retire")


# Exercise 2 : Sum
# Instructions
# Write a function that accepts one parameter (an int: X) and returns the value of X+XX+XXX+XXXX.
# Example:
# If X=3, the output when calling our function should be 3702 (3 + 33 + 333 + 3333)

# Hint: treating our number as a int or a str at different points in our code may be helpful

def sum_of_x(x):
    sum = 0
    for i in range(1, 5):
        sum += int(str(x) * i)
    return sum

print(sum_of_x(3))


# Exercise 3 : Double Dice
# Instructions
# Create a function that will simulate the rolling of a dice. Call it throw_dice. It should return an integer between 1 and 6.

import random
def throw_dice():
    return random.randint(1, 6)

print(throw_dice())

# Create a function called throw_until_doubles.
# It should keep throwing 2 dice (using your throw_dice function) until they both land on the same number, ie. until we reach doubles.
# For example: (1, 2), (3, 1), (5,5) → then stop throwing, because doubles were reached.
# This function should return the number of times it threw the dice in total. In the example above, it should return 3.

def throw_until_doubles():
    count = 0
    while True:
        count += 1
        dice1 = throw_dice()
        dice2 = throw_dice()
        if dice1 == dice2:
            return count
        
print(throw_until_doubles())

# Create a main function.
# It should throw doubles 100 times (ie. call your throw_until_doubles function 100 times), and store the results of those function calls (in other words, how many throws it took until doubles were thrown, each time) in a collection. 
# (What kind of collection? Read below to understand what we will need the data for, and this should help you decide which data structure to use).

# After the 100 doubles are thrown, print out a message telling the user how many throws it took in total to reach 100 doubles.
# Also print out a message telling the user the average amount of throws it took to reach doubles. Round this off to 2 decimal places.
# For example:

# If the results of the throws were as follows (your code would do 100 doubles, not just 3):
# (1, 2), (3, 1), (5, 5)
# (3, 3)
# (2, 4), (1, 2), (3, 4), (2, 2)

# Then my output would show something like this:
# Total throws: 8
# Average throws to reach doubles: 2.67.




def main():
    count = 0
    for i in range(100):
        count += throw_until_doubles()
    print(f"Total throws: {count}")
    print(f"Average throws to reach doubles: {round(count / 100, 2)}")

main()








