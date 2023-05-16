# Exercise 1
# Create a Employee class, With the attributes : firstname, lastname, age, job, salary
# Create 2 users object and display their attribute
# Lea Smith 30 years old developer
# David Schartz 20 years old teacher
# Add those methods to the class
# get_fullname(self) : that return the firstname + lastname
# happy_birthday(self) : that return the age incremented by one
# get_promotion(self, promotion_amount) : that increment the salary of the user by the promotion
# implement the gt dunder method that receives 2 different employees, and returns the employee with the highest salary
# implement the add dunder method that that receives 2 different employees, and returns the total salary of the 2 employees
# implement the str dunder method that introduce the employee
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

    def __gt__(self, other):
        if self.salary > other.salary:
            return self.firstname
        else:
            return other.firstname
        
    def __add__(self, other):
        return self.salary + other.salary
    
    def __str__(self):
        return f"{self.firstname} {self.lastname} is a {self.job} and is {self.age} years old and earns {self.salary} euros per month."


empl1 = Employee("Lea", "Smith", 30, "developer", 30000)
empl2 = Employee("David", "Schartz", 20, "teacher", 20000)

print(empl1)
print(empl1 > empl2)
print(empl1 + empl2)