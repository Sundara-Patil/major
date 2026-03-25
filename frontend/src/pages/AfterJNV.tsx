import after from "@/assets/after.png";
import { Layout } from "@/components/layout/Layout";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { AnimatedBackground } from "@/components/ui/AnimatedBackground";
import {
  GraduationCap,
  Briefcase,
  Users,
  Heart,
  ArrowRight,
  Building,
  BookOpen,
  Network,
  Rocket,
} from "lucide-react";
import { Link } from "react-router-dom";
import bgAfterJnv from "@/assets/bg-after-jnv.jpg";

const sections = [
  {
    title: "Higher Education",
    description: "Guidance for undergraduate and postgraduate admissions",
    icon: GraduationCap,
    content: [
      "College selection guidance based on career goals",
      "Entrance exam preparation (JEE, NEET, CLAT, CAT, etc.)",
      "Scholarship and financial aid information",
      "Study abroad opportunities and guidance",
    ],
  },
  {
    title: "Internships & Jobs",
    description: "Career opportunities curated by the alumni community",
    icon: Briefcase,
    content: [
      "Internship postings from JNV alumni companies",
      "Job referrals from the alumni network",
      "Resume building and interview preparation",
      "Campus placement preparation workshops",
    ],
  },
  {
    title: "Field-Specific Sessions",
    description: "Expert sessions based on different career fields",
    icon: Building,
    content: [
      "Technology and engineering pathways",
      "Medical and healthcare careers",
      "Civil services and government jobs",
      "Entrepreneurship and startups",
    ],
  },
  {
    title: "Alumni Network",
    description: "Connect with fellow JNV alumni across the globe",
    icon: Network,
    content: [
      "Regional alumni chapters and meetups",
      "Online networking platforms",
      "Alumni directory for professional connections",
      "Annual alumni reunions and events",
    ],
  },
];

const giveBackWays = [
  {
    icon: BookOpen,
    title: "Create Study Materials",
    description: "Share your knowledge by creating guides for entrance exams you've cracked.",
  },
  {
    icon: Users,
    title: "Mentor Students",
    description: "Guide current JNV students in academics, career, or personal growth.",
  },
  {
    icon: Rocket,
    title: "Conduct Sessions",
    description: "Share your professional journey and insights through webinars.",
  },
  {
    icon: Heart,
    title: "Awareness Campaigns",
    description: "Help spread awareness about JNV in underserved communities.",
  },
];

export default function AfterJNV() {
  return (
    <Layout>
      <div className="min-h-screen">

        {/* HERO */}
        <AnimatedBackground
          image={bgAfterJnv}
          animation="pan"
          className="py-32 md:py-40"
        >
          <div className="container">
            <div className="mx-auto max-w-3xl text-center">
              <img
                src={after}
                alt="Navodaya Elevate Logo"
                className="mx-auto mb-4 h-16 w-auto object-contain"
              />
              <h1 className="mb-4 text-4xl font-bold tracking-tight md:text-5xl text-white">
                Utkarsh
              </h1>
              <p className="text-lg text-white/90 md:text-xl">
                For JNV alumni - higher education guidance, career opportunities,
                networking, and ways to give back to the community.
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
                  className="border-gray-200 bg-white hover:shadow-lg transition"
                >
                  <CardHeader>
                    <div className="mb-2 inline-flex h-10 w-10 items-center justify-center rounded-lg bg-yellow-400/20">
                      <section.icon className="h-5 w-5 text-[#061E3C]" />
                    </div>

                    <CardTitle>{section.title}</CardTitle>
                    <CardDescription>{section.description}</CardDescription>
                  </CardHeader>

                  <CardContent>
                    <ul className="space-y-2">
                      {section.content.map((item) => (
                        <li key={item} className="flex items-start gap-2 text-sm">
                          <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-yellow-500" />
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

        {/* NEED HELP */}
        <section className="py-16 md:py-24 bg-white">
          <div className="container">
            <Card className="border-gray-200 bg-white shadow-md">
              <CardContent className="p-8 md:p-12">
                <div className="mx-auto max-w-2xl text-center">
                  <div className="mb-4 inline-flex items-center gap-2 rounded-full bg-yellow-400/20 px-4 py-1.5 text-sm font-medium text-[#061E3C]">
                    Student Support
                  </div>

                  <h2 className="mb-4 text-3xl font-bold">Need Help?</h2>

                  <p className="mb-8 text-muted-foreground">
                    Whether you need career guidance, mentorship, or financial support -
                    our volunteer network is here to help you succeed.
                  </p>

                  <Button
                    size="lg"
                    className="bg-yellow-400 text-[#061E3C] hover:bg-yellow-300 font-semibold"
                    asChild
                  >
                    <Link to="/student-help">
                      Register
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </Link>
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* GIVE BACK */}
        <section className="border-t border-gray-200 py-16 md:py-24 bg-white">
          <div className="container">
            <div className="mx-auto mb-12 max-w-2xl text-center">
              <h2 className="mb-4 text-3xl font-bold">
                Give Back to the Community
              </h2>

              <p className="text-muted-foreground">
                As a JNV alumni, you have the power to shape the future of thousands
                of students.
              </p>
            </div>

            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
              {giveBackWays.map((way) => (
                <Card
                  key={way.title}
                  className="text-center bg-white border-gray-200 hover:shadow-lg transition"
                >
                  <CardContent className="pt-6">
                    <div className="mx-auto mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-yellow-400/20">
                      <way.icon className="h-6 w-6 text-[#061E3C]" />
                    </div>

                    <h3 className="mb-2 font-semibold">{way.title}</h3>

                    <p className="text-sm text-muted-foreground">
                      {way.description}
                    </p>
                  </CardContent>
                </Card>
              ))}
            </div>

            <div className="mt-12 text-center">
              <Button
                size="lg"
                className="bg-yellow-400 text-[#061E3C] hover:bg-yellow-300 font-semibold"
                asChild
              >
                <Link to="/volunteer">
                  Start Volunteering
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
            </div>
          </div>
        </section>

      </div>
    </Layout>
  );
}