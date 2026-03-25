from rest_framework import serializers
from .models import Contact, StudentHelp, Volunteer


class ContactSerializer(serializers.ModelSerializer):
    class Meta:
        model = Contact
        fields = "__all__"


class StudentHelpSerializer(serializers.ModelSerializer):
    class Meta:
        model = StudentHelp
        fields = "__all__"


class VolunteerSerializer(serializers.ModelSerializer):
    class Meta:
        model = Volunteer
        fields = "__all__"
