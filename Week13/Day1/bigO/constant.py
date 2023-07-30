
# O(2) - const, GREAT!
def constant_algo(items: list):
    result = items[0] * items[0] #1
    print(result)

constant_algo([1,2,3])

# O(n) - linear, fair!
def linear_algo(items: list):
    for item in items:
        print(item)

a_list = [1,2,3,4]

linear_algo(a_list)

# O(n^2) - quadratic - bad
def quadratic_algo(items: list):
    for item in items:
        for item2 in items:
            print(item, ' ', item2)

quadratic_algo(a_list)


          

