from django.shortcuts import render
from django.views.generic.edit import CreateView
from django.views.generic import ListView
from .models import Film, Country, Category, Director, Review
from .forms import FilmForm, DirectorForm, ReviewForm
from django.urls import reverse_lazy
from django.db.models import Q


# Create your views here.

class HomePageView(ListView):
    template_name = "homepage.html"
    model = Film
    context_object_name = "films"

class FilmCreateView(CreateView):
    model = Film
    template_name = "add_film.html"
    form_class = FilmForm
    success_url = reverse_lazy("add_film")

class DirectorCreateView(CreateView):
    model = Director
    template_name = "add_director.html"
    form_class = DirectorForm
    success_url = reverse_lazy("add_director")

# daily challenge
class ReviewCreateView(CreateView):
    model = Review
    template_name = "add_review.html"
    form_class = ReviewForm
    success_url = reverse_lazy("add_review")