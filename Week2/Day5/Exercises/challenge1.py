# Exercise 1
# Instructions
# Write a script that inserts an item at a defined index in a list.

my_list = [1, 2, 3, 4, 5]
my_list.insert(2, 6)
print(my_list)

# Exercise 2
# Instructions
# Write a script that counts the number of spaces in a string.

my_string = "This is a string"
print(my_string.count(" "))

# Exercise 3
# Instructions
# Write a script that calculates the number of upper case letters and lower case letters in a string.

string = "Hello, World!"
uppercase_count = 0
lowercase_count = 0

for char in string:
    if char.isupper():
        uppercase_count += 1
    elif char.islower():
        lowercase_count += 1

print("Number of uppercase letters:", uppercase_count)
print("Number of lowercase letters:", lowercase_count)

# Exercise 4
# Instructions
# Write a function to find the sum of an array without using the built in function:

#     >>>my_sum([1,5,4,2])
#     >>>12

def my_sum(array):
    total = 0
    for num in array:
        total += num
    return total

print(my_sum([1, 5, 4, 2]))

# Exercise 5
# Instructions
# Write a function to find the max number in a list

#     >>>find_max([0,1,3,50])
#     >>>50

def find_max(array):
    max = array[0]
    for num in array:
        if num > max:
            max = num
    return max

print(find_max([0, 1, 3, 50]))

# Exercise 6
# Instructions
# Write a function that returns factorial of a number

#     >>>factorial(4)
#     >>>24

def factorial(num):
    if num == 0:
        return 1
    else:
        return num * factorial(num - 1)
    
print(factorial(4))

# Exercise 7
# Instructions
# Write a function that counts an element in a list (without using the count method):

#     >>>list_count(['a','a','t','o'],'a')
#     >>>2

def list_count(array, element):
    count = 0
    for item in array:
        if item == element:
            count += 1
    return count

print(list_count(['a', 'a', 't', 'o'], 'a'))

# Exercise 8
# Instructions
# Write a function that returns the L2-norm (square root of the sum of squares) of the sum of a list:

#     >>>norm([1,2,2])
#     >>>3

def norm(array):
    total = 0
    for num in array:
        total += num ** 2
    return total ** 0.5

print(norm([1, 2, 2]))

# Exercise 9
# Instructions
# Write a function to find if an array is monotonic (sorted either ascending of descending)

#     >>>is_mono([7,6,5,5,2,0])
#     >>>True

#     >>>is_mono([2,3,3,3])
#     >>>True

#     >>>is_mono([1,2,0,4])
#     >>>False

def is_mono(array):
    if array == sorted(array) or array == sorted(array, reverse=True):
        return True
    else:
        return False
    
print(is_mono([7, 6, 5, 5, 2, 0]))
print(is_mono([2, 3, 3, 3]))
print(is_mono([1, 2, 0, 4]))

# Exercise 10
# Instructions
# Write a function that prints the longest word in a list.

def longest_word(array):
    longest = ""
    for word in array:
        if len(word) > len(longest):
            longest = word
    return longest

print(longest_word(["Hello", "World", "Python"]))

# Exercise 11
# Instructions
# Given a list of integers and strings, put all the integers in one list, and all the strings in another one.

def separate(array):
    integers = []
    strings = []
    for item in array:
        if isinstance(item, int):
            integers.append(item)
        elif isinstance(item, str):
            strings.append(item)
    return integers, strings

print(separate([1, 2, "Hello", "World", 3, "Python"]))

# Exercise 12
# Instructions
# Write a function to check if a string is a palindrome:

#     >>>is_palindrome('radar')
#     >>>True

#     >>>is_palindrome('John)
#     >>>False

def is_palindrome(string):
    if string == string[::-1]:
        return True
    else:
        return False

print(is_palindrome("radar"))
print(is_palindrome("John"))

# Exercise 13
# Instructions
# Write a function that returns the amount of words in a sentence with length > k:

#     >>>sentence = 'Do or do not there is no try'
#     >>>k=2
#     >>>sum_over_k(sentence,k)
#     >>>3

def sum_over_k(sentence, k):
    count = 0
    for word in sentence.split():
        if len(word) > k:
            count += 1
    return count

sentence = "Do or do not there is no try"
k = 2
print(sum_over_k(sentence, k))

# Exercise 14
# Instructions
# Write a function that returns the average value in a dictionary (assume the values are numeric):

#     >>>dict_avg({'a': 1,'b':2,'c':8,'d': 1})
#     >>>3

def dict_avg(dictionary):
    total = 0
    for key in dictionary:
        total += dictionary[key]
    return total / len(dictionary)

print(dict_avg({'a': 1, 'b': 2, 'c': 8, 'd': 1}))

# Exercise 15
# Instructions
# Write a function that returns common divisors of 2 numbers:

#     >>>common_div(10,20)
#     >>>[2,5,10]

def common_div(num1, num2):
    divisors = []
    for i in range(1, min(num1, num2) + 1):
        if num1 % i == 0 and num2 % i == 0:
            divisors.append(i)
    return divisors

print(common_div(10, 20))

# Exercise 16
# Instructions
# Write a function that test if a number is prime:

#     >>>is_prime(11)
#     >>>True

def is_prime(num):
    if num > 1:
        for i in range(2, num):
            if num % i == 0:
                return False
        else:
            return True
    else:
        return False
    
print(is_prime(11))

# Exercise 17
# Instructions
# Write a function that prints elements of a list if the index and the value are even:

#     >>>weird_print([1,2,2,3,4,5])
#     >>>[2,4]

def weird_print(array):
    for i in range(len(array)):
        if i % 2 == 0 and array[i] % 2 == 0:
            print(array[i])

weird_print([1, 2, 2, 3, 4, 5])

# Exercise 18
# Instructions
# Write a function that accepts an undefined number of keyworded arguments and return the count of different types:

#     >>>type_count(a=1,b='string',c=1.0,d=True,e=False)
#     >>>int: 1, str:1 , float:1, bool:2

def type_count(**kwargs):
    types = {}
    for key in kwargs:
        if type(kwargs[key]) in types:
            types[type(kwargs[key])] += 1
        else:
            types[type(kwargs[key])] = 1
    return types

print(type_count(a=1, b='string', c=1.0, d=True, e=False))

# Exercise 19
# Instructions
# Write a function that mimics the builtin .split() method for strings.
# By default the function uses whitespace but it should be able to take an argument for any character and split with that argument.

def my_split(string, char=" "):
    words = []
    word = ""
    for char in string:
        if char != " ":
            word += char
        else:
            words.append(word)
            word = ""
    words.append(word)
    return words

print(my_split("Hello World"))
print(my_split("Hello,World", ","))
print(my_split("Hello,World", "o"))

# Exercise 20
# Instructions
# Convert a string into password format.
# Example:
# input : "mypassword"
# output: "***********"

def password(string):
    return "*" * len(string)

print(password("mypassword"))


