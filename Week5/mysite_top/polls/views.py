from django.shortcuts import render
from .models import Post, Category, Email, Person, Address
from .forms import CategoryForm, PostForm, SearchForm
from django.views.generic.edit import CreateView, UpdateView, DeleteView
from django.views.generic import ListView, DetailView
from django.urls import reverse_lazy
from django.db.models import Q

current_user = Person.objects.get(first_name="Ivan")

def add_post_view(request):
    if request.method == "POST":
        data = request.POST
        filled_form = PostForm(data)
        filled_form.save()

    # post_form = PostForm(initial={'title': "Default title"})
    post_form = PostForm(initial={'author': current_user})
    context = {'form': post_form}
    return render(request, "add_post.html", context)

class AddPostView(CreateView):
    model = Post
    template_name = "add_post.html"
    # fields = "__all__"
    form_class = PostForm
    success_url = reverse_lazy("add_post")

    def get_initial(self):
        return {'author': current_user,
                'title': "Default title"}

    def form_valid(self, form):
        title = form.cleaned_data.get('title')
        # print("NAME:", name)
        if title == "Default title":
            form.instance.title = "DEFAULT TITLE"
        return super().form_valid(form)



# function based view
def add_category_view(request):

    if request.method == "POST":
        data = request.POST
        filled_form = CategoryForm(data)
        filled_form.save()

    cotegory_form = CategoryForm()
    context = {'form': cotegory_form}
    return render(request, "add_category.html", context)

# class based view / generic view
class AddCategoryView(CreateView):
    model = Category
    template_name = "add_category.html"
    # fields = "__all__"
    form_class = CategoryForm
    success_url = reverse_lazy("add_category")

    def form_valid(self, form):
        name = form.cleaned_data.get('name')
        # print("NAME:", name)
        if name == "Fantasy":
            form.instance.name = "FANTASY 1000"
        return super().form_valid(form)



def posts(request):
    querry = request.GET.get('querry', None)
    if querry:
        posts_all = Post.objects.filter(title__icontains=querry)
    else:
        posts_all = Post.objects.all()

    search_form = SearchForm()
    context = {'post_list': posts_all, 'search': search_form}

    return render(request, "posts.html", context)

# class based alternative to posts function
class PostList(ListView):
    model = Post
    template_name = "posts.html"
    context_object_name = "post_list"

    def get_queryset(self):
        querry = self.request.GET.get('querry', None)
        if querry:
            posts_all = Post.objects.filter(Q(title__icontains=querry) | Q(author__first_name__icontains=querry))
        else:
            posts_all = Post.objects.all()
        return posts_all

    def get_context_data(self, **kwargs):
        context = super().get_context_data(**kwargs)
        context['search'] = SearchForm()
        return context



def profile(request):

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

