from django.contrib.auth.models import AbstractUser
from django.db import models

# Create your models here.

class User(AbstractUser):
    email = models.EmailField("email", unique=True)
    username = models.CharField("username", max_length=150, unique=False, blank=True)
    
    USERNAME_FIELD = "email"
    REQUIRED_FIELDS = ["username", "password",]

class Customer(models.Model):
    user = models.OneToOneField(User, on_delete=models.CASCADE, primary_key=True)
    first_name = models.CharField(max_length=30, blank=False)
    last_name = models.CharField(max_length=30, blank=False)
    
class Bussiness(models.Model):
    user = models.OneToOneField(User, on_delete=models.CASCADE, primary_key=True)
    name = models.CharField(max_length=100, blank=False) 
    description = models.CharField(max_length=500, blank=False)
    image_url = models.URLField()
