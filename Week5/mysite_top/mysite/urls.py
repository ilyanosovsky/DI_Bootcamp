from django.contrib import admin
from django.urls import path
from polls.views import posts, profile, addresses, add_category_view, add_post_view, AddCategoryView, AddPostView, PostList

urlpatterns = [
    path("admin/", admin.site.urls),
    # path("posts/", posts, name="posts"),
    path("posts/", PostList.as_view(), name="posts"),
    path("profile/", profile, name="profile"),
    path("addresses/", addresses, name="addresses"),
    # path("add_category/", add_category_view, name="add_category"),
    path("add_category/", AddCategoryView.as_view(), name="add_category"),
    # path("add_post/", add_post_view,  name="add_post"),
    path("add_post/", AddPostView.as_view(),  name="add_post"),
]
