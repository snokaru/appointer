from django.contrib.auth import get_user_model
from rest_framework.permissions import IsAuthenticated
from rest_framework.response import Response
from rest_framework.decorators import action
from rest_framework import viewsets
from rest_framework import mixins

from users.serializers import BussinessSerializer, CustomerSerializer, UserSerializer
from users.permissions import IsSelfOrReadOnly, IsAuthenticatedOrCreateOnly
from users.models import Customer, Bussiness


User = get_user_model()

class UserViewSet(mixins.CreateModelMixin,
                  mixins.RetrieveModelMixin,
                  mixins.ListModelMixin,
                  viewsets.GenericViewSet):
    queryset = User.objects.all()
    serializer_class = UserSerializer
    permission_classes = [IsAuthenticated, IsSelfOrReadOnly]

    @action(detail=False)
    def me(self, request):
        user = User.objects.get(email=request.user)

        serialized_user = UserSerializer(user)
        return Response(serialized_user.data)

class CustomerViewSet(mixins.CreateModelMixin,
                      mixins.RetrieveModelMixin,
                      mixins.ListModelMixin,
                      viewsets.GenericViewSet):

    queryset = Customer.objects.all()
    serializer_class = CustomerSerializer
    permission_classes = [IsAuthenticatedOrCreateOnly, IsSelfOrReadOnly]

class BussinessViewSet(mixins.CreateModelMixin,
                      mixins.RetrieveModelMixin,
                      mixins.ListModelMixin,
                      viewsets.GenericViewSet):

    queryset = Bussiness.objects.all()
    serializer_class = BussinessSerializer
    permission_classes = [IsAuthenticatedOrCreateOnly, IsSelfOrReadOnly]

