from django.shortcuts import render
from rest_framework.parsers import JSONParser
from rest_framework.views import APIView
from rest_framework.response import Response

from .models import Student
from .serializers import StudentSerializer


class StudentList(APIView):
    # GET
    def get(self, request, *args, **kwargs):
        if 'pk' in kwargs:
            student = Student.objects.get(id=kwargs['pk'])
            serializer = StudentSerializer(student)
            return Response(serializer.data)
        else:
            queryset = Student.objects.all()
            serializer = StudentSerializer(queryset, many=True)
            return Response(serializer.data)

    # POST
    def post(self, request, *args, **kwargs):
        serializer = StudentSerializer(data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data)
        return Response(serializer.errors)
    
    
class StudentDetail(APIView):

    # GET
    def get(self, request, *args, **kwargs):
        if 'pk' in kwargs:
            student = Student.objects.get(id=kwargs['pk'])
            serializer = StudentSerializer(student)
            return Response(serializer.data)
        else:
            # queryset = Student.objects.all()
            # serializer = StudentSerializer(queryset, many=True)
            return Response(status=404)


    # PUT
    def put(self, request, pk, *args, **kwargs):
        student = Student.objects.get(id=pk)
        serializer = StudentSerializer(student, data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data)
        return Response(serializer.errors)
    
    # DELETE
    def delete(self, request, pk, *args, **kwargs):
        student = Student.objects.get(id=pk)
        student.delete()
        return Response(status=204)