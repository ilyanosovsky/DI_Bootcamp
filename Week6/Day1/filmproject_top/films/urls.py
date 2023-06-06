from django.urls import path
from .views import (HomePageView,
                    FilmCreateView,
                    DirectorCreateView,
                    ReviewCreateView,
                    AddPosterView,
                    UpdateFilmView,
                    FilmDeleteView,
                    confirm_delete)

urlpatterns = [
        path("homepage/", HomePageView.as_view(), name="home"),
        path("add_film/", FilmCreateView.as_view(), name="add_film"),
        path("add_director/", DirectorCreateView.as_view(), name="add_director"),
        path("add_review/", ReviewCreateView.as_view(), name="add_review"),
        path('add_poster/', AddPosterView.as_view(), name='add_poster'),
        path('edit_film/<int:pk>/', UpdateFilmView.as_view(), name='edit_film'),
        path('delete_film/<int:pk>/', FilmDeleteView.as_view(), name='delete_film'),
        path('confirm_delete/', confirm_delete, name='confirm_delete')
]
