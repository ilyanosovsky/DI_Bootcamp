# class Dog:

#     def __init__(self, name_dog, age_dog, dog_energy = 100):
#         self.name = name_dog
#         self.age = age_dog
#         self.energy = dog_energy

#     def bark(self):
#         print(f"{self.name} said Woof Woof")
    
#     def is_happy(self, mood):
#         print(f"{self.name} is {mood}")

# class GermanShepard(Dog):
    
#     def _init__(self, name_dog, age_dog, dog_energy, dog_color):
#         super().__init__(name_dog, age_dog, dog_energy)
#         self.color = dog_color

#     def jump(self):
#         print(f"{self.name} jumped {self.age*2} cm high!")

#     def bark(self):
#         print(f"{self.name} said WOOF WOOF I'M A GERMAN SHEPARD")

#     def is_happy(self, mood):
#         super().is_happy(mood)
#         print(f"{self.name} of course is German Shepard")

    

# rex = GermanShepard("Rex", 3)
# my_dog = Dog("Tom", 6)
# rex.bark()
# rex.jump()

# my_dog.is_happy("excited")
# rex.is_happy("sad")


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

# import random

# def game () :
#     lst_names = ["Tom", "John", "Jerry"]
#     lst_lastnames = ["Smith", "Schartz", "Garcia"]
#     lst_jobs = ["developer", "project manager", "designer"]

#     all_employees = []

#     for i in range(10):
#         new_employee = Employee(random.choice(lst_names), random.choice(lst_lastnames), random.randint(18, 65), random.choice(lst_jobs), random.randint(10000, 50000))
#         print(f"User{i+1} fullname: {new_employee.get_fullname()} and age: {new_employee.age} and job: {new_employee.job} and salary: {new_employee.salary}")
#         # all_employees.append(new_employee)

# game()



# Exercise 2
# Create a Developer class, that inherits from the Employee class With the attributes : firstname, lastname, age, job is developer as default, salary is 15000 by default, coding skills (a list by default)
# Create 2 developer object and display his attribute
# Tom Cruiz 30 years old Python
# Angelina Jolie 23 years old Javascript
# Add those methods to the class
# add_skills(self, *skills)
# coding(self) : print a nice sentence with the coding language
# coding_with_partner(self, other_developer) : print a nice sentence with the name of both developers, and their coding language
# override the get_promotion(self, promotion_amount) : that multiplies the salary of the user by the promotion
# Call all the methods, also those from the Employee Class


class Developer(Employee):
    def __init__(self, firstname, lastname, age, job = 'developer', salary = 15000):
        super().__init__(firstname, lastname, age, job, salary)
        self.skills = []

    def add_skills(self, *skills):
        for skill in skills :
            if skill not in self.skills :
                self.skills.append(skill)

    def coding(self):
        all_skills = " , ".join(self.skills)
        sentence = f"{self.firstname} is coding with {all_skills} "
        # print(sentence)
        return sentence

    def coding_with_partner(self, other_developer):
        print(f"{self.coding()} with {other_developer.coding()}")
        

    def get_promotion(self, promotion_amount):
        self.salary *= promotion_amount

dev1 = Developer("Tom", "Cruiz", 30)
dev2 = Developer("Angelina", "Jolie", 23)

dev1.add_skills("Python", "Java")
dev2.add_skills("Javascript", "C++")

dev1.coding()
dev2.coding()
dev1.coding_with_partner(dev2)



