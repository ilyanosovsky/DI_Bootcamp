from django.urls import path
from .views import (HomePageView,
                    FilmCreateView,
                    DirectorCreateView,
                    ReviewCreateView)

urlpatterns = [
        path("homepage/", HomePageView.as_view(), name="home"),
        path("add_film/", FilmCreateView.as_view(), name="add_film"),
        path("add_director/", DirectorCreateView.as_view(), name="add_director"),
        path("add_review/", ReviewCreateView.as_view(), name="add_review"),
]
