import { Layout } from "@/components/layout/Layout";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { AnimatedBackground } from "@/components/ui/AnimatedBackground";
import { cn } from "@/lib/utils";
import bgDavanagere from "@/assets/bg-davanagere.jpeg";
import bgChitradurga from "@/assets/bg-chitradurga.jpg";
import bgHassan from "@/assets/bg-hassan.jpeg";
import bgDuringJnv from "@/assets/bg-during-jnv.jpg";
import during from "@/assets/during.png";

const jnvs = [
  {
    title: "JNV DAVANAGERE",
    // description:
    //   "For aspiring students preparing for JNV entrance exam. Get study materials, application help, and coaching information.",
    href: "/jnv-davanagere",
    color: "text-phase-before",
    bgColor: "bg-phase-before/10",
    borderColor: "border-phase-before/20",
    // features: ["  ", "  ", "  ", "  "],
    bgImage: bgDavanagere,
    overlay: "phase-before" as const,
  },
  {
    title: "JNV HASSAN",
    // description:
    //   "For current JNV students. Access career guidance, skill development resources, and connect with mentors.",
    href: "/jnv-hassan",
    color: "text-phase-during",
    bgColor: "bg-phase-during/10",
    borderColor: "border-phase-during/20",
    // features: ["  ", "  ", "  ", "  "],
    bgImage: bgHassan,
    overlay: "phase-during" as const,
  },
  {
    title: "JNV CHITRADURGA",
    // description:
    //   "For JNV alumni. Get higher education guidance, job opportunities, and give back to the community.",
    href: "/jnv-chitradurga",
    color: "text-phase-after",
    bgColor: "bg-phase-after/10",
    borderColor: "border-phase-after/20",
    // features: ["   ", "  ", "  ", "  "],
    bgImage: bgChitradurga,
    overlay: "phase-after" as const,
  },
];

export default function GalleryDuringJNV() {
  return (
    <Layout>
      {/* Hero with animated background */}
      <AnimatedBackground
          image={bgDuringJnv}
          // overlay="phase-during"
          animation="pan"
          className="py-16 md:py-24"
        >
          <div className="container">
            <div className="mx-auto max-w-3xl text-center">
              {/* <div className="mb-4 inline-flex items-center gap-2 rounded-full bg-white/20 px-4 py-1.5 text-sm font-medium text-white backdrop-blur-sm">
                <Users className="h-4 w-4" />
                Phase 2
              </div> */}
              <img
                src={during}
                alt="Navodaya Elevate Logo"
                className="mx-auto mb-4 h-16 w-auto object-contain"
              />
              <h1 className="mb-4 text-4xl font-bold tracking-tight text-white md:text-5xl text-white/90">
                Pravřtti
              </h1>
              <p className="text-lg text-white/70 md:text-xl">
                Supporting current JNV students with career guidance, skill development,
                mentorship, and motivation to excel in their journey.
              </p>
            </div>
          </div>
      </AnimatedBackground>
      <section className="py-10 md:py-28">
        <div className="container">
          <div className="mx-auto mb-12 max-w-2xl text-center">
            <h2 className="mb-4 text-3xl font-bold tracking-tight md:text-4xl">
              Connecting with Navodaya Students Across Campuses
            </h2>
            <p className="text-lg text-muted-foreground max-w-8xl">
              Every visit strengthens mentorship, inspires confidence, and empowers students to achieve more.
              Through meaningful interactions, we nurture ambition and help shape brighter futures.
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
                    <Button variant="secondary" className="mt-4 bg-accent text-primary hover:bg-yellow-400 font-semibold" asChild>
                      <Link to={phase.href}>
                        Gallery
                        <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                      </Link>
                    </Button>
                  {/* </CardContent> */}
                </Card>
              </AnimatedBackground>
            ))}
          </div>
        </div>
      </section>
      <section className="py-24 bg-white">
          <div className="container">
            <div className="mx-auto max-w-3xl text-center">

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
    </Layout>
  );
}

// export default GalleryDuringJNV;