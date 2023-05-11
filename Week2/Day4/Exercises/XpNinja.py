# Exercise 1 : What’s Your Name ?
# Instructions
# Write a function called get_full_name() that takes three arguments: 1: first_name, 2: middle_name 3: last_name.
# middle_name should be optional, if it’s omitted by the user, the name returned should only contain the first and the last name.
# For example, get_full_name(first_name="john", middle_name="hooker", last_name="lee") will return John Hooker Lee.
# But get_full_name(first_name="bruce", last_name="lee") will return Bruce Lee.

def get_full_name(first_name,last_name, middle_name=""):
    count = 1
    full_name = ''
    for name in (first_name, middle_name, last_name):
        full_name += name.capitalize()
        if name and count !=3: full_name += ' '
        count += 1
    return (full_name)

print(get_full_name(first_name="bruce", last_name="lee"))
print(get_full_name(first_name="john", middle_name="hooker", last_name="lee"))

# Exercise 2 : From English To Morse
# Instructions
# Write a function that converts English text to morse code and another one that does the opposite.
# Hint: Check the internet for a translation table, every letter is separated with a space and every word is separated with a slash /.

ENGLISH = 'A B C D E F G H I J K L M N O P Q R S T U V W X Y Z 1 2 3 4 5 6 7 8 9 0'
MORSE = '·−  −···  −·−·  −··  ·  ··−·  −−·  ····  ··  ·−−−  −·−  ·−··  −−  −·  −−−  ·−−·  −−·−  ·−·  ···  −  ··−  ···−  ·−−  −··−  −·−−  −−··  ·−−−−  ··−−−  ···−−  ····−  ·····  −····  −−···  −−−··  −−−−·  −−−−−'

def to_morse(text):
    dictionary = dict(zip(ENGLISH.split(), MORSE.split()))

