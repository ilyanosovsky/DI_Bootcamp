from django.contrib import admin
from django.urls import path
from app_numbers.views import phone_sh, name_sh, search


urlpatterns = [
    path('admin/', admin.site.urls),
    path('persons/<int:phone_number>', phone_sh, name = 'phone'), 
    path('persons/<str:name>', name_sh, name = 'name'),
    path('search/', search, name='search'), 
]