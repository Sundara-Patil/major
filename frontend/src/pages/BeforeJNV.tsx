import before from "@/assets/before.png";
import { Layout } from "@/components/layout/Layout";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { AnimatedBackground } from "@/components/ui/AnimatedBackground";
import { PhaseGallery } from "@/components/gallery/PhaseGallery";
import { 
  BookOpen, 
  ClipboardCheck, 
  GraduationCap, 
  Users, 
  ArrowRight,
  Heart
} from "lucide-react";
import { Link } from "react-router-dom";
import bgBeforeJnv from "@/assets/bg-before-jnv.jpg";

const sections = [
  {
    title: "Awareness Programs",
    description: "Information campaigns about JNV in rural and underserved areas",
    icon: Users,
    content: [
      "Village awareness camps about JNV and its benefits",
      "Parent counseling sessions",
      "School visits to identify potential candidates",
      "Distribution of information brochures",
    ],
  },
  {
    title: "Study Materials",
    description: "Curated resources and guides for entrance exam preparation",
    icon: BookOpen,
    content: [
      "Subject-wise study guides (Math, Mental Ability, Language)",
      "Previous years' question papers with solutions",
      "Mock test series for practice",
      "Video tutorials by volunteer teachers",
    ],
  },
  {
    title: "Application Help",
    description: "Step-by-step guidance for exam registration and application",
    icon: ClipboardCheck,
    content: [
      "Online application form filling assistance",
      "Document preparation checklist",
      "Important dates and deadlines calendar",
      "Common mistakes to avoid",
    ],
  },
  {
    title: "Coaching Information",
    description: "Details about coaching initiatives led by volunteers",
    icon: GraduationCap,
    content: [
      "Free coaching centers run by volunteers",
      "Online coaching classes schedule",
      "Weekend doubt-clearing sessions",
      "One-on-one mentoring programs",
    ],
  },
];

const galleryImages = [
  { src: "/before/2.1.jpeg", alt: "IMAGE"},
  { src: "/before/2.2.jpeg", alt: "IMAGE"},
  { src: "/before/2.3.jpeg", alt: "IMAGE"},
  { src: "/before/2.5.jpeg", alt: "IMAGE"},
  { src: "/before/2.6.jpeg", alt: "IMAGE"},
  { src: "/before/2.7.jpeg", alt: "IMAGE"},
];

export default function BeforeJNV() {
  return (
    <Layout>
      <div className="min-h-screen bg-white">

        {/* HERO */}
        <AnimatedBackground
          image={bgBeforeJnv}
          animation="pan"
          className="relative py-32 md:py-40"
        >
          <div className="absolute inset-0 bg-[#061E3C]/75"></div>

          <div className="relative container">
            <div className="mx-auto max-w-3xl text-center">

              <img
                src={before}
                alt="Navodaya Elevate Logo"
                className="mx-auto mb-6 h-16 w-auto object-contain"
              />

              <h1 className="mb-4 text-4xl font-bold tracking-tight text-white md:text-5xl">
                Saṅkalpa
              </h1>

              <p className="text-lg text-white/90 md:text-xl">
                Preparing aspiring students for JNV entrance exam through volunteer-led
                awareness programs, study materials, and coaching initiatives.
              </p>

            </div>
          </div>
        </AnimatedBackground>

        {/* MAIN SECTIONS */}
        <section className="py-16 md:py-24 bg-white">
          <div className="container">
            <div className="grid gap-8 md:grid-cols-2">
              {sections.map((section) => (
                <Card
                  key={section.title}
                  className="border border-yellow-400/30 bg-white shadow-sm hover:shadow-lg transition"
                >
                  <CardHeader>
                    <div className="mb-2 inline-flex h-10 w-10 items-center justify-center rounded-lg bg-yellow-400/20">
                      <section.icon className="h-5 w-5 text-[#061E3C]" />
                    </div>

                    <CardTitle className="text-[#061E3C]">
                      {section.title}
                    </CardTitle>

                    <CardDescription className="text-gray-600">
                      {section.description}
                    </CardDescription>
                  </CardHeader>

                  <CardContent>
                    <ul className="space-y-2">
                      {section.content.map((item) => (
                        <li key={item} className="flex items-start gap-2 text-sm text-gray-700">
                          <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-yellow-400" />
                          {item}
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* GALLERY */}
        <section className="bg-white py-20">
          <PhaseGallery
            title="Moments from Our Programs"
            description="Glimpses of our awareness camps, coaching sessions, and student preparation activities."
            images={galleryImages}
            phaseColor="before"
          />

          <div className="flex justify-center pt-6">
            <Link to="/gallery/before-jnv">
              <Button className="bg-accent text-primary hover:bg-yellow-400 font-semibold">
                See More Photos
                <ArrowRight className="h-4 w-4" />
              </Button>
            </Link>
          </div>
        </section>

        {/* CTA */}
        <section className="py-24 bg-white">
          <div className="container">
            <div className="mx-auto max-w-3xl text-center">

              {/* Tag
              <div className="mb-6 inline-flex items-center gap-2 rounded-full bg-gray-100 px-4 py-1.5 text-sm text-[#061E3C]">
                <Heart className="h-4 w-4 text-yellow-500" />
                Be part of the change
              </div> */}

              {/* Heading */}
              <h2 className="mb-6 text-4xl font-bold text-[#061E3C] md:text-5xl">
                Want to Help Aspiring Students?
              </h2>

              {/* Description */}
              <p className="mb-10 text-lg text-gray-600 md:text-xl">
                Join as a volunteer and help conduct awareness camps, create study materials, or mentor students preparing for JNVST entrance exam.
              </p>

              {/* Buttons */}
              <div className="flex flex-col items-center justify-center gap-4 sm:flex-row">

                {/* Primary */}
                <Button
                  size="lg"
                  className="bg-accent text-primary hover:bg-yellow-400 font-semibold"
                  asChild
                >
                  <Link to="/volunteer">
                    Become a Volunteer
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>

              </div>

            </div>
          </div>
        </section>

      </div>
    </Layout>
  );
}