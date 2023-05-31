from django.db import models

# Create your models here.

class Person(models.Model):
    first_name = models.CharField(max_length=50)
    last_name = models.CharField(max_length=50)

    def __str__(self):
        return self.first_name + " " + self.last_name
    
class Address(models.Model):
    address = models.CharField(max_length=100)
    people = models.ManyToManyField(Person, related_name="addresses")

    def __str__(self):
        return self.address
    

class Email(models.Model):
    email = models.EmailField(unique=True)
    person = models.OneToOneField(Person, on_delete=models.CASCADE)

    def __str__(self):
        return self.email


class Post(models.Model):
    title = models.CharField(max_length=50)
    content = models.TextField()
    author = models.ForeignKey(Person, on_delete=models.CASCADE)
    date_created = models.DateTimeField(auto_now_add=True)
    category = models.ManyToManyField('Category')

    def __str__(self):
        return self.title

class Category(models.Model):
    name = models.CharField(max_length=20)

    def __str__(self):
        return self.name



