from django import forms
from .models import Film, Country, Category, Director, Review, Poster, Producer
from django.forms import formset_factory
from dgango.utils import timezone

class FilmForm(forms.ModelForm):
    class Meta:
        model = Film
        fields = '__all__'
        widgets = {
            'release_date': forms.DateInput(attrs={'type': 'date'}),
        }

    def clean_release_date(self):
        today = timezone.now().date()
        release_date = self.cleaned_data.get['release_date']
        if release_date > today:
            raise forms.ValidationError('Release date must be in the past')

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

class PosterForm(forms.ModelForm):
    class Meta:
        model = Poster
        fields = '__all__'
        exclude = ('film',)

class ProducerForm(forms.ModelForm):
    class Meta:
        model = Producer
        fields = '__all__'


ProducerFormSet = forms.modelformset_factory(Producer, form=ProducerForm, extra=1)