# word = input("Enter a word: ")
# word_dict = {}
# for position, letter in enumerate(word):
#     if letter in word_dict:
#         word_dict[letter].append(position)
#     else:
#         word_dict[letter] = [position]
# print(word_dict)


# user_name = "John"
# my_name = "Tom"
# if user_name == my_name:
#     print("We have the same name")
# else:
#     print("We don't have the same name")

# def funcname() :
#     # content

# def say_hello():     # function definition
#     print("Hello World")

# say_hello()        # function call

# Create a function, that receives a number and checks if the number is even or odd

# def even_or_odd(number):
#     if number % 2 == 0:
#         print("Even")
#     else:
#         print("Odd")

# input_number = int(input("Enter a number: "))
# even_or_odd(input_number)
# print("End of program")

# Create a functions that receives a list of numbers, and check if each number is even or odd

# def even_or_odd_list(numbers):
#     for number in numbers:
#         if number % 2 == 0:
#             print("Even")
#         else:
#             print("Odd")

# input_numbers = [int(number) for number in input("Enter a list of numbers: ").split()]
# even_or_odd_list(input_numbers)
# print("End of program")


# Implement super_vowels function which takes a string as an argument and returns a modified version of that string.
# In the return value of super_vowels, all vowels should be in upper case whereas all consonants should be in lower case. The vowels are listed in the VOWELS variable.


# VOWELS = ['a', 'e', 'i', 'o', 'u']
# def super_vowels(string):
#     new_string = ""
#     for letter in string:
#         if letter in VOWELS:
#             new_string += letter.upper()
#         else:
#             new_string += letter.lower()
#     return new_string

# print(super_vowels("Hello World"))




def text_to_matrix(text):
    matrix = []
    count = 0
    for row in range(int(len(text) / 3)):
        matrix.append([])
        for col in range(3):
            if count > len(text): break
            matrix[row].append(text[count])
            count += 1
    return matrix

def decrypt(matrix):
    decrypted = ''
    no_alpha_group = 0
    for col in range(3):
        for row in matrix:
            char = row[col]
            if char.isalpha():
                if no_alpha_group > 1 and decrypted.strip() > '': decrypted += ' '
                decrypted += row[col]
                no_alpha_group = 0
            else:
                no_alpha_group += 1
    return decrypted

text = '7i3Tsih%xi #sM $a #t%^r!'
print(decrypt(text_to_matrix(text)))