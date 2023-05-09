# Instructions
# Challenge 1
# Ask a user for a word
# Write a program that creates a dictionary. This dictionary stores the indexes of each letter in a list.

# Make sure the letters are the keys.
# Make sure the letters are strings.
# Make sure the indexes are stored in a list and those lists are values.
# Examples
# "dodo" ➞ { "d": [0, 2], "o": [1, 3] }


word = input("Enter a word: ")
word_dict = {}
for i in range(len(word)):
    if word[i] not in word_dict:
        word_dict[word[i]] = [i]
    else:
        word_dict[word[i]].append(i)
print(word_dict)



# Challenge 2
# Create a program that prints a list of the items you can afford in the store with the money you have in your wallet.
# Sort the list in alphabetical order.
# Return “Nothing” if you can’t afford anything from the store.
# Examples
# The key is the product, the value is the price

# items_purchase = {
#   "Water": "$1",
#   "Bread": "$3",
#   "TV": "$1,000",
#   "Fertilizer": "$20"
# }

# wallet = "$300"

# ➞ ["Bread", "Fertilizer", "Water"]


items_purchase = {
    "Water": "$1",
    "Bread": "$3",
    "TV": "$1000",
    "Fertilizer": "$20"
}

wallet = "$300"

wallet = int(wallet[1:])
affordable_items = []
for item in items_purchase:
    if int(items_purchase[item][1:]) <= wallet:
        affordable_items.append(item)
affordable_items.sort() 
print(affordable_items)
