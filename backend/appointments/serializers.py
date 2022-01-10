from rest_framework import serializers 

from appointments.models import AppointmentType, Appointment

class AppointmentTypeSerializer(serializers.ModelSerializer):
    bussiness = serializers.ReadOnlyField(source='bussiness.id')

    class Meta:
        model = AppointmentType
        fields = '__all__'

class AppointmentSerializer(serializers.ModelSerializer):
    type = serializers.ReadOnlyField(source='type.id')
    customer = serializers.ReadOnlyField(source='customer.id')

    class Meta:
        model = Appointment
        fields = '__all__'

