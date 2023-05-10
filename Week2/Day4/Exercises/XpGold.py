# Exercise 1 : When Will I Retire ?
# Instructions
# The point of the exercise is to check if a person can retire depending on their age and their gender.
# Note : Retirement age in Israel is 67 for men, and 62 for women (born after April, 1947).

# Create a function get_age(year, month, day)
# Hard-code the current year and month in your code (there are better ways of doing this, but for now it will be enough.)
# After calculating the age of a person, the function should return the age (the age is an integer).
# Create a function can_retire(gender, date_of_birth).
# It should call the get_age function (with what arguments?) in order to receive an age.
# Now it has all the information it needs in order to determine if the person with the given gender and date of birth is able to retire or not.
# Calculate. You may need to do a little more hard-coding here.
# Return True if the person can retire, and False if he/she can’t.

def get_age(year, month, day):
    current_year = 2023
    current_month = 5
    age = current_year - year
    if current_month < month:
        age -= 1
    return age

def can_retire(gender, date_of_birth):
    get_age(date_of_birth[0], date_of_birth[1], date_of_birth[2])
    for key, value in date_of_birth.items():
        print(key, value)

age_now = get_age(int(input("Enter your year of birth (YYYY): ")), int(input("Enter your month of birth: ")), int(input("Enter your day of birth: ")))
sex_of_person = input("What is your sex? (m/f): ")

print(f"Your age is {age_now} and your sex is {sex_of_person}")

if age_now >= 62 and sex_of_person == "f" :
    print("You can retire")
elif age_now >= 67 and sex_of_person == "m" :
    print("You can retire")
else:
    print("You can't retire")




