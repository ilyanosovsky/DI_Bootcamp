from rest_framework import serializers
from .models import Department, Employee, Project, Task
from django.contrib.auth.models import User

class DepartmentSerializer(serializers.ModelSerializer):
    name = serializers.HyperlinkedIdentityField(view_name='department-detail')
    class Meta:
        model = Department
        fields = '__all__'

class EmployeeSerializer(serializers.ModelSerializer):
    name = serializers.HyperlinkedIdentityField(view_name='employee-detail')
    department = serializers.HyperlinkedIdentityField(view_name='department-detail')
    class Meta:
        model = Employee
        fields = '__all__'

class ProjectSerializer(serializers.ModelSerializer):
    class Meta:
        model = Project
        fields = '__all__'

class TaskSerializer(serializers.ModelSerializer):
    name = serializers.HyperlinkedIdentityField(view_name='task-detail')
    class Meta:
        model = Task
        fields = '__all__'