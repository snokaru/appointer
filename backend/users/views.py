from django.contrib.auth import get_user_model
from rest_framework.views import APIView
from rest_framework.permissions import IsAuthenticated
from rest_framework.response import Response
from rest_framework.decorators import action
from rest_framework import viewsets
from rest_framework import mixins

from .serializers import UserSerializer
from .permissions import IsSelfOrReadOnly


User = get_user_model()

class UserViewSet(viewsets.ModelViewSet):
    queryset = User.objects.all()
    serializer_class = UserSerializer
    permission_classes = [IsAuthenticated, IsSelfOrReadOnly]

    @action(detail=False)
    def me(self, request):
        user = User.objects.get(email=request.user)

        serialized_user = UserSerializer(user)
        return Response(serialized_user.data)

