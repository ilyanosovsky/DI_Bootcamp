# Exercise 1 : Cars
# Instructions
# Copy the following string into your code: "Volkswagen, Toyota, Ford Motor, Honda, Chevrolet".
# Convert it into a list using Python (don’t do it by hand!).
# Print out a message saying how many manufacturers/companies are in the list.
# Print the list of manufacturers in reverse/descending order (Z-A).
# Using loops or list comprehension:
# Find out how many manufacturers’ names have the letter ‘o’ in them.
# Find out how many manufacturers’ names do not have the letter ‘i’ in them.

cars = "Volkswagen, Toyota, Ford Motor, Honda, Chevrolet"
cars_list = cars.split(", ")
print(cars_list)
print(f"There are {len(cars_list)} manufacturers in the list.")
cars_list.sort(reverse=True)
print(cars_list)
cars_list_o = []
cars_list_no_i = []
for i in range(len(cars_list)):
    if "o" in cars_list[i]:
        cars_list_o.append(cars_list[i])
    if "i" not in cars_list[i]:
        cars_list_no_i.append(cars_list[i])
print(f"There are {len(cars_list_o)} manufacturers with the letter 'o' in them.")
print(f"There are {len(cars_list_no_i)} manufacturers without the letter 'i' in them.")

# Bonus: There are a few duplicates in this list:["Honda","Volkswagen", "Toyota", "Ford Motor", "Honda", "Chevrolet", "Toyota"]
# Remove these programmatically. (Hint: you can use set to help you).
# Print out the companies without duplicates, in a comma-separated string with no line-breaks (eg. “Acura, Alfa Romeo, Aston Martin, …”), 
# also print out a message saying how many companies are now in the list.

new_cars = ["Honda","Volkswagen", "Toyota", "Ford Motor", "Honda", "Chevrolet", "Toyota"]
new_cars = list(set(new_cars))
print(new_cars)
print(f"There are {len(new_cars)} manufacturers in the list.")

# Bonus: Print out the list of manufacturers in ascending order (A-Z), but reverse the letters of each manufacturer’s name.

new_cars.sort()
print(new_cars)
for i in range(len(new_cars)):
    new_cars[i] = new_cars[i][::-1]
print(new_cars)
