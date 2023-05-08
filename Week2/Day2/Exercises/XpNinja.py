# Exercise 1: Formula
# Instructions
# Write a program that calculates and prints a value according to this given formula:
# Q = Square root of [(2 * C * D)/H]
# Following are the fixed values of C and H:
# C is 50.
# H is 30.
# Ask the user for a comma-separated string of numbers, use each number from the user as D in the formula and return all the results

import math
C = 50
H = 30
numbers = input("Enter a comma-separated string of numbers: ")
numbers_list = numbers.split(",")
for i in numbers_list:
    Q = math.sqrt((2 * C * int(i))/H)
    print(int(Q))


# Exercise 2 : List Of Integers
# Instructions
# Given a list of 10 integers to analyze. 

# Store the list of numbers in a variable.
# Print the following information:
# a. The list of numbers – printed in a single line
# b. The list of numbers – sorted in descending order (largest to smallest)
# c. The sum of all the numbers
# A list containing the first and the last numbers.
# A list of all the numbers greater than 50.
# A list of all the numbers smaller than 10.
# A list of all the numbers squared – eg. for [1, 2, 3] you would print “1 4 9”.
# The numbers without any duplicates – also print how many numbers are in the new list.
# The average of all the numbers.
# The largest number.
# 10.The smallest number.
# 11.Bonus: Find the sum, average, largest and smallest number without using built in functions.
# 12.Bonus: Instead of using pre-defined lists of numbers, ask the user for 10 numbers between -100 and 100. Ask the user for an integer between -100 and 100 – repeat this question 10 times. Each number should be added into a variable that you created earlier.
# 13.Bonus: Instead of asking the user for 10 integers, generate 10 random integers yourself. Make sure that these random integers are between -100 and 100.
# 14.Bonus: Instead of always generating 10 integers, let the amount of integers also be random! Generate a random positive integer no smaller than 50.
# 15.Bonus: Will the code work when the number of random numbers is not equal to 10?

numbers = [3, 47, 99, -80, 22, 97, 47, -23, 5, 7]

print(numbers) # a
numbers.sort(reverse=True)

print(numbers) # b

print(sum(numbers)) # c

print([numbers[0], numbers[-1]]) # d

numbers_greater_than_50 = []
for i in numbers:
    if i > 50:
        numbers_greater_than_50.append(i)
print(numbers_greater_than_50) # e

numbers_smaller_than_10 = []
for i in numbers:
    if i < 10:
        numbers_smaller_than_10.append(i)
print(numbers_smaller_than_10) # f

numbers_squared = []
for i in numbers:
    numbers_squared.append(i ** 2)
print(numbers_squared) # g

numbers_without_duplicates = []
for i in numbers:
    if i not in numbers_without_duplicates:
        numbers_without_duplicates.append(i)
print(numbers_without_duplicates) # h
print(len(numbers_without_duplicates)) # h

print(sum(numbers) / len(numbers)) # i

print(numbers) # j
numbers.sort(reverse=True)
print(numbers[0]) # the largest number
print(numbers[-1]) # the smallest number

# Bonus: Find the sum, average, largest and smallest number without using built in functions.
sum = 0
for i in numbers:
    sum += i
print(sum)

sum = 0
for i in numbers:
    sum += i
print(sum / len(numbers))

largest_number = numbers[0]
for i in numbers:
    if i > largest_number:
        largest_number = i
print(largest_number)

smallest_number = numbers[0]
for i in numbers:
    if i < smallest_number:
        smallest_number = i
print(smallest_number)

# Bonus: Instead of asking the user for 10 integers, generate 10 random integers yourself. Make sure that these random integers are between -100 and 100.
import random
random_numbers = []
for i in range(10):
    random_numbers.append(random.randrange(-100, 101))
print(random_numbers)

# Bonus: Instead of always generating 10 integers, let the amount of integers also be random! Generate a random positive integer no smaller than 50.
import random
random_numbers = []
for i in range(random.randrange(50, 101)):
    random_numbers.append(random.randrange(-100, 101))
print(random_numbers)

# Bonus: Will the code work when the number of random numbers is not equal to 10?
# Yes, the code will work when the number of random numbers is not equal to 10.



# Exercise 3: Working On A Paragraph
# Find an interesting paragraph of text online. (Please keep it appropriate to the social context of our class.)
# Paste it to your code, and store it in a variable.
# Let’s analyze the paragraph. Print out a nicely formatted message saying:
# How many characters it contains (this one is easy…).
# How many sentences it contains.
# How many words it contains.
# How many unique words it contains.
# Bonus: How many non-whitespace characters it contains.
# Bonus: The average amount of words per sentence in the paragraph.
# Bonus: the amount of non-unique words in the paragraph.

paragraph = """The first thing that comes to mind when we hear the word “Python” is a snake. However, the word “Python” came before the snake. It was introduced by Guido van Rossum, the creator of Python programming language. He named it after the famous British comedy group Monty Python. He wanted to choose a name that would be short, unique and slightly mysterious. He was also a big fan of Monty Python’s Flying Circus. So, he decided to name it after the group. He thought that it would be a fun name that would not be easily forgotten. He was right!"""

print(len(paragraph)) # How many characters it contains (this one is easy…).

print(paragraph.count(".")) # How many sentences it contains.

paragraph_list = paragraph.split()
print(len(paragraph_list)) # How many words it contains.

paragraph_list_without_duplicates = []
for i in paragraph_list:
    if i not in paragraph_list_without_duplicates:
        paragraph_list_without_duplicates.append(i)
print(len(paragraph_list_without_duplicates)) # How many unique words it contains.

print(len(paragraph.replace(" ", ""))) # Bonus: How many non-whitespace characters it contains.

print(len(paragraph_list) / paragraph.count(".")) # Bonus: The average amount of words per sentence in the paragraph.

print(len(paragraph_list) - len(paragraph_list_without_duplicates)) # Bonus: the amount of non-unique words in the paragraph.



# Exercise 4
# Instructions
# Write a program that prints the frequency of the words from the input.

# Suppose the following input is supplied to the program:
# New to Python or choosing between Python 2 and Python 3? Read Python 2 or Python 3.

# Then, the output should be:

#     2:2
#     3.:1
#     3?:1
#     New:1
#     Python:5
#     Read:1
#     and:1
#     between:1
#     choosing:1
#     or:2
#     to:1


sentence = "New to Python or choosing between Python 2 and Python 3? Read Python 2 or Python 3."
sentence_list = sentence.split()
sentence_list_without_duplicates = []
for i in sentence_list:
    if i not in sentence_list_without_duplicates:
        sentence_list_without_duplicates.append(i)
for i in sentence_list_without_duplicates:
    print(f"{i}:{sentence_list.count(i)}")
    


