# num = 12
# print(type(num))
# print(isinstance(num, int))

# print(dir(num))


# class Car :
#     # init function - constructor function
#     # self means the object itself
#     def __init__(self):
#         self.brand = "Ferrari" 
#         self.color = "Red"
#         self.speed = 300

# my_car = Car()
# friend_car = Car()
# # my_car is sn instance of the class Car
# # my_car is an object of the class Car
# # when we create an object className() --> it automatically calls the __init__ function
# print(my_car.brand)   # objectName.attributeName

# class Car :
#     def __init__(self, car_brand, car_color, car_speed):
#         self.brand = car_brand 
#         self.color = car_color
#         self.speed = car_speed
#         self.current_position = 0

# # method
#     def move(self):
#         self.current_position += 10

# # my_car = Car("Ferrari", "Red", 300)
# # my_car.move()
# # print(my_car.brand)
# # print(my_car.color)
# # print(my_car.speed)
# # print(my_car.current_position)


# class Dog :
#     def __init__(self, name, age, color):
#         self.name = name 
#         self.age = age
#         self.color = color
#         self.current_position = 0
#         self.energy = 100

#     def move(self):
#         self.current_position += 10

#     def bark(self):
#         print(f"{self.name} said Woof woof")

#     def play(self, type = "stick"):
#         if self.energy < 0:
#             self.sleep()
#         else :
#             if type == "ball":
#                 self.energy -= 10
#             elif type == "stick":
#                 self.energy -= 20
#             elif isinstance(type, Dog):
#                 print(f"{self.name} is playing with {type.name}")
#                 self.energy -= 30
#                 type.energy -= 30

#     def sleep(self):
#         self.energy += 50
        
            

# tom_dog = Dog("Tom", 1, "White")
# john_dog = Dog("John", 3, "Black")

# tom_dog.play(john_dog)

# print(f"Tom's energy: {tom_dog.energy}")
# print(f"John's energy: {john_dog.energy}")


# Exercise 1
# Create a Employee class, With the attributes : firstname, lastname, age, job, salary
# Create 2 users object and display their attribute
# Lea Smith 30 years old developer 30000
# David Schartz 20 years old project manager 20000
# Add those methods to the class
# get_fullname(self) : that return the firstname + lastname
# happy_birthday(self) : that return the age incremented by one
# get_promotion(self, promotion_amount) : that increment the salary of the user by the promotion
# Call all the methods

class Employee :
    def __init__(self, firstname, lastname, age, job, salary):
        self.firstname = firstname
        self.lastname = lastname
        self.age = age
        self.job = job
        self.salary = salary

    def get_fullname(self):
        return self.firstname + " " + self.lastname

    def happy_birthday(self):
        self.age += 1

    def get_promotion(self, promotion_amount):
        self.salary += promotion_amount


# user1 = Employee("Lea", "Smith", 30, "developer", 30000)
# user2 = Employee("David", "Schartz", 20, "project manager", 20000)

# print(f"User1 fullname: {user1.get_fullname()} and age: {user1.age} and job: {user1.job} and salary: {user1.salary}")
# print(f"User2 fullname: {user2.get_fullname()} and age: {user2.age} and job: {user2.job} and salary: {user2.salary}")
# user1.get_promotion(1000)
# user1.happy_birthday()
# print(f"User1 fullname: {user1.get_fullname()} and age: {user1.age} and job: {user1.job} and salary: {user1.salary}")

import random

def game () :
    lst_names = ["Tom", "John", "Jerry"]
    lst_lastnames = ["Smith", "Schartz", "Garcia"]
    lst_jobs = ["developer", "project manager", "designer"]

    all_employees = []

    for i in range(10):
        new_employee = Employee(random.choice(lst_names), random.choice(lst_lastnames), random.randint(18, 65), random.choice(lst_jobs), random.randint(10000, 50000))
        print(f"User{i+1} fullname: {new_employee.get_fullname()} and age: {new_employee.age} and job: {new_employee.job} and salary: {new_employee.salary}")
        # all_employees.append(new_employee)

game()
