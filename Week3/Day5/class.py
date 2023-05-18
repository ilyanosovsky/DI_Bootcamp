import json

# user = {
#     "firstName": "Jane",
#     "lastName": "Doe",
#     "hobbies": ["running", "sky diving", "singing"],
#     "age": 35,
#     "email" : None,
#     "children": [
#         {
#             "firstName": "Alice",
#             "age": 6,
#             "loves_school" : True
#         },
#         {
#             "firstName": "Bob",
#             "age": 8,
#             "loves_school" : False
#         }
#     ]
# }

# # convert thr dictionary to a json string

# my_json = json.dumps(user)
# print(my_json)

# # convert the json string to a dictionary

# person_str = '{"username": "john", "age": 30, "email": null}'
# person_dict = json.loads(person_str)
# print(person_dict)

# import requests
# response = requests.get("http://api.open-notify.org/iss-now.json")
# print(dir(response))
# print(response.status_code)
# print(response.text)
# info = json.loads(response.content)
# print(info)
# lattitude = info["iss_position"]["latitude"]
# longitude = info["iss_position"]["longitude"]

# sentence = f"The ISS is at latitude {lattitude} and longtime {longitude}"
# print(sentence)





import requests
response = requests.get("https://pokeapi.co/api/v2/pokemon/pikachu")
info = response.json()
type_pikachu = info["types"][0]["type"]["name"]

sentence = f"Pikachu is a {type_pikachu} type pokemon."
print(sentence)
