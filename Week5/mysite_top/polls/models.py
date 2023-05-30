from django.db import models

# Create your models here.

class Person(models.Model):
    first_name = models.CharField(max_length=50)
    last_name = models.CharField(max_length=50)
    email = models.EmailField(unique=True)


class Post(models.Model):
    title = models.CharField(max_length=50)
    content = models.TextField()
    author = models.ForeignKey(Person, on_delete=models.CASCADE)
    date_created = models.DateTimeField(auto_now_add=True)
    category = models.ManyToManyField('Category')

class Category(models.Model):
    name = models.CharField(max_length=20)



