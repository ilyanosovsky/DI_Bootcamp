from django.contrib import admin
from django.urls import path
from films.views import HomePageView, FilmCreateView, DirectorCreateView

urlpatterns = [
    path("admin/", admin.site.urls),
    path("homepage/", HomePageView.as_view(), name="home"),
    path("add_film/", FilmCreateView.as_view(), name="add_film"),
    path("add_director/", DirectorCreateView.as_view(), name="add_director"),
]
