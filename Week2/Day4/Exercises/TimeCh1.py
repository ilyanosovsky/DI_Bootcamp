


sentence = input("Enter a sentence: ")
letter = input("Enter a letter: ")

def count(sentence, letter):
    count = 0
    for i in sentence:
        if i == letter:
            count += 1
    return count

print(count(sentence, letter))