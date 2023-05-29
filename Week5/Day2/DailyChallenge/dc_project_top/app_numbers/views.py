from django.shortcuts import render
from .models import Person

def phonenumber(request, phone_number):
    person_all = Person.objects.all()
    if str(phone_number) in [str(p.phone_number) for p in person_all]:
        for p in person_all:
            if str(p.phone_number) == str(phone_number):
                context = {
                    'found': True,
                    'name': p.name,
                    'email': p.email,
                    'address': p.address,
                    'phone_number': p.phone_number
                    }
    else:
        context = {}
    
    return render(request, 'phonenumber.html', context)


def name(request, name):
    person_all = Person.objects.all()
    if name in [str(p.name) for p in person_all]:
        for p in person_all:
            if p.name == name:
                context = {
                    'found': True,
                    'name': p.name,
                    'email': p.email,
                    'address': p.address,
                    'phone_number': p.phone_number
                    }
    else:
        context = {}
    
    return render(request, 'name.html', context)