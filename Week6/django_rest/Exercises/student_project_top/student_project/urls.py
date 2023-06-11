from django.contrib import admin
from django.urls import path, include
from students.views import StudentList, StudentDetail

urlpatterns = [
    path("admin/", admin.site.urls),
    path("api-auth/", include("rest_framework.urls")),
    path("api/students/", StudentList.as_view(), name="student-list"),
    path("api/students/<int:pk>/", StudentDetail.as_view(), name="student-detail"),
]
