"""
URL configuration for giphy_project project.

The `urlpatterns` list routes URLs to views. For more information please see:
    https://docs.djangoproject.com/en/4.2/topics/http/urls/
Examples:
Function views
    1. Add an import:  from my_app import views
    2. Add a URL to urlpatterns:  path('', views.home, name='home')
Class-based views
    1. Add an import:  from other_app.views import Home
    2. Add a URL to urlpatterns:  path('', Home.as_view(), name='home')
Including another URLconf
    1. Import the include() function: from django.urls import include, path
    2. Add a URL to urlpatterns:  path('blog/', include('blog.urls'))
"""
from django.contrib import admin
from django.urls import path
from gifs.views import homepage, add_category_view, add_gif_view, category_view, categories, gif_view, Like_positive_gifs, gif_id_like

urlpatterns = [
    path("admin/", admin.site.urls),
    path("home/", homepage),
    path("add_category/", add_category_view),
    path("add_gif/", add_gif_view),
    path("categories/", categories),
    path("category/<str:category>/", category_view),
    path("gif/<int:gif_id>/", gif_view),
    path('gif/<int:id>/<int:like_type>', gif_id_like), #Like +
    path('positivelikes/', Like_positive_gifs),
]
