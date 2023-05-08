# Exercise 1: Concatenate Lists
# Instructions
# Write code that concatenates two lists together without using the + sign.

list1 = [1, 2, 3, 4]
list2 = [5, 6, 7, 8]
for i in list2:
    list1.append(i)
print(list1)

# Exercise 2: Range Of Numbers
# Instructions
# Create a loop that goes from 1500 to 2500 and prints all multiples of 5 and 7.

for i in range(1500, 2501):
    if i % 5 == 0 and i % 7 == 0:
        print(i)


# Exercise 3: Check The Index
# Instructions
# Using this variable

# names = ['Samus', 'Cortana', 'V', 'Link', 'Mario', 'Cortana', 'Samus']

# Ask a user for their name, if their name is in the names list print out the index of the first occurence of the name.

names = ['Samus', 'Cortana', 'V', 'Link', 'Mario', 'Cortana', 'Samus']
name = input("Enter your name: ")
if name in names:
    print(names.index(name))
else:
    print("Name not in list.")

# Exercise 4: Greatest Number
# Instructions
# Ask the user for 3 numbers and print the greatest number.

num1 = int(input("Enter first number: "))
num2 = int(input("Enter second number: "))
num3 = int(input("Enter third number: "))
if num1 > num2 and num1 > num3:
    print(f"{num1} is the greatest number")
elif num2 > num1 and num2 > num3:
    print(f"{num2} is the greatest number")
else:
    print(f"{num3} is the greatest number")

# Exercise 5: The Alphabet
# Instructions
# Create a string of all the letters in the alphabet
# Loop over each letter and print a message that contains the letter and whether its a vowel or a consonant.    

alphabet = range("a", "z")
for i in alphabet:
    if i == "a" or i == "e" or i == "i" or i == "o" or i == "u":
        print(f"{i} is a vowel")
    else:
        print(f"{i} is a consonant")

# Exercise 6: Words And Letters
# Instructions
# Ask a user for 7 words, store them in a list named words.
# Ask the user for a single character, store it in a variable called letter.
# Loop through the words list and print the index of the first appearence of the letter variable in each word of the list.
# If the letter doesn’t exist in one of the words, print a friendly message with the word and the letter.

words = []
for i in range(7):
    words.append(input("Enter a word: "))
letter = input("Enter a letter: ")
for i in words:
    if letter in i:
        print(i.index(letter))
    else:
        print(f"{letter} is not in {i}")
