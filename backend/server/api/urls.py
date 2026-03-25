from django.urls import path
from .views import contact, student_help, volunteer_register, test_email

urlpatterns = [
    path("contact", contact),
    path("student-help", student_help),
    path("volunteer", volunteer_register),
    path("test-email/", test_email),
]
