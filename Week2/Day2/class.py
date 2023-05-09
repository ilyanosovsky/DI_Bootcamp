# colors = ["red", "blue",[1, 2, 3]]
# colors.append("green")   # Adds another element to the end of the list
# print(colors)


# colors.insert(1, "yellow")  # Adds another element to the list at the specified index
# print(colors)

# colors[3].insert(1, "orange") # Adds another element to the list at the specified index
# print(colors)

# colors = ["red", "blue", "green"]
# answ = input("give position and color to insert")
# answ = answ.split(" ")
# colors.insert(int(answ[0]), answ[1])
# print(colors)

# colors = ["red", "blue", "green"]
# colors.pop()  # Removes the last element from the list
# print(colors)

# colors = ["red", "blue", "green"]
# colors.remove("blue")  # Removes the first element from the list that matches the given value
# print(colors)

# colors = ["red", "blue", "green"]
# new_list = colors[0:2]  # Creates a new list from the given start and end index
# print(new_list)

# colors = ["red", "blue", "green"]
# new_list = colors[1:]  # Creates a new list from the given start index to the end of the list   
# print(new_list)

# colors = ["red", "blue", "green", "yellow", "orange", "purple"]
# new_list = colors[::2]  # Creates a new list from the given start and end index, skipping every second element
# print(new_list)


# list1 = [5, 10, 15, 20, 25, 50, 20]
# list1[list1.index(20)] = 200
# print(list1)

# numbers = [100, 22, 31, 45, 500]
# for i in numbers:
#     if i % 2 == 0:
#         print(f" {i} number is even")
#     else :
#         print(f" {i} number is odd")



# toppings = []
# topping = input("What topping would you like? ")
# while topping != "quit":
#     toppings.append(topping)
#     print("I'll add that topping to your pizza.")
#     topping = input("What topping would you like? ")
# print("Your pizza has the following toppings: " + str(toppings))
# print("The total price is: " + str(10 + 2.5 * len(toppings)))

# words = []
# for i in range(7):
#     words.append(input("Enter a word: "))
# letter = input("Enter a letter: ")
# for i in words:
#     if letter in i:
#         print(i.index(letter))
#     else:
#         print(f"{letter} is not in {i}")

# numbers =range(1, 1000001)
# print(min(numbers))
# print(max(numbers))
# print(sum(numbers))

# numbers = input("Enter a sequence of comma-separated numbers: ")
# list1 = numbers.split(",")
# tuple1 = tuple(list1)
# print(list1)
# print(tuple1)

# Exercise 9 : Random Number
# Instructions
# Ask the user to input a number from 1 to 9 (including).
# Get a random number between 1 and 9. Hint: random module.
# use a loop that allows the user to keep guessing until they want to quit.
# on exiting the loop tally up and display total games won and lost.

# import random
# winners = 0
# losers = 0
# number = input("Write any number from 1 to 9: ")
# random_number = random.randrange(1, 10)
# while number != "quit":
#     if int(number) == random_number :
#         print("Your guess is correct, You are the Winner")
#         winners += 1
#     else:
#         print(f"Better luck next time, number was: {random_number}")
#         losers += 1
#     number = input("Write any number from 1 to 9: ")
#     random_number = random.randrange(1, 10)
# print(f"Total games won: {winners}")
# print(f"Total games lost: {losers}")


toppings = []
topping = input("What topping would you like? ")
while topping != "quit":
    toppings.append(topping)
    print("I'll add that topping to your pizza.")
    topping = input("What topping would you like? ")
print("Your pizza has the following toppings: " + " ,".join(toppings))
print("The total price is: " + str(10 + 2.5 * len(toppings)))








# If the user guesses the correct number print a message that says Winner.
# If the user guesses the wrong number print a message that says better luck next time.
# Bonus 2: on exiting the loop tally up and display total games won and lost.









 

        