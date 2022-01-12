from rest_framework import serializers 

from appointments.models import AppointmentType, Appointment

class AppointmentTypeSerializer(serializers.ModelSerializer):
    bussiness = serializers.ReadOnlyField(source='bussiness.id')

    class Meta:
        model = AppointmentType
        fields = '__all__'

class AppointmentSerializer(serializers.ModelSerializer):

    class Meta:
        model = Appointment
        fields = '__all__'
        depth = 2

