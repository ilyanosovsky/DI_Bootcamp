from django import forms
from .models import Category, Post

class CategoryForm(forms.ModelForm):
    class Meta:
        model = Category
        fields = '__all__'

class SearchForm(forms.Form):
    querry = forms.CharField(max_length=20)

class PostForm(forms.ModelForm):
    class Meta:
        model = Post
        fields = '__all__'
        # exclude = ['author', 'date_created']
        widgets = {
            'author': forms.HiddenInput(),
            'content': forms.Textarea(attrs={'rows': 3, 'cols': 5}),
        }
