# Subset Sum
# Problem Statement
# Given a list of numbers and a target, write a function to determine if the target can be calculated by summing together any 2 numbers in the list.
# The function should return True if the target can be calculated and False if not.

# For ease of analysis and to see whats going on, we will also print True and the 2 numbers, or False.

nums = [12, -7, 20, 1, 4, -10, -1]

# def subsetsum(numbers: list, target: int) -> bool:
#     hashmap = {}
#     for i in range(len(numbers)):
#         res = target - numbers[i]
#         if res in hashmap:
#             return True
#         hashmap[numbers[i]] = i
#     else:
#         return False

def subsetsum(numbers: list, target: int) -> bool:
    hashtable = set({})

    for current_number in numbers:
        number_to_find = target - current_number

        if number_to_find in hashtable:
            print("True: ", current_number, number_to_find)
            return True
        hashtable.add(current_number)

    print("False")
    return False


subsetsum(nums, 1) # False
subsetsum(nums, 2) # True: 12,  -10
subsetsum(nums, 3) # True: 4,  -1
subsetsum(nums, 4) # False