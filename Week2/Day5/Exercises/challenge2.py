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

    