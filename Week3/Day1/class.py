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

class Car :
    def __init__(self, car_brand, car_color, car_speed):
        self.brand = car_brand 
        self.color = car_color
        self.speed = car_speed
        self.current_position = 0

# method
    def move(self):
        self.current_position += 10

# my_car = Car("Ferrari", "Red", 300)
# my_car.move()
# print(my_car.brand)
# print(my_car.color)
# print(my_car.speed)
# print(my_car.current_position)


class Dog :
    def __init__(self, name, age, color):
        self.name = name 
        self.age = age
        self.color = color
        self.current_position = 0
        self.energy = 100

    def move(self):
        self.current_position += 10

    def bark(self):
        print(f"{self.name} said Woof woof")

    def play(self, type = "stick"):
        if self.energy < 0:
            self.sleep()
        else :
            if type == "ball":
                self.energy -= 10
            elif type == "stick":
                self.energy -= 20
            elif isinstance(type, Dog):
                print(f"{self.name} is playing with {type.name}")
                self.energy -= 30
                type.energy -= 30

    def sleep(self):
        self.energy += 50
        
            

tom_dog = Dog("Tom", 1, "White")
john_dog = Dog("John", 3, "Black")

tom_dog.play(john_dog)

print(f"Tom's energy: {tom_dog.energy}")
print(f"John's energy: {john_dog.energy}")
