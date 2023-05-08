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