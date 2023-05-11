secret = """7i3
Tsi
h%x
i #
sM 
$a 
#t%
^r!"""

def create_matrix () :
    list_one = secret.split("\n")
    list_two = []
    for num in range(3) :
        list_two.append([char[num] for char in list_one])
        # print(list_two)
    return list_two
# create_matrix()

def create_sentence () :
    lst = create_matrix()
    sentence = ""
    for column in lst :
        for char in column :
            if char.isalpha() :
                sentence += char
            else :
                sentence += " "
    print(sentence)
create_sentence()
