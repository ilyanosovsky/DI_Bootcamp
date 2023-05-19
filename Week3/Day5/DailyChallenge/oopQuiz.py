# Instructions
# Part 1 : Quizz :
# Answer the following questions

# What is a class?
# A class is a blueprint for creating objects (a particular data structure), providing initial values for state
#  (member variables or attributes), and implementations of behavior (member functions or methods).

# What is an instance?
# An instance is a specific realization of any object. An object may be varied in a number of ways.

# What is encapsulation?
# Encapsulation is one of the fundamental concepts in object-oriented programming (OOP).
# It describes the idea of bundling data and methods that work on that data within one unit, e.g.

# What is abstraction?
# Abstraction is the process of hiding the internal details and showing only the functionality.

# What is inheritance?
# Inheritance is a mechanism in which one class acquires the property of another class.

# What is multiple inheritance?
# Multiple inheritance is a feature of some object-oriented computer programming languages 
# in which an object or class can inherit characteristics and features from more than one parent object or parent class.


# What is polymorphism?
# Polymorphism is the ability of an object to take on many forms. The most common use of polymorphism in OOP occurs

# What is method resolution order or MRO?
# Method Resolution Order (MRO) is the order in which methods should be inherited in the presence of multiple inheritance.



# Part 2: Create A Deck Of Cards Class.
# The Deck of cards class should NOT inherit from a Card class.

# The requirements are as follows:

# The Card class should have a suit (Hearts, Diamonds, Clubs, Spades) and a value (A,2,3,4,5,6,7,8,9,10,J,Q,K)
# The Deck class :
# should have a shuffle method which makes sure the deck of cards has all 52 cards and then rearranges them randomly.
# should have a method called deal which deals a single card from the deck. After a card is dealt, it should be removed from the deck.

import random

class Card:
    def __init__(self, suit, value):
        self.suit = suit
        self.value = value

class Deck:
    def __init__(self):
        self.cards = []
        self.suits = ["Hearts", "Diamonds", "Clubs", "Spades"]
        self.values = ["A","2","3","4","5","6","7","8","9","10","J","Q","K"]
        for suit in self.suits:
            for value in self.values:
                self.cards.append(Card(suit, value))
    
    def shuffle(self):
        random.shuffle(self.cards)
    
    def deal(self):
        return self.cards.pop()
    
    def random_card(self):
        return random.choice(self.cards)
    
    def __str__(self):
        return f"Deck of {len(self.cards)} cards"
    
    def __repr__(self):
        return f"Deck of {len(self.cards)} cards"
    
deck = Deck()
deck.shuffle()
random_card = deck.random_card()
print(f"Random Card: {random_card.value} of {random_card.suit}")

    




    

