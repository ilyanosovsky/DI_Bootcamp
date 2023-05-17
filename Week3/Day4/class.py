# Create a colorize(text, color) function that contain this tuple 
# colors = ('cyan', 'yellow', 'blue', 'green', 'magenta')

# If the color is not present in the tuple, raise a ValueError exception
# If the text is not a string raise a TypeError Exception
# make sure to catch the exception
# Here are 2 ways of calling the function
# colorize("hello", "cyan")
# colorize(123, "red")
# colorize("hello", "red")

# def colorize(text, color):
#     colors = ('cyan', 'yellow', 'blue', 'green', 'magenta')
#     try :
#         if type(text) is not str:
#             raise TypeError("Text must be instance of str")

#         if color not in colors:
#             raise ValueError(f"{color} is not a valid color")
#         print(f"Printed {text} in {color}")

    
#     except TypeError as err:
#         print(f"Error: {err}")

#     except ValueError as err:
#         print(f"Error: {err}")


# colorize("hello", "cyan")
# colorize(123, "red")
# colorize("hello", "red")


import requests
import json

response = requests.get('https://api.chucknorris.io/jokes/random')
print(response.json())
data = []
data.append(response.json())
print(data)

