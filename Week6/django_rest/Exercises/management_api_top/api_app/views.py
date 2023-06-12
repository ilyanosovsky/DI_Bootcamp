from django.shortcuts import render
from .models import Department, Employee, Task, Project
from .serializers import DepartmentSerializer, EmployeeSerializer, TaskSerializer, ProjectSerializer
from rest_framework import generics


class DepartmentListAPIView(generics.ListAPIView):
    queryset = Department.objects.all()
    serializer_class = DepartmentSerializer

class DepartmentCreateAPIView(generics.CreateAPIView):
    queryset = Department.objects.all()
    serializer_class = DepartmentSerializer


class EmployeeListAPIView(generics.ListAPIView):
    queryset = Employee.objects.all()
    serializer_class = EmployeeSerializer

class EmployeeCreateAPIView(generics.CreateAPIView):
    queryset = Employee.objects.all()
    serializer_class = EmployeeSerializer


class ProjectRetrieveAPIView(generics.RetrieveAPIView):
    queryset = Project.objects.all()
    serializer_class = ProjectSerializer

class ProjectUpdateAPIView(generics.UpdateAPIView):
    queryset = Project.objects.all()
    serializer_class = ProjectSerializer

class ProjectDestroyAPIView(generics.DestroyAPIView):
    queryset = Project.objects.all()
    serializer_class = ProjectSerializer


class TaskRetrieveAPIView(generics.RetrieveAPIView):
    queryset = Task.objects.all()
    serializer_class = TaskSerializer

class TaskUpdateAPIView(generics.UpdateAPIView):
    queryset = Task.objects.all()
    serializer_class = TaskSerializer

class TaskDestroyAPIView(generics.DestroyAPIView):
    queryset = Task.objects.all()
    serializer_class = TaskSerializer