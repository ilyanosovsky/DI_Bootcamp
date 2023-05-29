from django.db import models

# Create your models here.
class Post(models.Model):
    title = models.CharField(max_length=50)
    content = models.TextField()
    author = models.CharField(max_length=20)
    date_created = models.DateTimeField(auto_now_add=True)
    category = models.ForeignKey('Category', on_delete=models.SET_NULL, null=True)

class Category(models.Model):
    name = models.CharField(max_length=20)

