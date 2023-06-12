from rest_framework import permissions

class IsDepartmentAdmin(permissions.BasePermission):
    def has_object_permission(self, request, view, obj):

        if request.method in permissions.SAFE_METHODS:
            return True
        elif request.user == obj.department.administrator:
            return True
        else:
            return False