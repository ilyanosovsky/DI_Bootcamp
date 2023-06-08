from django.contrib import admin
from django.urls import path, include
from django.conf import settings
from django.conf.urls.static import static
from image_share import views

urlpatterns = [
    path('', views.HomePageView.as_view(), name='index'),
    path('admin/', admin.site.urls),
    path('signup/', views.SignUpView.as_view(), name='signup'),
    path('', include('django.contrib.auth.urls')),
    path('upload-image/', views.ImageCreateView.as_view(), name='upload_image'),
    path('my-images/', views.MyImagesView.as_view(), name='my_images'),
    path('album/<pk>', views.UsersImagesView.as_view(), name='album'),
    path('profile/<pk>', views.UserProfileView.as_view(), name='profile'),
]