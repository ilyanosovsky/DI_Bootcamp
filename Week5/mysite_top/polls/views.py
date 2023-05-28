from django.shortcuts import render
from django.http import HttpResponse
from datetime import date

def posts(request):
    
    today = date.today()
    title = 'My First Site'
    content = 'Bla bla bla'
    author = 'Joe Doe'

    subscribers = ['John', 'Mary', 'Peter', 'Jane']

    context = {'time': today, 
               'title': title, 
               'content': content, 
               'author': author,
               'subscribers_list': subscribers}

    return render(request, "posts.html", context)

def profile(request):
    
    user = {'name': 'John', 
            'surname': 'Doe',
            'age': 25, 
            'gender': 'male',
            'countries': ['USA', 'UK', 'Canada']}
    
    return render(request, "profile_user.html", user)

