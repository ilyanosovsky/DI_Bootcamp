from django import forms
from .models import Category, Gif

class CategoryForm(forms.ModelForm):
    class Meta:
        model = Category
        fields = '__all__'

class GifForm(forms.ModelForm):
    class Meta:
        model = Gif
        fields = '__all__'
