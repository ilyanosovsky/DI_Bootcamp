from django.contrib import admin
from django.urls import path
from app_numbers.views import persons_phonenumber, persons_name, search

urlpatterns = [
    path('admin/', admin.site.urls),
    path('phones/<str:number>/', persons_phonenumber),
    path('names/<str:name_search>/', persons_name),
    path('search/', search, name='search'),
]