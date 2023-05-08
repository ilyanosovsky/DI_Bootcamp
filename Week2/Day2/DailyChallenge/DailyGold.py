# Instructions
# Ask the user for their birthdate (specify the format, for example: DD/MM/YYYY).
# Display a little cake as seen below:
#        ___iiiii___
#       |:H:a:p:p:y:|
#     __|___________|__
#    |^^^^^^^^^^^^^^^^^|
#    |:B:i:r:t:h:d:a:y:|
#    |                 |
#    ~~~~~~~~~~~~~~~~~~~

# The number of candles on the cake should be the last number of the users age, if they are 53, then add 3 candles.

# Bonus : If they were born on a leap year, display two cakes !

birthday = input("Enter your birthday in the format DD/MM/YYYY: ")
birthday_list = birthday.split("/")  # birthday_list = ["DD", "MM", "YYYY"]
age = 2023 - int(birthday_list[2]) # calculate the number of candles by age
candles = age % 10
if candles == 0:
    print("        ___________")
    print("       |:H:a:p:p:y:|")
    print("     __|___________|__")
    print("    |^^^^^^^^^^^^^^^^^|")
    print("    |:B:i:r:t:h:d:a:y:|")
    print("    |                 |")
    print("    ~~~~~~~~~~~~~~~~~~~")
elif candles == 1:
    print("        _____i_____")
    print("       |:H:a:p:p:y:|")
    print("     __|___________|__")
    print("    |^^^^^^^^^^^^^^^^^|")
    print("    |:B:i:r:t:h:d:a:y:|")
    print("    |                 |")
    print("    ~~~~~~~~~~~~~~~~~~~")
elif candles == 2:
    print("        ____ii_____")
    print("       |:H:a:p:p:y:|")
    print("     __|___________|__")
    print("    |^^^^^^^^^^^^^^^^^|")
    print("    |:B:i:r:t:h:d:a:y:|")
    print("    |                 |")
    print("    ~~~~~~~~~~~~~~~~~~~")
elif candles == 3:
    print("        ___iii___")
    print("       |:H:a:p:p:y:|")
    print("     __|___________|__")
    print("    |^^^^^^^^^^^^^^^^^|")
    print("    |:B:i:r:t:h:d:a:y:|")
    print("    |                 |")
    print("    ~~~~~~~~~~~~~~~~~~~")
elif candles == 4:
    print("        ___iiii___")
    print("       |:H:a:p:p:y:|")
    print("     __|___________|__")
    print("    |^^^^^^^^^^^^^^^^^|")
    print("    |:B:i:r:t:h:d:a:y:|")
    print("    |                 |")
    print("    ~~~~~~~~~~~~~~~~~~~")
elif candles == 5:
    print("        ___iiiii___")
    print("       |:H:a:p:p:y:|")
    print("     __|___________|__")
    print("    |^^^^^^^^^^^^^^^^^|")
    print("    |:B:i:r:t:h:d:a:y:|")
    print("    |                 |")
    print("    ~~~~~~~~~~~~~~~~~~~")
elif candles == 6:
    print("        ___iiiiii__")
    print("       |:H:a:p:p:y:|")
    print("     __|___________|__")
    print("    |^^^^^^^^^^^^^^^^^|")
    print("    |:B:i:r:t:h:d:a:y:|")
    print("    |                 |")
    print("    ~~~~~~~~~~~~~~~~~~~")
elif candles == 7:
    print("        __iiiiiii__")
    print("       |:H:a:p:p:y:|")
    print("     __|___________|__")
    print("    |^^^^^^^^^^^^^^^^^|")
    print("    |:B:i:r:t:h:d:a:y:|")
    print("    |                 |")
    print("    ~~~~~~~~~~~~~~~~~~~")
elif candles == 8:
    print("        __iiiiiiii_")
    print("       |:H:a:p:p:y:|")
    print("     __|___________|__")
    print("    |^^^^^^^^^^^^^^^^^|")
    print("    |:B:i:r:t:h:d:a:y:|")
    print("    |                 |") 
    print("    ~~~~~~~~~~~~~~~~~~~")
elif candles == 9:
    print("        _iiiiiiiii_")
    print("       |:H:a:p:p:y:|")
    print("     __|___________|__") 
    print("    |^^^^^^^^^^^^^^^^^|")
    print("    |:B:i:r:t:h:d:a:y:|")
    print("    |                 |") 
    print("    ~~~~~~~~~~~~~~~~~~~")
else:
    print("        iiiiiiiiii")
    print("       |:H:a:p:p:y:|")
    print("     __|___________|__") 
    print("    |^^^^^^^^^^^^^^^^^|")
    print("    |:B:i:r:t:h:d:a:y:|")
    print("    |                 |") 
    print("    ~~~~~~~~~~~~~~~~~~~")























# if int(birthday_list[2]) == 2 and int(birthday_list[0]) == 29:
#     print("        ___iiiii___")
#     print("       |:H:a:p:p:y:|")
#     print("     __|___________|__")
#     print("    |^^^^^^^^^^^^^^^^^|")
#     print("    |:B:i:r:t:h:d:a:y:|")
#     print("    |                 |")
#     print("    ~~~~~~~~~~~~~~~~~~~")
#     print("        ___iiiii___")
#     print("       |:H:a:p:p:y:|")
#     print("     __|___________|__")
#     print("    |^^^^^^^^^^^^^^^^^|")
#     print("    |:B:i:r:t:h:d:a:y:|")
#     print("    |                 |")
#     print("    ~~~~~~~~~~~~~~~~~~~")