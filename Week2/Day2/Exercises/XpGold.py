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

