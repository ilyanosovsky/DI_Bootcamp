from django import forms
from .models import Film, Country, Category, Director, Review

class FilmForm(forms.ModelForm):
    class Meta:
        model = Film
        fields = '__all__'
        widgets = {
            'release_date': forms.DateInput(attrs={'type': 'date'}),
        }

class DirectorForm(forms.ModelForm):
    class Meta:
        model = Director
        fields = '__all__'

# daily challenge
class ReviewForm(forms.ModelForm):
    class Meta:
        model = Review
        fields = '__all__'
        widgets = {
            'review_date': forms.DateInput(attrs={'type': 'date'}),
        }