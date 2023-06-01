from django.db import models

# Create your models here.
class Gif(models.Model):
    title = models.CharField(max_length=50)
    url = models.URLField()
    uploader_name = models.CharField(max_length=50)
    created_at = models.DateTimeField(auto_now_add=True)
    likes = models.IntegerField(default=0)
    category = models.ManyToManyField('Category')

    def __str__(self):
        return self.title
    
class Category(models.Model):
    name = models.CharField(max_length=20)
    
    def __str__(self):
        return self.name