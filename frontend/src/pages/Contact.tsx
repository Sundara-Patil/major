import { Layout } from "@/components/layout/Layout";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { AnimatedBackground } from "@/components/ui/AnimatedBackground";
import { Mail, Phone, MapPin } from "lucide-react";
import bgContact from "@/assets/bg-contact.jpg";
import { useState } from "react";

export default function Contact() {
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });
  const [statusMessage, setStatusMessage] = useState(""); // <-- new state

  const handleChange = (e: any) => {
    setFormData({ ...formData, [e.target.id]: e.target.value });
  };

  const handleSubmit = async (e?: any) => {
    if (e) e.preventDefault();

    setStatusMessage("");

    try {
      const res = await fetch("https://velevateu.onrender.com/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      const data = await res.json();

      if (res.ok) {
        setStatusMessage(data.message || "Message sent successfully!");
        setFormData({ name: "", email: "", message: "" });
      } else {
        const errors =
          typeof data === "object"
            ? Object.entries(data)
                .map(([key, value]) => `${key}: ${value}`)
                .join("\n")
            : "Something went wrong";

        setStatusMessage(errors);
      }
    } catch (err) {
      console.error(err);
      setStatusMessage("Network error or server not reachable");
    }
  };


  return (
    <Layout>
      {/* Hero with animated background */}
      <AnimatedBackground
        image={bgContact}
        overlay="dark"
        animation="zoom"
        className="py-32 md:py-40"
      >
        <div className="container">
          <div className="mx-auto max-w-3xl text-center">
            <h1 className="mb-4 text-4xl font-bold text-white">Contact Us</h1>
            <p className="text-lg text-white/90">
              Have questions? We'd love to hear from you.
            </p>
          </div>
        </div>
      </AnimatedBackground>

      {/* Contact Form Section */}
      <section className="py-16 md:py-24">
        <div className="container">
          <div className="mx-auto max-w-3xl text-center">
            <h2 className="mb-6 text-4xl font-bold text-[#061E3C] md:text-5xl">
              Reach Out to Us
            </h2>
            <p className="mb-10 text-lg text-gray-600 md:text-xl">
              We are always happy to connect with students, alumni, and supporters of the Navodaya community. Share your message or query below and our team will respond as soon as possible.
            </p>
          </div>
        </div>
        <div className="container">
          <div className="grid gap-8 md:grid-cols-2 max-w-4xl mx-auto">
            <Card className="bg-card/80 backdrop-blur-sm">
              <CardHeader>
                <CardTitle>Send us a message</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div>
                  <Label htmlFor="name">Name</Label>
                  <Input
                    id="name"
                    placeholder="Your name"
                    value={formData.name}
                    onChange={handleChange}
                  />
                </div>
                <div>
                  <Label htmlFor="email">Email</Label>
                  <Input
                    id="email"
                    type="email"
                    placeholder="your@email.com"
                    value={formData.email}
                    onChange={handleChange}
                  />
                </div>
                <div>
                  <Label htmlFor="message">Message</Label>
                  <Textarea
                    id="message"
                    placeholder="Your message..."
                    rows={4}
                    value={formData.message}
                    onChange={handleChange}
                  />
                </div>
                <Button type="button" className="w-full" onClick={handleSubmit}>
                  Send Message
                </Button>
                {statusMessage && (
                  <p className="mt-2 text-center text-sm text-green-600">
                    {statusMessage}
                  </p>
                )}
              </CardContent>
            </Card>

            {/* Contact Info Cards */}
            <div className="space-y-6">
              {/* Email */}
              <Card className="bg-card/80 backdrop-blur-sm">
                <CardContent className="pt-6">
                  <div className="flex items-start gap-4">
                    <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary/10">
                      <Mail className="h-5 w-5 text-primary" />
                    </div>
                    <div>
                      <h3 className="font-semibold">Email</h3>
                      <p className="text-muted-foreground">velevateunavodaya@gmail.com</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
              {/* Phone */}
              <Card className="bg-card/80 backdrop-blur-sm">
                <CardContent className="pt-6">
                  <div className="flex items-start gap-4">
                    <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary/10">
                      <Phone className="h-5 w-5 text-primary" />
                    </div>
                    <div>
                      <h3 className="font-semibold">Phone</h3>
                      <p className="text-muted-foreground">+91 8892662603</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
              {/* Location */}
              <Card className="bg-card/80 backdrop-blur-sm">
                <CardContent className="pt-6">
                  <div className="flex items-start gap-4">
                    <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary/10">
                      <MapPin className="h-5 w-5 text-primary" />
                    </div>
                    <div>
                      <h3 className="font-semibold">Location</h3>
                      <p className="text-muted-foreground">Bengaluru, Karnataka, India</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
}
