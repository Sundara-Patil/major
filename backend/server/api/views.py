from rest_framework.decorators import api_view
from rest_framework.response import Response
from rest_framework import status

from django.http import HttpResponse
from django.conf import settings

import requests

from .models import Contact, StudentHelp, Volunteer
from .serializers import (
    ContactSerializer,
    StudentHelpSerializer,
    VolunteerSerializer,
)

# --------------------------------------------------
# 🔥 Brevo Email Helper
# --------------------------------------------------

def send_brevo_email(to_email, subject, html_content):
    payload = {
        "sender": {
            "name": "VElevateU Navodaya",
            "email": "velevateunavodaya@gmail.com",  # verified sender
        },
        "to": [{"email": to_email}],
        "subject": subject,
        "htmlContent": html_content,
    }

    try:
        response = requests.post(
            "https://api.brevo.com/v3/smtp/email",
            headers={
                "accept": "application/json",
                "api-key": settings.BREVO_API_KEY,
                "Content-Type": "application/json",
            },
            json=payload,
            timeout=10,
        )

        print("📧 Brevo Response:", response.status_code, response.text)
        return response.status_code, response.text

    except Exception as e:
        print("❌ Brevo Error:", str(e))
        return None, str(e)


# --------------------------------------------------
# 📩 Contact API
# --------------------------------------------------

@api_view(["GET", "POST"])
def contact(request):
    if request.method == "GET":
        return Response({"message": "Contact API is working"})

    serializer = ContactSerializer(data=request.data)

    if serializer.is_valid():
        instance = serializer.save()

        # send_brevo_email(
        #     to_email=contact.email,
        #     subject="Thank you for contacting VElevateU",
        #     html_content=f"""
        #     <h3>Hello {contact.name},</h3>
        #     <p>Thank you for reaching out to VElevateU.</p>
        #     <p>We have received your message and will get back to you soon.</p>
        #     <br>
        #     <p>— Team VElevateU</p>
        #     """,
        # )

        user_html = f"""
        <h2>Thank You {instance.name}!</h2>
        <p>We have received your message:</p>
        <blockquote>{instance.message}</blockquote>
        <p>We will get back to you soon.</p>
        """

        send_brevo_email(
            instance.email,
            "Thank you for contacting VElevateU",
            user_html
        )

        # Admin Notification
        admin_html = f"""
        <h3>New Contact Submission</h3>
        <p><strong>Name:</strong> {instance.name}</p>
        <p><strong>Email:</strong> {instance.email}</p>
        <p><strong>Message:</strong> {instance.message}</p>
        """

        send_brevo_email(
            "velevateunavodaya@gmail.com",
            "New Contact Form Submission",
            admin_html
        )

        return Response(
            {"message": "Contact form submitted"},
            status=status.HTTP_201_CREATED,
        )

    return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)


# --------------------------------------------------
# 🎓 Student Help API
# --------------------------------------------------

@api_view(["POST"])
def student_help(request):
    serializer = StudentHelpSerializer(data=request.data)

    if serializer.is_valid():
        instance = serializer.save()

        # send_brevo_email(
        #     to_email=student.email,
        #     subject="Student Help Request Received",
        #     html_content=f"""
        #     <h3>Hello {student.name},</h3>
        #     <p>Your student help request has been successfully received.</p>
        #     <p>Our team will contact you shortly.</p>
        #     <br>
        #     <p>— Team VElevateU</p>
        #     """,
        # )

        user_html = f"""
        <h2>Hello {instance.name},</h2>
        <p>We received your request for <strong>{instance.help_type}</strong>.</p>
        <p><strong>Your Message:</strong></p>
        <blockquote>{instance.message}</blockquote>
        <p>Our team will contact you soon.</p>
        """

        send_brevo_email(
            instance.email,
            "Student Help Request Received",
            user_html
        )

        admin_html = f"""
        <h3>New Student Help Request</h3>
        <p><strong>Name:</strong> {instance.name}</p>
        <p><strong>Email:</strong> {instance.email}</p>
        <p><strong>Phone:</strong> {instance.phone}</p>
        <p><strong>Help Type:</strong> {instance.help_type}</p>
        <p><strong>Message:</strong> {instance.message}</p>
        """

        send_brevo_email(
            "velevateunavodaya@gmail.com",
            "New Student Help Submission",
            admin_html
        )

        return Response(
            {"message": "Student help request submitted"},
            status=status.HTTP_201_CREATED,
        )

    return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)


# --------------------------------------------------
# 🤝 Volunteer Registration API
# --------------------------------------------------

@api_view(["POST"])
def volunteer_register(request):
    serializer = VolunteerSerializer(data=request.data)

    if serializer.is_valid():
        instance = serializer.save()

        # send_brevo_email(
        #     to_email=volunteer.email,
        #     subject="Volunteer Registration Successful",
        #     html_content=f"""
        #     <h2>Welcome {volunteer.name} 🎉</h2>
        #     <p>Thank you for registering as a volunteer with VElevateU.</p>
        #     <p>We truly appreciate your willingness to contribute.</p>
        #     <br>
        #     <p>— Team VElevateU</p>
        #     """,
        # )

        user_html = f"""
        <h2>Thank You {instance.name} for Volunteering! ❤️</h2>
        <p>Here are your submitted details:</p>

        <ul>
            <li><strong>Phone:</strong> {instance.phone}</li>
            <li><strong>Email:</strong> {instance.email}</li>
            <li><strong>Occupation:</strong> {instance.occupation}</li>
            <li><strong>District:</strong> {instance.district}</li>
            <li><strong>Time Contribution:</strong> {instance.time_contribution}</li>
            <li><strong>Selected Phases:</strong> {instance.selected_phases}</li>
        </ul>

        <p>Our team will reach out to you soon.</p>
        """

        send_brevo_email(
            instance.email,
            "Volunteer Registration Successful",
            user_html
        )

        admin_html = f"""
        <h3>New Volunteer Registration</h3>
        <p><strong>Name:</strong> {instance.name}</p>
        <p><strong>Email:</strong> {instance.email}</p>
        <p><strong>Phone:</strong> {instance.phone}</p>
        <p><strong>Occupation:</strong> {instance.occupation}</p>
        <p><strong>District:</strong> {instance.district}</p>
        <p><strong>Phases:</strong> {instance.selected_phases}</p>
        """

        send_brevo_email(
            "velevateunavodaya@gmail.com",
            "New Volunteer Registration",
            admin_html
        )

        return Response(
            {"message": "Volunteer registered"},
            status=status.HTTP_201_CREATED,
        )

    return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)


# --------------------------------------------------
# 🧪 Test Email Endpoint (Optional)
# --------------------------------------------------

def test_email(request):
    status_code, response_text = send_brevo_email(
        to_email="YOUR_EMAIL@gmail.com",  # 🔁 replace once for testing
        subject="Brevo Test Email",
        html_content="<h1>Brevo is working 🚀</h1>",
    )
    return HttpResponse(f"Brevo Response: {status_code} | {response_text}")