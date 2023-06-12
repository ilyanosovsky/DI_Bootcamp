from django.contrib import admin
from django.urls import path, include
from api_app.views import (DepartmentListAPIView, 
                    DepartmentCreateAPIView, 
                    EmployeeListAPIView, 
                    EmployeeCreateAPIView, 
                    ProjectRetrieveAPIView, 
                    ProjectUpdateAPIView, 
                    ProjectDestroyAPIView, 
                    TaskRetrieveAPIView, 
                    TaskUpdateAPIView, 
                    TaskDestroyAPIView)

urlpatterns = [
    path("admin/", admin.site.urls),
    path("api-auth/", include("rest_framework.urls")),
    path("departments/", DepartmentListAPIView.as_view(), name="department-list"),
    path("departments/create/", DepartmentCreateAPIView.as_view(), name="department-create"),
    path("employees/", EmployeeListAPIView.as_view(), name="employee-list"),
    path("employees/create/", EmployeeCreateAPIView.as_view(), name="employee-create"),
    path("projects/<int:pk>/", ProjectRetrieveAPIView.as_view(), name="project-retrieve"),
    path("projects/<int:pk>/update/", ProjectUpdateAPIView.as_view(), name="project-update"),
    path("projects/<int:pk>/delete/", ProjectDestroyAPIView.as_view(), name="project-delete"),
    path("tasks/<int:pk>/", TaskRetrieveAPIView.as_view(), name="task-retrieve"),
    path("tasks/<int:pk>/update/", TaskUpdateAPIView.as_view(), name="task-update"),
    path("tasks/<int:pk>/delete/", TaskDestroyAPIView.as_view(), name="task-delete"),
]
