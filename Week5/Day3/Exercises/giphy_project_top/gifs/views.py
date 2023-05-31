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

#DailyChalange Likes
def gif_id_like(request, id : int, like_type: int):
    # def (request, postid, userpreference):
    gif_id = Gif.objects.get(id = id) #get gif bt id
    category_list = gif_id.categories.all() ## Get the categories of one as example  q1.category_set.all()  
    
    if request.method == "POST":
         
        #find user for id
        
        if like_type == 1:
            gif_id.likes += 1
                                        
        elif like_type == 2:
            gif_id.likes -= 1
        gif_id.save()
    
    context ={'gif': gif_id,
              'category': category_list}
    
    return render(request, 'gif.html', context)

#All gifs with Like > 0
def Like_positive_gifs(request):
    # this view will display all the gifs from the database. Display each gif in an img tag.
    gif_info = Gif.objects.all().order_by("-likes").filter(likes__gt = 0) #'greater than', you can change 'gte' to 'gt'.
    category_info = Category.objects.all()  
    
    context ={'gifs': gif_info,
              'Category': category_info}
    
    return render(request, 'positivelikes.html', context)

