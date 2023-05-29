from django.shortcuts import render
from .models import Post


def posts(request):
    
    posts_all = Post.objects.all()
    context = {'post_list': posts_all}

    return render(request, "posts.html", context)

