# Create a colorize(text, color) function that contain this tuple 
# colors = ('cyan', 'yellow', 'blue', 'green', 'magenta')

# If the color is not present in the tuple, raise a ValueError exception
# If the text is not a string raise a TypeError Exception
# make sure to catch the exception
# Here are 2 ways of calling the function
# colorize("hello", "cyan")
# colorize(123, "red")
# colorize("hello", "red")

def colorize(text, color):
    colors = ('cyan', 'yellow', 'blue', 'green', 'magenta')
    if type(text) != str:
        raise TypeError("Text must be a string")
    if color not in colors:
        raise ValueError("Color is invalid color")
    print(f"Printed {text} in {color}")

colorize("hello", "cyan")
colorize(123, "red")