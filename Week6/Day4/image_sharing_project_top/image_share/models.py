from django.db import models
from django.contrib.auth.models import User

class Profile(models.Model):
    user = models.OneToOneField(User, on_delete=models.CASCADE, related_name='user_profile')
    image_count = models.IntegerField(default=0)

    def __str__(self):
        return self.user.username


class Image(models.Model):
    image = models.ImageField(upload_to='media')
    title = models.CharField(max_length=100)
    description = models.TextField()
    user = models.ForeignKey(User, on_delete=models.CASCADE, related_name='images')

    def __str__(self):
        return self.title

