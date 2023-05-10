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

def even_or_odd(number):
    if number % 2 == 0:
        print("Even")
    else:
        print("Odd")

input_number = int(input("Enter a number: "))
even_or_odd(input_number)
print("End of program")

# Create a functions that receives a list of numbers, and check if each number is even or odd

def even_or_odd_list(numbers):
    for number in numbers:
        if number % 2 == 0:
            print("Even")
        else:
            print("Odd")

input_numbers = [int(number) for number in input("Enter a list of numbers: ").split()]
even_or_odd_list(input_numbers)
print("End of program")