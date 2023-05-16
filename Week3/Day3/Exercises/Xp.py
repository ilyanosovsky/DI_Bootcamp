# Exercise 1 : Built-In Functions
# Instructions
# Python has many built-in functions.
# If you feel that you don’t know how to properly implement them take a look at the python documentation online.

# Write a program which prints the results of the following python built-in functions: abs(), int(), input().
# Using the __doc__ dunder method create your own documentation which explains the execution of your code. Take a look at the doc method on google for help.



class Dunder:
    """This class is used to show the use of the dunder methods"""

    def __init__(self, value):
        """This method is used to initialize the value of the class"""
        self.value = value

    def __abs__(self):
        """This method is used to return the absolute value of the class"""
        return abs(self.value)
    
    def __int__(self):
        """This method is used to return the integer value of the class"""
        return int(self.value)
    
    def __input__(self):
        """This method is used to return the input value of the class"""
        return input(self.value)
    
example = Dunder(-7.3)

print(abs(example))
print(int(example))
print(Dunder.__doc__)
print(Dunder.__init__.__doc__)
    


# Exercise 2: Currencies
# Instructions

# Using the code above, implement the relevant methods and dunder methods which will output the results below.

    
class Currency:
    def __init__(self, currency, amount):
        self.currency = currency
        self.amount = amount

    def __str__(self):
        return f"{self.amount} {self.currency}"
    
    def __int__(self):
        return self.amount
    
    def __repr__(self):
        return f"Currency('{self.currency}', {self.amount})"
    

    def __add__(self, other):
        if isinstance(other, Currency):
            if self.currency != other.currency:
                raise TypeError(f"Currencies don't match!")
            else:
                return self.amount + other.amount
        else:
            return self.amount + int(other)
        
        
    def __iadd__(self, other):
        if isinstance(other, Currency):
            if self.currency != other.currency:
                raise TypeError("Currencies don't match!")
            else:
                self.amount += other.amount
                return self
        else:
            self.amount += other
            return self
        

c1 = Currency('dollar', 5)
c2 = Currency('dollar', 10)
c3 = Currency('shekel', 1)
c4 = Currency('shekel', 10)

print(str(c1))
print(int(c1))
print(repr(c1))
print(c1 + 5)
print(c1 + c2)
print(c1)
c1 += 5
print(c1)
c1 += c2
print(c1)
print(c1 + c3)








