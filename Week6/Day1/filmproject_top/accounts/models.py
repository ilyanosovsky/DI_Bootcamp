from django.db import models
from django.contrib.auth.models import User
from films.models import Film

# Create your models here.

class UserProfile(models.Model):
    user = models.OneToOneField(User, on_delete=models.CASCADE, related_name='user_profile')
    favorite_film = models.ManyToManyField(Film, related_name='favorite_film')
    
    def __str__(self):
        return f'Profile: {self.user.username}'