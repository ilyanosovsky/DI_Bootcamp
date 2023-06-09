# Exercise 1 : Use The Terminal
# Instructions
# Run this command in the terminal to open a python console:
# $ python3
# Hint: Replace python3 with python for Windows

# Read about the PATH variable. Try to explain why you can call python3 if you aren’t in the executable directory.
# PATH explanation can be found here.




# Exercise 2 : Alias
# Instructions
# Read about alias, and try to open a python console with the command:
# $ py



# Exercise 3 : Outputs
# Instructions
# Predict the output of the following code snippets:
#     >>> 3 <= 3 < 9
#     >>> 3 == 3 == 3
#     >>> bool(0)
#     >>> bool(5 == "5")
#     >>> bool(4 == 4) == bool("4" == "4")
#     >>> bool(bool(None))
#     x = (1 == True)
#     y = (1 == False)
#     a = True + 4
#     b = False + 10

#     print("x is", x)
#     print("y is", y)
#     print("a:", a)
#     print("b:", b)

print(3 <= 3 < 9) # True
print(3 == 3 == 3) # True
print(bool(0)) # False
print(bool(5 == "5")) # False
print(bool(4 == 4) == bool("4" == "4")) # True
print(bool(bool(None))) # False
x = (1 == True) # True
y = (1 == False) # False
a = True + 4 # 5
b = False + 10 # 10

print("x is", x) # x is True
print("y is", y) # y is False
print("a:", a) # a: 5
print("b:", b) # b: 10


# Exercise 4 : How Many Characters In A Sentence ?
# Instructions
# Use python to find out how many characters are in the following text, use a single line of code (beyond the establishment of your my_text variable).
# my_text = "Lorem ipsum dolor sit amet, consectetur adipiscing elit, 
#            sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
#            Ut enim ad minim veniam, quis nostrud exercitation ullamco 
#            laboris nisi ut aliquip ex ea commodo consequat. 
#            Duis aute irure dolor in reprehenderit in voluptate velit 
#            esse cillum dolore eu fugiat nulla pariatur. 
#            Excepteur sint occaecat cupidatat non proident, 
#            sunt in culpa qui officia deserunt mollit anim id est laborum.

my_text = "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
print(len(my_text)) # 446

# Exercise 5: Longest Word Without A Specific Character
# Instructions
# Keep asking the user to input the longest sentence they can without the character “A”.
# Each time a user successfully sets a new longest sentence, print a congratulations message.

print("Enter the longest sentence you can without the character 'A'.")
longest_sentence = ""
while True:
    sentence = input("Enter a sentence: ")
    if "A" in sentence:
        print("You used the letter 'A'.")
        break
    elif len(sentence) > len(longest_sentence):
        longest_sentence = sentence
        print("Congratulations! You set a new record!")
    else:
        print("Try again.")
print("The longest sentence you entered was: " + longest_sentence)

    



