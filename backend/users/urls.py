from django.urls import path, include
from users import views
from rest_framework.routers import DefaultRouter

router = DefaultRouter()
router.register(r'users', views.UserViewSet)
router.register(r'customers', views.CustomerViewSet)
router.register(r'businesses', views.BussinessViewSet)

urlpatterns = [
    path('', include(router.urls)),

    path('businesses/<int:bussiness>/appointment-types', views.BussinessAppointmentTypeList.as_view()),
    path('businesses/<int:bussiness>/appointment-types/<int:pk>', views.BussinessAppointmentTypeDetail.as_view()),
    path('businesses/<int:bussiness>/appointment-types/<int:appointment_type>/appointments', views.AppointmentTypeAppointmentList.as_view()),
    path('businesses/<int:bussiness>/appointment-types/<int:appointment_type>/appointments/<int:pk>', views.AppointmentTypeAppointmentDetail.as_view()),
    path('businesses/<int:bussiness>/appointments', views.AppointmentList.as_view()),
    path('businesses/<int:bussiness>/appointments/<int:pk>', views.AppointmentDetail.as_view()),

    path('customers/<int:customer>/appointments', views.CustomerAppointmentList.as_view()),
    path('customers/<int:customer>/appointments/<int:pk>', views.CustomerAppointmentDetail.as_view()),

    path('appointment-types/<int:pk>', views.AppointmentTypeDetail.as_view()),
]

