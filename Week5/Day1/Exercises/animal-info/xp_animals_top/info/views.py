from django.shortcuts import render
import json
from django.http import HttpResponse

with open('animal_json.json') as f:
    animal_data = json.load(f)

def animal(request, animal_id):

    for animal in animal_data:
        if animal['id'] == animal_id:
            # animal with the given id found
            # extract relevant information and create a context dictionary
            animal_name = animal['name']
            animal_legs = animal['legs']
            animal_weight = animal['weight']
            animal_height = animal['height']
            animal_speed = animal['speed']
            animal_family = animal['family']
            
            context = {
                'name': animal_name,
                'legs': animal_legs,
                'weight': animal_weight,
                'height': animal_height,
                'speed': animal_speed,
                'family': animal_family
            }
            return render(request, 'animal.html', context)

    return HttpResponse("No animal with that id found")



def family(request):
    return render(request, "family.html")