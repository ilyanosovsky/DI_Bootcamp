# words = ['PYTHON', 'JAVA', 'Php', 'CoBoL', 'Cplus', 'C', 'JAVASCRIPT']

# new_list= []

# for item in words :
#     new_item = item.upper()
#     new_list.append(new_item)
#     if new_item == 'PHP' :
#         break   
# print(new_list)


words = ['PYTHON', 'JAVA', 'Php', 'CoBoL', 'Cplus', 'C', 'JAVASCRIPT']
new_list= []
for item in words :
    new_item = item.upper()
    if new_item == 'PHP' :
        continue   
    new_list.append(new_item)
    
print(new_list)