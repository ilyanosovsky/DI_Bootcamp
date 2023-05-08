colors = ["red", "blue",[1, 2, 3]]
colors.append("green")   # Adds another element to the end of the list
print(colors)


colors.insert(1, "yellow")  # Adds another element to the list at the specified index
print(colors)

colors[3].insert(1, "orange") # Adds another element to the list at the specified index
print(colors)

colors = ["red", "blue", "green"]
answ = input("give position and color to insert")
answ = answ.split(" ")
colors.insert(int(answ[0]), answ[1])
print(colors)

colors = ["red", "blue", "green"]
colors.pop()  # Removes the last element from the list
print(colors)

colors = ["red", "blue", "green"]
colors.remove("blue")  # Removes the first element from the list that matches the given value
print(colors)

colors = ["red", "blue", "green"]
new_list = colors[0:2]  # Creates a new list from the given start and end index
print(new_list)

colors = ["red", "blue", "green"]
new_list = colors[1:]  # Creates a new list from the given start index to the end of the list   
print(new_list)

colors = ["red", "blue", "green", "yellow", "orange", "purple"]
new_list = colors[::2]  # Creates a new list from the given start and end index, skipping every second element
print(new_list)