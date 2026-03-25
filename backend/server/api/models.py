from django.db import models


# 1. Contact Form Model
class Contact(models.Model):
    name = models.CharField(max_length=255)
    email = models.EmailField()
    message = models.TextField()
    created_at = models.DateTimeField(auto_now_add=True)

    def __str__(self):
        return f"{self.name} ({self.email})"


# 2. Student Help 
class StudentHelp(models.Model):
    name = models.CharField(max_length=255)
    email = models.EmailField()
    phone = models.CharField(max_length=20)
    help_type = models.CharField(max_length=100)   
    message = models.TextField(blank=True)
    created_at = models.DateTimeField(auto_now_add=True)

    def __str__(self):
        return f"{self.name} - {self.help_type}"


# 3. Volunteer Registration Model
class Volunteer(models.Model):
    # Basic details
    name = models.CharField(max_length=255)
    phone = models.CharField(max_length=20)
    email = models.EmailField()
    occupation = models.CharField(max_length=255)
    address = models.TextField()

    # Navodayan info
    is_navodayan = models.CharField(
        max_length=3,
        choices=[("yes", "Yes"), ("no", "No")]
    )
    jnv_school = models.CharField(max_length=255, blank=True)
    district = models.CharField(max_length=100, blank=True)
    time_contribution = models.CharField(max_length=100, blank=True)

    # Contribution phases
    selected_phases = models.JSONField(default=list)

    # Roles per phase
    before_roles = models.JSONField(default=list, blank=True)
    during_roles = models.JSONField(default=list, blank=True)
    after_roles = models.JSONField(default=list, blank=True)

    created_at = models.DateTimeField(auto_now_add=True)

    def __str__(self):
        return f"{self.name} ({self.email})"
