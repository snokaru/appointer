from django.urls import path, include
from users import views
from rest_framework.routers import DefaultRouter

router = DefaultRouter()
router.register(r'users', views.UserViewSet)
router.register(r'customers', views.CustomerViewSet)
router.register(r'bussinesses', views.BussinessViewSet)

urlpatterns = [
    path('', include(router.urls)),
]

