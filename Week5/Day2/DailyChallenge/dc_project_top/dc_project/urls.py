from django.contrib import admin
from django.urls import path
from app_numbers.views import by_name, by_number

urlpatterns = [
    path("admin/", admin.site.urls),
    path('persons/phonenumber/<str:phonenumber>', by_number),
    path('persons/name/<str:name_search>', by_name),
]
