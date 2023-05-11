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



