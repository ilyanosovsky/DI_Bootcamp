from django.shortcuts import render
from .models import Gif, Category
# Create your views here.

def homepage(request):
    return render(request, "homepage.html")