# Perfect number
# Ask the user for a number and print whether or not it is a perfect number. If yes, print True else False.

perfect_number = int(input("Enter a number: "))
sum = 0
for i in range(1, perfect_number):
    if perfect_number % i == 0:
        sum += i
if sum == perfect_number:
    print(True)
else:
    print(False)

