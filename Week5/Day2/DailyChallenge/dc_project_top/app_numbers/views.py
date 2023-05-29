from django.shortcuts import render
from .models import Person

# Create your views here.
def phonenumber(request):

    person_all = Person.objects.all()
    context = {'person_list': person_all}

    return render(request, "phonenumber.html", context)

def name(request):
    return render(request, "name.html")