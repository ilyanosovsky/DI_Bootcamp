from django.shortcuts import render
from .models import Post, Category, Email, Person, Address
from .forms import CategoryForm


def add_category_view(request):

    if request.method == "POST":
        data = request.POST
        filled_form = CategoryForm(data)
        filled_form.save()

    cotegory_form = CategoryForm()
    context = {'form': cotegory_form}
    return render(request, "add_category.html", context)



def posts(request):
    
    posts_all = Post.objects.all()
    context = {'post_list': posts_all}

    return render(request, "posts.html", context)

def profile(request):

    current_user = Person.objects.get(first_name="Ivan")
    # user_email = Email.objects.get(person=current_user)
    user_email = current_user.email.email
    user_addresses = current_user.addresses.all()

    context = {'user': current_user, 'email': user_email, 'addresses': user_addresses}

    return render(request, "profile.html", context)

def addresses(request):

    current_user = Person.objects.get(first_name="Ivan")
    user_addresses = current_user.addresses.all()

    context = {'user': current_user, 'addresses': user_addresses}

    return render(request, "addresses.html", context)

