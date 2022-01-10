from django.db import models

# Create your models here.
from users.models import Bussiness, Customer

class AppointmentType(models.Model):
    bussiness = models.ForeignKey(Bussiness, on_delete=models.CASCADE)
    name = models.CharField(max_length=50, blank=False)
    description = models.CharField(max_length=300, blank=True)
    duration = models.DurationField()
    price = models.DecimalField(max_digits=6, decimal_places=2)

class Appointment(models.Model):
    type = models.ForeignKey(AppointmentType, on_delete=models.CASCADE)
    customer = models.ForeignKey(Customer, on_delete=models.CASCADE)
    time_start = models.DateTimeField()
    time_end = models.DateTimeField()
    confirmed = models.BooleanField(default=False)

