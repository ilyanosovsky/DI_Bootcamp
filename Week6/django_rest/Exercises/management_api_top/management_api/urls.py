from django.contrib import admin
from django.urls import path, include
from api_app.views import (DepartmentListAPIView,
                           DepartmentDetailAPIView,
                           EmployeeListAPIView,
                           EmployeeDetailAPIView,
                           ProjectListAPIView,
                           ProjectDetailAPIView,
                           TaskListAPIView,
                           TaskDetailAPIView) 


urlpatterns = [
    path("admin/", admin.site.urls),
    path("api-auth/", include("rest_framework.urls")),
    path("api/department/", DepartmentListAPIView.as_view(), name="department-list"),
    path("api/department/<int:pk>/", DepartmentDetailAPIView.as_view(), name="department-detail"),
    path("api/employee/", EmployeeListAPIView.as_view(), name="employee-list"),
    path("api/employee/<int:pk>/", EmployeeDetailAPIView.as_view(), name="employee-detail"),
    path("api/project/", ProjectListAPIView.as_view(), name="project-list"),
    path("api/project/<int:pk>/", ProjectDetailAPIView.as_view(), name="project-detail"),
    path("api/task/", TaskListAPIView.as_view(), name="task-list"),
    path("api/task/<int:pk>/", TaskDetailAPIView.as_view(), name="task-detail"),
]
