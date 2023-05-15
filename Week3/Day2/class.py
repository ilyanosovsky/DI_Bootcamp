class Dog:

    def __init__(self, name_dog, age_dog, dog_energy = 100):
        self.name = name_dog
        self.age = age_dog
        self.energy = dog_energy

    def bark(self):
        print(f"{self.name} said Woof Woof")
    
    def is_happy(self, mood):
        print(f"{self.name} is {mood}")

class GermanShepard(Dog):
    
    def _init__(self, name_dog, age_dog, dog_energy, dog_color):
        super().__init__(name_dog, age_dog, dog_energy)
        self.color = dog_color

    def jump(self):
        print(f"{self.name} jumped {self.age*2} cm high!")

    def bark(self):
        print(f"{self.name} said WOOF WOOF I'M A GERMAN SHEPARD")

    def is_happy(self, mood):
        super().is_happy(mood)
        print(f"{self.name} of course is German Shepard")

    

rex = GermanShepard("Rex", 3)
my_dog = Dog("Tom", 6)
rex.bark()
rex.jump()

my_dog.is_happy("excited")
rex.is_happy("sad")


