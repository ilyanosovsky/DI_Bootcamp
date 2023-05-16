# Instructions :
# The goal is to create a class that represents a simple circle.
# A Circle can be defined by either specifying the radius or the diameter.
# The user can query the circle for either its radius or diameter.

# Other abilities of a Circle instance:

# Compute the circle’s area
# Print the circle and get something nice
# Be able to add two circles together
# Be able to compare two circles to see which is bigger
# Be able to compare two circles and see if there are equal
# Be able to put them in a list and sort them

import turtle

class Circle:
    circles = []

    def __init__(self, radius = 0, diameter = 0):
        self.radius = float(radius)
        self.diameter = float(diameter)
        Circle.circles.append(self)

    @classmethod
    def from_radius(cls, radius):
        return cls(radius = radius, diameter = radius * 2)
    
    @classmethod
    def from_diameter(cls, diameter):
        return cls(diameter = diameter, radius = diameter / 2)
    
    def get_area(self):
        return self.radius ** 2 * 3.14
    
    def __add__(self, other):
        return self.get_area() + other.get_area()
    
    # Be able to compare two circles to see which is bigger

    def __gt__(self, other):
        return self.get_area() > other.get_area()
    
    # Be able to compare two circles and see if there are equal
    
    def __eq__(self, other):
        return self.get_area() == other.get_area()
    
    # Be able to put them in a list and sort them



circleA = Circle.from_diameter(diameter = 50)
circleB = Circle.from_radius(radius = 4)


circleA.get_area()
circleB.get_area()

print(circleA.radius)
print(circleB.radius)

print("add" , circleA + circleB)

print("compare" , circleA > circleB)

print("equal" , circleA == circleB)

turtle.circle(circleA.radius)

print(Circle.circles)


