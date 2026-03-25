import during from "@/assets/during.png";
import { Layout } from "@/components/layout/Layout";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { AnimatedBackground } from "@/components/ui/AnimatedBackground";
import {
  Compass,
  Sparkles,
  Calendar,
  Wrench,
  ArrowRight,
  BookOpen,
  Target,
  Lightbulb
} from "lucide-react";
import { Link } from "react-router-dom";
import bgDuringJnv from "@/assets/bg-during-jnv.jpg";
import bgDavanagere from "@/assets/bg-davanagere.jpeg";
import bgChitradurga from "@/assets/bg-chitradurga.jpg";
import bgHassan from "@/assets/bg-hassan.jpeg";

const sections = [
  {
    title: "Career Guidance",
    description: "Resources and counseling to explore various career paths",
    icon: Compass,
    content: [
      "Career aptitude assessments",
      "Field-specific guidance sessions",
      "Understanding different career paths after 10th and 12th",
      "Entrance exam awareness (JEE, NEET, CLAT, etc.)",
    ],
  },
  {
    title: "Motivation Corner",
    description: "Inspirational content and tips to stay focused",
    icon: Sparkles,
    content: [
      "Success stories from JNV alumni",
      "Study tips and productivity hacks",
      "Mental health and stress management",
      "Goal setting and time management",
    ],
  },
  {
    title: "Seminars & Workshops",
    description: "Interactive events for skill-building and learning",
    icon: Calendar,
    content: [
      "Monthly webinars by industry professionals",
      "Workshops on emerging technologies",
      "Communication and soft skills training",
      "Leadership development programs",
    ],
  },
  {
    title: "Skill Development",
    description: "Building future-ready skills beyond academics",
    icon: Wrench,
    content: [
      "Basic coding and programming workshops",
      "Public speaking and debate training",
      "Creative arts and design thinking",
      "Financial literacy and entrepreneurship basics",
    ],
  },
];

const motivationTips = [
  {
    icon: Target,
    title: "Set Clear Goals",
    description: "Define what you want to achieve this year and break it into monthly targets.",
  },
  {
    icon: BookOpen,
    title: "Consistent Learning",
    description: "Dedicate at least 2 hours daily to self-study beyond regular classes.",
  },
  {
    icon: Lightbulb,
    title: "Stay Curious",
    description: "Ask questions, explore new subjects, and never stop being curious.",
  },
];

const jnvs = [
  {
    title: "JNV DAVANAGERE",
    href: "/jnv-davanagere",
    bgImage: bgDavanagere,
  },
  {
    title: "JNV HASSAN",
    href: "/jnv-hassan",
    bgImage: bgHassan,
  },
  {
    title: "JNV CHITRADURGA",
    href: "/jnv-chitradurga",
    bgImage: bgChitradurga,
  },
];

export default function DuringJNV() {
  return (
    <Layout>
      <div className="min-h-screen">

        {/* HERO */}
        <AnimatedBackground
          image={bgDuringJnv}
          animation="pan"
          className="py-20 md:py-28"
        >
          <div className="container">
            <div className="mx-auto max-w-3xl text-center">

              <img
                src={during}
                alt="Navodaya Elevate Logo"
                className="mx-auto mb-6 h-16 w-auto object-contain"
              />

              <h1 className="mb-4 text-4xl font-bold md:text-5xl text-white">
                Pravřtti
              </h1>

              <p className="text-lg text-white/80 md:text-xl">
                Supporting current JNV students with career guidance,
                skill development, mentorship, and motivation to excel
                in their journey.
              </p>

            </div>
          </div>
        </AnimatedBackground>

        {/* MOTIVATION TIPS */}
        <section className="py-14 bg-white">
          <div className="container">
            <div className="grid gap-6 md:grid-cols-3">

              {motivationTips.map((tip) => (
                <div key={tip.title} className="flex items-start gap-4 p-5 rounded-xl shadow-sm border">

                  <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-[#D4AF37]/20">
                    <tip.icon className="h-6 w-6 text-[#061E3C]" />
                  </div>

                  <div>
                    <h3 className="font-semibold text-[#061E3C]">{tip.title}</h3>
                    <p className="text-sm text-gray-600">{tip.description}</p>
                  </div>

                </div>
              ))}

            </div>
          </div>
        </section>

        {/* MAIN SECTIONS */}
        <section className="py-20 bg-white">
          <div className="container">

            <div className="grid gap-8 md:grid-cols-2">

              {sections.map((section) => (
                <Card key={section.title} className="border border-[#D4AF37]/20 shadow-sm">

                  <CardHeader>

                    <div className="mb-2 inline-flex h-10 w-10 items-center justify-center rounded-lg bg-[#D4AF37]/20">
                      <section.icon className="h-5 w-5 text-[#061E3C]" />
                    </div>

                    <CardTitle className="text-[#061E3C]">{section.title}</CardTitle>
                    <CardDescription>{section.description}</CardDescription>

                  </CardHeader>

                  <CardContent>
                    <ul className="space-y-2">

                      {section.content.map((item) => (
                        <li key={item} className="flex items-start gap-2 text-sm">

                          <span className="mt-1.5 h-1.5 w-1.5 rounded-full bg-[#D4AF37]" />

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

        {/* JNV CAMPUSES */}
        <section className="py-24">
          <div className="container">

            <div className="mx-auto mb-14 max-w-2xl text-center">
              <h2 className="mb-4 text-3xl font-bold text-[#061E3C] md:text-4xl">
                Connecting with Navodaya Students Across Campuses
              </h2>

              <p className="text-lg text-gray-600">
                Every visit strengthens mentorship, inspires confidence,
                and empowers students to achieve more.
              </p>
            </div>

            <div className="grid gap-6 md:grid-cols-3">
              {jnvs.map((phase, index) => (
                <AnimatedBackground
                  key={phase.title}
                  image={phase.bgImage}
                  // overlay={phase.overlay}
                  animation="zoom"
                  className="relative rounded-xl min-h-[350px] flex items-center justify-center"
                >
                  <Card
                    className="relative z-10 bg-transparent border-0 text-center"
                    style={{ animationDelay: `${index * 100}ms` }}
                  >
                    <CardHeader>
                      <CardTitle className="text-4xl font-bold text-white">
                        {phase.title}
                      </CardTitle>
                    </CardHeader>
                    {/* <CardContent> */}
                      <Button
                        size="lg"
                        className="mt-8 bg-accent text-primary hover:bg-yellow-400 font-semibold"
                        asChild
                      >
                        <Link to={phase.href}>
                          Gallery
                          <ArrowRight className="ml-2 h-4 w-4" />
                        </Link>
                      </Button>
                    {/* </CardContent> */}
                  </Card>
                </AnimatedBackground>
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-24 bg-white">
          <div className="container">

            <div className="mx-auto max-w-3xl text-center">

              <h2 className="mb-6 text-4xl font-bold text-[#061E3C] md:text-5xl">
                Ready to Make a Difference?
              </h2>

              <p className="mb-10 text-lg text-gray-600 md:text-xl">
                Join our community of volunteers and help guide
                Navodaya students towards brighter futures.
              </p>

              <div className="flex flex-col gap-4 sm:flex-row sm:justify-center">

                <Button
                  size="lg"
                  className="bg-[#D4AF37] text-[#061E3C] hover:bg-[#C19B2E] font-semibold px-8"
                  asChild
                >
                  <Link to="/volunteer">
                    Become a Volunteer
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>

                <Button
                  size="lg"
                  variant="outline"
                  className="border-[#061E3C] text-[#061E3C] hover:bg-[#061E3C] hover:text-white px-8"
                  asChild
                >
                  <Link to="/contact">
                    Contact Us
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