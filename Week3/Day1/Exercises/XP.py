# Exercise 1: Cats
# Instructions
# Using this class

class Cat:
    def __init__(self, cat_name, cat_age):
        self.name = cat_name
        self.age = cat_age

# Instantiate three Cat objects using the code provided above.
# Outside of the class, create a function that finds the oldest cat and returns the cat.
# Print the following string: “The oldest cat is <cat_name>, and is <cat_age> years old.”. Use the function previously created.

cat1 = Cat("Tom", 1)
cat2 = Cat("John", 3)
cat3 = Cat("Jerry", 5)

def oldest_cat(*args):
    oldest = args[0]
    for cat in args:
        if cat.age > oldest.age:
            oldest = cat
    return oldest

oldest = oldest_cat(cat1, cat2, cat3)
print(f"The oldest cat is {oldest.name}, and is {oldest.age} years old.")


# Exercise 2 : Dogs
# Instructions
# Create a class called Dog.
# In this class, create an __init__ method that takes two parameters : name and height. This function instantiates two attributes, which values are the parameters.
# Create a method called bark that prints the following string “<dog_name> goes woof!”.
# Create a method called jump that prints the following string “<dog_name> jumps <x> cm high!”. x is the height*2.
# Outside of the class, create an object called davids_dog. His dog’s name is “Rex” and his height is 50cm.
# Print the details of his dog (ie. name and height) and call the methods bark and jump.
# Create an object called sarahs_dog. Her dog’s name is “Teacup” and his height is 20cm.
# Print the details of her dog (ie. name and height) and call the methods bark and jump.
# Create an if statement outside of the class to check which dog is bigger. Print the name of the bigger dog.

class Dog:
    def __init__(self, name, height):
        self.name = name
        self.height = height
    
    def bark(self):
        print(f"{self.name} goes woof!")
    
    def jump(self):
        print(f"{self.name} jumps {self.height*2} cm high!")

davids_dog = Dog("Rex", 50)
sarahs_dog = Dog("Teacup", 20)

davids_dog.bark()
davids_dog.jump()

sarahs_dog.bark()
sarahs_dog.jump()

if davids_dog.height > sarahs_dog.height:
    print(f"{davids_dog.name} is bigger")
else:
    print(f"{sarahs_dog.name} is bigger")

    