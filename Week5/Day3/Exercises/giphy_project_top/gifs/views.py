from django.shortcuts import render
from .models import Gif, Category
from .forms import CategoryForm, GifForm
# Create your views here.

def homepage(request):
    gifs_all = Gif.objects.all()
    context = {'gifs': gifs_all}
    return render(request, "home.html", context)

def add_category_view(request):
    
        if request.method == "POST":
            data = request.POST
            filled_form = CategoryForm(data)
            filled_form.save()
    
        cotegory_form = CategoryForm()
        context = {'form': cotegory_form}
        return render(request, "add_category.html", context)

def add_gif_view(request):
        
            if request.method == "POST":
                data = request.POST
                filled_form = GifForm(data)
                filled_form.save()
        
            gif_form = GifForm()
            context = {'form': gif_form}
            return render(request, "add_gif.html", context)

def category_view(request, category):
    category = Category.objects.get(name=category)
    gifs = category.gif_set.all()
    context = {'category': category, 'gifs': gifs}
    return render(request, "category.html", context)

def categories(request):
    categories = Category.objects.all()
    context = {'categories': categories}
    return render(request, "categories.html", context)

def gif_view(request, gif_id):
    gif = Gif.objects.get(id=gif_id)
    context = {'gif': gif}
    return render(request, "gif.html", context)

