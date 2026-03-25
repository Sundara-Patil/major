import { useState } from "react";
import { ChevronLeft, ChevronRight, Quote } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";

const testimonials = [
  {
    name: "Rahul Kumar",
    role: "IIT Delhi, Class of 2020",
    batch: "JNV Varanasi, 2014",
    content:
      "The mentorship program helped me navigate the IIT-JEE preparation journey. The volunteers who were JNV alumni themselves understood my challenges and guided me at every step.",
  },
  {
    name: "Priya Sharma",
    role: "Doctor, AIIMS Delhi",
    batch: "JNV Jaipur, 2012",
    content:
      "When I was in JNV, I had no idea about NEET preparation. The career guidance sessions organized by volunteers opened my eyes to possibilities I never knew existed.",
  },
  {
    name: "Amit Patel",
    role: "Software Engineer, Google",
    batch: "JNV Ahmedabad, 2010",
    content:
      "Now I volunteer for the 'After JNV' phase, helping students with placements and interview preparation. It's my way of giving back to the community that shaped me.",
  },
  {
    name: "Sunita Devi",
    role: "Class 6 Student",
    batch: "Preparing for JNV 2025",
    content:
      "The awareness camps in my village taught my parents about JNV. Now I'm preparing with the free study materials provided by the volunteers. I dream of becoming an engineer!",
  },
];

export function TestimonialsSection() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const next = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
  };

  const prev = () => {
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  return (
    <section className="py-20 md:py-28 bg-primary/20">
      <div className="container">
        <div className="mx-auto mb-12 max-w-2xl text-center">
          <h2 className="mb-4 text-3xl font-bold tracking-tight md:text-4xl">
            Voices from Our Community
          </h2>
          <p className="text-lg text-muted-foreground">
            Hear from students and alumni who have been part of our journey.
          </p>
        </div>

        <div className="relative mx-auto max-w-4xl">
          <Card className="overflow-hidden">
            <CardContent className="p-8 md:p-12">
              <Quote className="mb-6 h-10 w-10 text-primary/20" />
              <blockquote className="mb-8 text-lg md:text-xl leading-relaxed">
                {testimonials[currentIndex].content}
              </blockquote>
              <div className="flex items-center gap-4">
                <Avatar className="h-12 w-12">
                  <AvatarFallback className="bg-primary text-primary-foreground">
                    {testimonials[currentIndex].name
                      .split(" ")
                      .map((n) => n[0])
                      .join("")}
                  </AvatarFallback>
                </Avatar>
                <div>
                  <div className="font-semibold">
                    {testimonials[currentIndex].name}
                  </div>
                  <div className="text-sm text-muted-foreground">
                    {testimonials[currentIndex].role}
                  </div>
                  <div className="text-sm text-primary">
                    {testimonials[currentIndex].batch}
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Navigation */}
          <div className="mt-6 flex items-center justify-center gap-4">
            <Button variant="outline" size="icon" onClick={prev}>
              <ChevronLeft className="h-4 w-4" />
            </Button>
            <div className="flex gap-2">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentIndex(index)}
                  className={`h-2 w-2 rounded-full transition-colors ${
                    index === currentIndex
                      ? "bg-primary"
                      : "bg-muted-foreground/30"
                  }`}
                />
              ))}
            </div>
            <Button variant="outline" size="icon" onClick={next}>
              <ChevronRight className="h-4 w-4" />
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}