from django.contrib.auth import get_user_model
from rest_framework.permissions import IsAuthenticated, AllowAny
from rest_framework.response import Response
from rest_framework.decorators import action
from rest_framework import status, viewsets
from rest_framework import mixins
from rest_framework import generics
from rest_framework.views import APIView

from users.serializers import BussinessSerializer, CustomerSerializer, UserDisplaySerializer, UserSerializer
from users.permissions import IsUserOwner, IsBusiness, IsCustomerAndCreateOnly, IsCustomer, IsOwner, IsCustomerOwner, IsBussinessOwner, IsBussinessOwnerAppointment, IsCustomerOwnerAppointment, NoCreate, ReadOnly, CreateOnly
from users.models import Customer, Bussiness

from appointments.models import AppointmentType, Appointment
from appointments.serializers import AppointmentSerializer, AppointmentTypeSerializer


User = get_user_model()


class UserViewSet(mixins.CreateModelMixin,
                  mixins.RetrieveModelMixin,
                  mixins.ListModelMixin,
                  viewsets.GenericViewSet):
    queryset = User.objects.all()
    serializer_class = UserDisplaySerializer
    permission_classes = [IsAuthenticated, IsOwner|ReadOnly]

    @action(detail=False)
    def me(self, request):
        user = User.objects.get(email=request.user)

        serialized_user = UserDisplaySerializer(user)
        return Response(serialized_user.data)


class CustomerViewSet(mixins.CreateModelMixin,
                      mixins.RetrieveModelMixin,
                      mixins.ListModelMixin,
                      viewsets.GenericViewSet):

    queryset = Customer.objects.all()
    serializer_class = CustomerSerializer
    permission_classes = [IsAuthenticated|CreateOnly, IsOwner|ReadOnly]


class BussinessViewSet(mixins.CreateModelMixin,
                      mixins.RetrieveModelMixin,
                      mixins.ListModelMixin,
                      viewsets.GenericViewSet):

    queryset = Bussiness.objects.all()
    serializer_class = BussinessSerializer
    permission_classes = [IsAuthenticated|CreateOnly, IsOwner|ReadOnly]


class AppointmentTypeDetail(generics.RetrieveAPIView):
    queryset = AppointmentType.objects.all()
    serializer_class = AppointmentTypeSerializer
    permission_classes = [IsAuthenticated]


class BussinessAppointmentTypeList(generics.GenericAPIView,
                           mixins.ListModelMixin,
                           mixins.CreateModelMixin):

    serializer_class = AppointmentTypeSerializer
    permission_classes = [IsAuthenticated, IsBussinessOwner|ReadOnly]

    def get_queryset(self):
        return AppointmentType.objects.filter(bussiness=self.kwargs.get('bussiness'))

    def get(self, request, *args, **kwargs):
        return self.list(request, *args, **kwargs)

    def post(self, request, *args, **kwargs):
        return self.create(request, *args, **kwargs)

    def perform_create(self, serializer):
        serializer.save(bussiness=self.request.user.bussiness)


class BussinessAppointmentTypeDetail(APIView):
    permission_classes = [IsAuthenticated, IsBussinessOwner|ReadOnly]
    
    def get(self, request, *args, **kwargs):
        bussiness_id = self.kwargs.get('bussiness')
        pk = self.kwargs.get('pk')

        appointment_type = AppointmentType.objects.get(pk=pk)
        if appointment_type.bussiness.user.id != bussiness_id:
            return Response(status=status.HTTP_404_NOT_FOUND)

        serializer = AppointmentTypeSerializer(appointment_type)
        return Response(serializer.data)


class AppointmentTypeAppointmentList(generics.GenericAPIView,
                           mixins.ListModelMixin,
                           mixins.CreateModelMixin):
                           
    serializer_class = AppointmentSerializer
    permission_classes = [IsAuthenticated, IsCustomer]

    def get_queryset(self):
        return Appointment.objects.filter(type__bussiness=self.kwargs.get('bussiness'),
                                          type=self.kwargs.get('appointment_type'))

    def get(self, request, *args, **kwargs):
        return self.list(request, *args, **kwargs)

    def post(self, request, *args, **kwargs):
        return self.create(request, *args, **kwargs)

    def perform_create(self, serializer):
        appointment_type = AppointmentType.objects.get(id=self.kwargs.get('appointment_type'))
        serializer.save(type=appointment_type, customer=self.request.user.customer)

    
class AppointmentTypeAppointmentDetail(generics.RetrieveAPIView):

    serializer_class = AppointmentSerializer
    permission_classes = [IsAuthenticated]

    def get_queryset(self):
        return Appointment.objects.filter(type__bussiness=self.kwargs.get('bussiness'),
                                          type=self.kwargs.get('appointment_type'))

    def perform_create(self, serializer):
        serializer.save(type=self.kwargs.get('appointment_type'), customer=self.request.user.customer)


class AppointmentList(generics.ListAPIView, generics.CreateAPIView):
    permission_classes = [IsAuthenticated, IsBussinessOwner]
    serializer_class = AppointmentSerializer

    def get_queryset(self):
        return Appointment.objects.filter(type__bussiness=self.kwargs.get('bussiness'))


class AppointmentDetail(generics.RetrieveAPIView):
    permission_classes = [IsAuthenticated, IsCustomerOwnerAppointment|IsBussinessOwnerAppointment]
    serializer_class = AppointmentSerializer

    def get_queryset(self):
        return Appointment.objects.filter(type__bussiness=self.kwargs.get('bussiness'))


class CustomerAppointmentList(generics.ListAPIView):
    permission_classes = [IsAuthenticated, IsCustomerOwner]
    serializer_class = AppointmentSerializer

    def get_queryset(self):
        return Appointment.objects.filter(customer=self.kwargs.get('customer'))
        

class UserAppointmentList(generics.ListAPIView):
    permission_classes = [IsAuthenticated, IsUserOwner]
    serializer_class = AppointmentSerializer

    def get_queryset(self):
        if hasattr(self.request.user, 'customer'):
            return Appointment.objects.filter(customer=self.kwargs.get('id'))
        elif hasattr(self.request.user, 'bussiness'):
            return Appointment.objects.filter(type__bussiness=self.kwargs.get('id'))

class UserAppointmentDetail(generics.RetrieveAPIView, generics.UpdateAPIView, generics.DestroyAPIView):
    permission_classes = [IsAuthenticated, IsUserOwner]
    serializer_class = AppointmentSerializer

    def get_queryset(self):
        if hasattr(self.request.user, 'customer'):
            return Appointment.objects.filter(customer=self.kwargs.get('id'))
        elif hasattr(self.request.user, 'bussiness'):
            return Appointment.objects.filter(type__bussiness=self.kwargs.get('id'))



class CustomerAppointmentDetail(generics.RetrieveAPIView):
    permission_classes = [IsAuthenticated, IsCustomerOwner]
    serializer_class = AppointmentSerializer

    def get_queryset(self):
        return Appointment.objects.filter(customer=self.kwargs.get('customer'))
