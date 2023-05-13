# Exercise 1
# Instructions
# Draw the following pattern using for loops:
#   *
#  ***
# *****

for i in range(1, 6, 2):
    print(' ' * (5 - i) + '*' * i)

# # Exercise 2Draw the following pattern using for loops:
#     *
#    **
#   ***
#  ****
# *****

for i in range(1, 6):
    print(' ' * (5 - i) + '*' * i)

# # # Exercise 3Draw the following pattern using for loops:
# *
# **
# ***
# ****
# *****
# *****
#  ****
#   ***
#    **
#     *

for i in range(1, 6):
    print('*' * i)
for i in range(5, 0, -1):
    print('*' * i)


# Exercise 2
# Instructions
# Analyse this code before executing it. Write some commnts next to each line. Write the value of each variable and their changes, and add the final output. Try to understand the purpose of this program.

my_list = [2, 24, 12, 354, 233] # create a list of numbers
for i in range(len(my_list) - 1): # loop through the list
    minimum = i # set the minimum to the first number in the list
    for j in range( i + 1, len(my_list)): # loop through the list again
        if(my_list[j] < my_list[minimum]): # if the number is less than the minimum
            minimum = j # set the minimum to that number
            if(minimum != i): # if the minimum is not the first number in the list
                my_list[i], my_list[minimum] = my_list[minimum], my_list[i] # swap the numbers
print(my_list) # print the list

