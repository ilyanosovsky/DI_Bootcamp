# Exercise 1 : What’s Your Name ?
# Instructions
# Write a function called get_full_name() that takes three arguments: 1: first_name, 2: middle_name 3: last_name.
# middle_name should be optional, if it’s omitted by the user, the name returned should only contain the first and the last name.
# For example, get_full_name(first_name="john", middle_name="hooker", last_name="lee") will return John Hooker Lee.
# But get_full_name(first_name="bruce", last_name="lee") will return Bruce Lee.

def get_full_name(first_name, last_name, middle_name=""):
    if middle_name == "":
        return first_name + " " + last_name
    else:
        return first_name + " " + middle_name + " " + last_name
    
print(get_full_name("John", "Lee", "Hooker"))
print(get_full_name("Bruce", "Lee"))


# Exercise 2 : From English To Morse
# Instructions
# Write a function that converts English text to morse code and another one that does the opposite.
# Hint: Check the internet for a translation table, every letter is separated with a space and every word is separated with a slash /.

MORSE_CODE_DICT = { 'A':'.-', 'B':'-...',
                    'C':'-.-.', 'D':'-..', 'E':'.',
                    'F':'..-.', 'G':'--.', 'H':'....',
                    'I':'..', 'J':'.---', 'K':'-.-',
                    'L':'.-..', 'M':'--', 'N':'-.',
                    'O':'---', 'P':'.--.', 'Q':'--.-',
                    'R':'.-.', 'S':'...', 'T':'-',
                    'U':'..-', 'V':'...-', 'W':'.--',
                    'X':'-..-', 'Y':'-.--', 'Z':'--..',
                    '1':'.----', '2':'..---', '3':'...--',
                    '4':'....-', '5':'.....', '6':'-....',
                    '7':'--...', '8':'---..', '9':'----.',
                    '0':'-----', ', ':'--..--', '.':'.-.-.-',
                    '?':'..--..', '/':'-..-.', '-':'-....-',
                    '(':'-.--.', ')':'-.--.-'}

def english_to_morse(text):
    morse = ""
    for letter in text:
        if letter == " ":
            morse += "/"
        else:
            morse += MORSE_CODE_DICT[letter.upper()] + " "
    return morse

print(english_to_morse("Hello World"))

# Exercise 3 : Box Of Stars
# Instructions
# Write a function named box_printer that takes any amount of strings (not in a list) and prints them, one per line, in a rectangular frame.
# For example calling box_printer("Hello", "World", "in", "reallylongword", "a", "frame") will result as:
# ******************
# * Hello          *
# * World          *
# * in             *
# * reallylongword *
# * a              *
# * frame          *
# ******************

def box_printer(*args):
    max_len = 0
    for arg in args:
        if len(arg) > max_len:
            max_len = len(arg)
    print("*" * (max_len + 4))
    for arg in args:
        print("* " + arg + " " * (max_len - len(arg)) + " *")
    print("*" * (max_len + 4))

box_printer("Hello", "World", "in", "reallylongword", "a", "frame")

# Exercise 4
# Analyse this code before executing it. What is the purpose of this code?
def insertion_sort(alist): # Insertion sort
   for index in range(1,len(alist)): # For each element in the list

     currentvalue = alist[index] # Get the current value
     position = index # Get the current position

     while position>0 and alist[position-1]>currentvalue: # While the position is greater than 0 and the value of the element before the current position is greater than the current value
         alist[position]=alist[position-1] # Set the value of the current position to the value of the element before the current position
         position = position-1 # Set the position to the position before

     alist[position]=currentvalue # Set the value of the current position to the current value

alist = [54,26,93,17,77,31,44,55,20]
insertion_sort(alist)
print(alist)
