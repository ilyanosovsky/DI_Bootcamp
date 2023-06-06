from typing import Any, Dict, Optional
from django.db.models.query import QuerySet
from django.shortcuts import render, reverse, redirect
from .models import *
from accounts.models import UserProfile
from django.views.generic import ListView, View, DetailView
from django.views.generic.edit import CreateView, UpdateView, DeleteView
from django.urls import reverse_lazy
from .forms import FilmForm, DirectorForm, PosterForm, ReviewForm
from django.contrib.auth.mixins import UserPassesTestMixin
from django.contrib.messages.views import SuccessMessageMixin
from django.http import HttpResponseRedirect


# Create your views here.

class HomePageView(ListView):
    template_name = "homepage.html"
    model = Film
    context_object_name = "films"

    def get_queryset(self) -> QuerySet[Any]:
        return Film.objects.order_by('director')

class FilmCreateView(CreateView):
    model = Film
    template_name = "add_film.html"
    form_class = FilmForm
    success_url = reverse_lazy("add_film")

    def form_valid(self, form):
        data = self.request.POST
        if form.is_valid():
            new_film = form.save()
            poster_form = PosterForm(data)
            if poster_form.is_valid():
                image = poster_form.cleaned_data['image']
                explanation_img = poster_form.cleaned_data['explanation_img']
                film = new_film
                new_poster = Poster.objects.create(image=image, explanation_img=explanation_img, film=film)
                print("NEW POSTER: ", new_poster)
        return super().form_valid(form)
    
    def get_success_url(self) -> str:
        return reverse('home')
    
    def get_context_data(self, **kwargs: Any):
        context = super(FilmCreateView, self).get_context_data(**kwargs)
        context = {'title': 'Add Film', 'form': FilmForm(), 'poster_form': PosterForm()}
        return context
    

    
class FilmDeleteView(UserPassesTestMixin, SuccessMessageMixin, DeleteView):
    model = Film
    template_name = 'delete_film.html'
    success_message = "Delete was created successfully"
    success_url = reverse_lazy('confirm_delete')

    def test_func(self):
        return self.request.user.is_superuser
    
def confirm_delete(request):
    return render(request, 'confirm_delete.html')
    
    
class AddPosterView(CreateView):
    model = Poster
    form_class = PosterForm
    template_name = 'add_poster.html'
    success_url = reverse_lazy('add_poster')

    def form_valid(self, form):
        return super().form_valid(form)
    
    def get_success_url(self):
        return reverse('home')
    
    def get_context_data(self, **kwargs: Any):
        context = super(AddPosterView, self).get_context_data(**kwargs)
        context['title'] = 'Add Poster'
        return context

class DirectorCreateView(CreateView):
    model = Director
    template_name = "add_director.html"
    form_class = DirectorForm
    success_url = reverse_lazy("add_director")

    def form_valid(self, form):
        return super().form_valid(form)
    
    def get_success_url(self) -> str:
        return reverse('home')
    
    def get_context_data(self, **kwargs: Any):
        context = super(DirectorCreateView, self).get_context_data(**kwargs)
        context['title'] = 'Add Director'
        return context
    
# daily challenge
class ReviewCreateView(CreateView):
    model = Review
    template_name = "add_review.html"
    form_class = ReviewForm
    success_url = reverse_lazy("add_review")

    def form_valid(self, form):
        return super().form_valid(form)
    
    def get_success_url(self) -> str:
        return reverse('home')
    
    def get_context_data(self, **kwargs: Any):
        context = super(ReviewCreateView, self).get_context_data(**kwargs)
        context['title'] = 'Add Review'
        return context
    
class UpdateFilmView(UserPassesTestMixin, UpdateView):
    model = Film
    form_class = FilmForm
    template_name = 'edit_film.html'
    success_url = reverse_lazy('home')

    def test_func(self):
        return self.request.user.is_superuser
    
    def get_context_data(self, **kwargs: Any):
        context = super(UpdateFilmView, self).get_context_data(**kwargs)
        context['title'] = 'Edit Film'
        return context
        
class FavoriteFilmView(View):
    model = UserProfile

    def post(self, request, pk):
        user = request.user
        film = Film.objects.get(id=pk)

        if film in user.favorite_films.all():
            user.favorite_films.remove(film)
        else:
            user.favorite_films.add(film)

        return HttpResponseRedirect(request.META.get('HTTP_REFERER'))
    
class FilmDetailView(DetailView):
    model = Film
    template_name = 'film_detail.html'

    def get_context_data(self, **kwargs):
        context = super(FilmDetailView, self).get_context_data(**kwargs)
        context['title'] = Film.objects.get(id=self.kwargs["pk"]).title
        return context

    def get_queryset(self, **kwargs):
        return Film.objects.filter(id=self.kwargs["pk"])