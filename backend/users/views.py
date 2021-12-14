from django.contrib.auth import get_user_model
from rest_framework import generics, mixins
from rest_framework.views import APIView
from rest_framework.permissions import IsAuthenticated
from django.http import JsonResponse
from .serializers import UserSerializer

class UserList(mixins.ListModelMixin,
               mixins.CreateModelMixin,
               generics.GenericAPIView):

    queryset = get_user_model().objects.all()
    serializer_class = UserSerializer

    def get(self, request, *args, **kwargs):
        return self.list(request, *args, **kwargs)

    def post(self, request, *args, **kwargs):
        return self.create(request, *args, **kwargs)

class UserDetail(generics.RetrieveAPIView):
    queryset = get_user_model().objects.all()
    serializer_class = UserSerializer

class CurrentUser(APIView):
    permission_classes = [IsAuthenticated]

    def get(self, request):
        user = get_user_model().objects.get(email=request.user)
        serialized_user = UserSerializer(user)

        return JsonResponse(serialized_user.data)
