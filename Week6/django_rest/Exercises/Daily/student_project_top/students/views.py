from django.shortcuts import render, get_object_or_404
from rest_framework.parsers import JSONParser
from rest_framework.views import APIView
from rest_framework.permissions import AllowAny
from rest_framework.response import Response
from rest_framework.status import (HTTP_200_OK, HTTP_201_CREATED, HTTP_400_BAD_REQUEST, HTTP_204_NO_CONTENT)
from datetime import datetime
from .models import Student
from .serializers import StudentSerializer


class StudentList(APIView):
    # GET
    def get(self, request, *args, **kwargs):

        # --- Daily Challenge start
        date_joined_str = self.request.query_params.get('date_joined')

        if date_joined_str:
            date_joined_dt = datetime.strptime(date_joined_str, "%Y-%m-%d").date()
            queryset = Student.objects.filter(date_joined__date=date_joined_dt)
        else:
        # --- Daily Challenge end
            queryset = Student.objects.all()

        serializer = StudentSerializer(queryset, many=True)
        return Response(serializer.data, status=HTTP_200_OK)

    # POST
    def post(self, request, *args, **kwargs):
        serializer = StudentSerializer(data=request.data)

        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data, status=HTTP_201_CREATED)

        return Response(serializer.errors, status=HTTP_400_BAD_REQUEST)
    
    
class StudentDetail(APIView):

    # GET
    def get(self, request, *args, **kwargs):
        if 'pk' in kwargs:
            student = get_object_or_404(Student, id=kwargs['pk'])
            serializer = StudentSerializer(student)
            return Response(serializer.data, status=HTTP_200_OK)
        else:
            queryset = Student.objects.all()
            serializer = StudentSerializer(queryset, many = True)
            return Response(serializer.data)


    # PUT
    def put(self, request, pk, *args, **kwargs):
        student = Student.objects.get(id=pk)
        serializer = StudentSerializer(student, data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data, status=HTTP_200_OK)
        return Response(serializer.errors, status=HTTP_400_BAD_REQUEST)
    
    # DELETE
    def delete(self, request, pk, *args, **kwargs):
        student = Student.objects.get(id=pk)
        student.delete()
        return Response(status=HTTP_204_NO_CONTENT)