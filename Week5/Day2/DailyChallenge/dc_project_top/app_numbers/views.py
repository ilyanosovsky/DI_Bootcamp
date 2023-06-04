from django.shortcuts import render, redirect
from .models import Person
from .forms import SearchForm
from django.db.models import Q 

# def persons_name(request, name_search: str):
#     person = None
#     try:
#         person = Person.objects.get(name=name_search)
#     except Person.DoesNotExist:
#         pass
#     context = {'person' : person}

#     return render(request, 'names.html', context)


# def persons_phonenumber(request, number: str):
#     person = None
#     try:
#         person = Person.objects.get(phone_number = number)
#     except Person.DoesNotExist:
#         pass

#     context = {'person' : person}
    
#     return render(request, 'phones.html', context)

from django.shortcuts import render, redirect
from app_numbers.models import Person
from .forms import SearchForm
from django.db.models import Q

# Create your views here.
def phone_sh(request, phone_number):
    try:
        people_info = Person.objects.get(phone_number = str(phone_number))
        context = {'info': people_info,
                   'check': True}
    except:
        context = {}
  
    return render(request, 'phonenumber.html', context)

def name_sh(request, name):
    try:
        people_info = Person.objects.get(name = name)
        context = {'info': people_info,
                   'check': True}
    except:
        context = {}
  
    return render(request, 'name.html', context)


# def search(request):
#     if request.method == 'POST':
#         query = request.POST('query')
    

#         if SearchForm({'persons_phonenumber': query}).is_valid():
#             return redirect('phones/', phone=query)
            
#         else:
#             return redirect('phones/', number=query)
        
#     return render(request, 'search.html')

def search(request):
    
    if request.method == 'POST':
        form = request.POST
        search = form['query']
        print(search)

        if Person.objects.filter(Q(phone_number = search) | Q(name = search) ).exists():
            #There is person go to page with ID
            print('OK')
            
            return redirect(f'/persons/{search}')
       

    search_form = SearchForm()
        
    context ={'form': search_form, }
        
    return render(request, 'search.html', context)