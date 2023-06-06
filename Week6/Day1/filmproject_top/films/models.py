from django.db import models


class Film(models.Model):
    title = models.CharField(max_length=50)
    release_date = models.DateField(auto_now_add=True)
    created_in_country = models.ForeignKey('Country', on_delete=models.CASCADE, related_name="films")
    available_in_countries = models.ManyToManyField('Country', related_name="available_films")
    category = models.ManyToManyField('Category')
    director = models.ManyToManyField('Director')

    def __str__(self):
        return self.title
    
class Country(models.Model):
    name = models.CharField(max_length=50)
    
    def __str__(self):
        return self.name
    
class Category(models.Model):
    name = models.CharField(max_length=50)
    
    def __str__(self):
        return self.name
    
class Director(models.Model):
    first_name = models.CharField(max_length=50)
    last_name = models.CharField(max_length=50)
    
    def __str__(self):
        return self.first_name + " " + self.last_name
    
# daily challenge
class Review(models.Model):
    film = models.ForeignKey('Film', on_delete=models.CASCADE, related_name="reviews")
    review_text = models.TextField()
    rating = models.IntegerField()
    review_date = models.DateTimeField(auto_now_add=True)
    
    def __str__(self):
        return self.review_text   
    
class Poster(models.Model):
    image = models.URLField(default = '')
    explanation_img = models.CharField(max_length=100)
    film = models.OneToOneField(Film, on_delete=models.CASCADE, related_name='poster')

    def __str__(self):
        return f'Poster for {self.film.title}'


