from rest_framework import permissions


class CreateOnly(permissions.BasePermission):
    def has_permission(self, request, view):
        print(request)
        return bool(request.method == 'POST')


class NoCreate(permissions.BasePermission):
    def has_permission(self, request, view):
        return request.method != 'POST'


class IsBusiness(permissions.BasePermission):
    def has_permission(self, request, view):
        return request.user and hasattr(request.user, 'bussiness')


class IsCustomer(permissions.BasePermission):
    def has_permission(self, request, view):
        print(request.data)
        return request.user and hasattr(request.user, 'customer')


class IsCustomerAndCreateOnly(permissions.BasePermission):
    def has_permission(self, request, view):
        return request.method == 'POST' and hasattr(request.user, 'customer')


class IsOwner(permissions.BasePermission):
    def has_object_permission(self, request, view, obj):
        return obj == request.user or obj.user == request.user


class IsBussinessOwnerAppointment(permissions.BasePermission):
    def has_permission(self, request, view):
        return request.user and request.user.bussiness and request.user.id == view.kwargs.get('bussiness')

    def has_object_permission(self, request, view, obj):
        return request.user and hasattr(request.user, 'customer') and request.user.id == obj.type.bussiness.id


class IsBussinessOwner(permissions.BasePermission):
    def has_permission(self, request, view):
        return request.user and hasattr(request.user, 'bussiness') and request.user.id == view.kwargs.get('bussiness')


class IsCustomerOwner(permissions.BasePermission):
    def has_permission(self, request, view):
        return request.user and hasattr(request.user, 'customer') and request.user.id == view.kwargs.get('customer')


class IsCustomerOwnerAppointment(permissions.BasePermission):
    def has_permission(self, request, view):
        return request.user and hasattr(request.user, 'customer') and request.user.id == view.kwargs.get('customer')

    def has_object_permission(self, request, view, obj):
        return request.user and hasattr(request.user, 'customer') and request.user.id == obj.customer.id


class ReadOnly(permissions.BasePermission):
    def has_permission(self, request, view):
        if request.method in permissions.SAFE_METHODS:
            return True
        return False
