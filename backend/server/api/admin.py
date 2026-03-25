# api/admin.py
from django.contrib import admin
from .models import Contact, StudentHelp, Volunteer

admin.site.register(Contact)
admin.site.register(StudentHelp)
admin.site.register(Volunteer)
