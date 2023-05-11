# Instructions
# Write a program that accepts a comma separated sequence of words as input and prints the words in a comma-separated sequence after sorting them alphabetically.
# Use List Comprehension
# Example:

# Suppose the following input is supplied to the program: without,hello,bag,world
# Then, the output should be: bag,hello,without,world

def sort_words():
    words = input("Enter a comma separated sequence of words: ").split(",")
    words.sort()
    print(",".join(words))

sort_words()


# Use List Comprehension

def sort_words():
    words = "without,hello,bag,world"
    new_words = [word for word in words.split(",")]
    new_words.sort()
    print(",".join(new_words))

sort_words()



