# Reverse The Sentence
# Write a program to reverse the sentence wordwise.

# Input:
# You have entered a wrong domain
# Output:
# domain wrong a entered have You

# REverseinp= raw_input()


Reverseinp = input("Enter a sentence: ")
Reverseinp = Reverseinp.split()
reversed = Reverseinp[::-1]
reversed = " ".join(reversed)
print(reversed) 